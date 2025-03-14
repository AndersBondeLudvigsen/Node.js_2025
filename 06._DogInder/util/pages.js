import { readPage, constructPage } from "./templatingEngine.js";


const frontpage = readPage('./public/pages2/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage) ;


const matchespage = readPage('./public/pages2/matches/matches.html');
export const matchesPagePage = constructPage(matchespage);
