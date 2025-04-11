import bcrypt from 'bcryptjs';

const saltRounds = 12;

const password = "Hunter12";
const hashedPassword = "$2b$12$jgl8VQn8nyQaLXHCgmHTm.wOliwz0zliO6PFqjOnfv/m9pYfIO8CG"

// (/signup)
//SIGN UP VED NY BRUGER 
const passwordHash =  await bcrypt.hash(password, saltRounds);

//console.log(passwordHash)

// (/login)

const isSame = await bcrypt.compare(password,hashedPassword)

console.log(isSame)