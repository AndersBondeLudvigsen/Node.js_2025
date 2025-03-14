import fs from 'fs';

const header = fs.readFileSync("./public/componetens/header/header.html").toString();
const footer = fs.readFileSync("./public/componetens/footer/footer.html").toString();

const frontpage = fs.readFileSync('./public/frontpage/frontpage.html').toString();
const matchespage = fs.readFileSync('./public/matches/matches.html').toString();

export const frontpagePage = header + frontpage + footer;
export const matchesPagePage = header + matchespage + footer;
