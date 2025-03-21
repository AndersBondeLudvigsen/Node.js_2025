import { readPage, constructPage } from "./templatingEngine.js";


const frontpage = readPage('./public/pages2/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage) ;

const contactpage = readPage('./public/pages2/contact/contact.html');
export const contactPagePage = constructPage(contactpage,
{
    title: 'DogInder | Matches',

}
);

const matchespage = readPage('./public/pages2/matches/matches.html');
export const matchesPagePage = constructPage(matchespage,
    {
     title: 'DogInder | Matches',
     cssLinks: '<link rel="stylesheet" href="/pages2/matches/matches.css">'
    }
);
