/**
 * Created by Josh on 4/20/16.
 */
var tok = require("./token.js");

//main lexer function
function Lexer(strings) {
    var lexed = [];
    for(var i=0;i<strings;i++) {
        if(/def .*?\):/.test(strings[i])) {
            lexed.push(new tok.token(strings[i], "function"))
        }
    }
}
