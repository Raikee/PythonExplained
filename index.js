/**
 * Created by Josh on 1/29/16.
 */
//top level file for module

var fstr = require("./Fstrings.js");
var line = require("./src/line.js");
var fs = require("fs");


fs.readFile("sic.py", "utf-8", function(err, data){
    if(err) throw err;
    var sfile = data.split(/(\n)|(\t)|( )|(,)|(\.)|(\()|(\))|(\[)|(\])|(\{)|(\})|(\")|(\')/);
    var news = [];
    for(var i=0;i<sfile.length;i++) {
        if (sfile[i]==undefined || sfile[i] == '') delete sfile[i];
        else news.push(sfile[i]);
    }
    console.log(news);
});