/**
 * Created by Josh on 1/29/16.
 */
//top level file for module

var tok = require("./src/tokenizer.js");
var fs = require("fs");


fs.readFile("sic.py", "utf-8", function(err, data){
    if(err) throw err;
    var tokens = tok.SplitByRegex(data, tok.TokenExp);
    console.log(tokens);
});