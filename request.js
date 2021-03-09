let request=require("request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
request(url,cb);
// console.log("Before");
function cb(error,response,html){
    // console.log(html);

    let cheerioselector=cheerio.load(html);
    let table=cheerioselector(".table.batsman")
   // console.log(element.text());
   let bowlersHtmlString="";
   for(let i=0;i<table.length;i++)
   {
       let teamBatsman=cheerioselector(table[i]).find("tr");
       for(let j=0;j<teamBatsman.length-6;j++)
       {
           let eachBascol=cheerioselector(teamBatsman[j]).find("td");
           let playerName=cheerioselector(eachBascol[0]).text();
           let run=cheerioselector(eachBascol[2]).text();
           console.log(playerName,"   ",run);

       }
   }
}