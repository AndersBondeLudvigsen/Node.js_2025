
//Importere ROuter fra express
import { Router } from 'express'

//Instansjere Router i en variablen router
const router = Router();

import { frontpagePage,matchesPagePage, contactPagePage} from '../util/pages.js';



router.get("/",(req,res)=>{
    res.send(frontpagePage)
});

router.get("/matches",(req,res)=>{
    res.send(matchesPagePage)
});

router.get("/contact", (req,res)=>{
    res.send(contactPagePage)
})
// Exportere router
export default router;