import fs from "fs";

export function readPage(path){
    return fs.readFileSync(path).toString();
}

const header = readPage("./public/componetens/header/header.html")
const footer = readPage("./public/componetens/footer/footer.html")

export function constructPage(pageContent){
    return header + pageContent + footer;

}