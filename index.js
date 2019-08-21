const parser = require('fast-xml-parser');
const fs = require('fs');
const puppeteer = require('puppeteer');


const xmlData = fs.readFileSync("data.xml", "utf8");

if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
    var jsonObj = parser.parse(xmlData);
}
 
var tObj = parser.getTraversalObj(xmlData);
var jsonObj = parser.convertToJson(tObj);

// console.log('jsonObj=====', JSON.stringify(jsonObj));

const articleIds = jsonObj.feed.entry.map((item) => {
    return item['content']['m:properties']['d:ItemId']
})

// (async () => {

articleIds.forEach( async (articleId) => {
    const browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();
    await page.goto(`https://www.theweathernetwork.com/news/articles/something/${articleId}`, {waitUntil: 'networkidle2'});

    await browser.close();    
});
    
// })();

