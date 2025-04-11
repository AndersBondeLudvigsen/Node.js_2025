import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit'
import session from 'express-session';
import dotenv from 'dotenv/config';

const app = express();

function greetLoggedInUsers(req, res, next) {
    // let's assume that we do a DB check to see that they are logged in here
    console.log("Welcome, logged in user");
    next();
}

//import dotenv from 'dotenv';
//dotenv.config();




app.use(session({
    // secret should not be pushed
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Skal være true hvis man kører produktion
  }))

app.use("/auth", greetLoggedInUsers);
app.use(helmet())


const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 300, // Limit each IP to 300 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(generalLimiter)

const authLimiter =  rateLimit({
    windowMs:15 * 60 * 1000, // 15 min
    limit : 5, // limit på  5 requests
    standardHeaders: 'draft-8',
    legacyHeaders: false
})

app.use("/auth", authLimiter)


import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);


import sessionRouter from "./routers/sessionRouter.js"
app.use(sessionRouter)



 app.get("/{*splat}", (req, res) => {
     res.status(404).send("<h1>Not Found</h1>")
 });

 app.all("/{*splat}", (req,res)=>{
    res.status(404).send({ message: `${req.path} for ${req.method} not found`})
 })


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));