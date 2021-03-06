var line = require("./line.js");

//class for categorizing statements and lines
var categorize = (function () {
    function categorize() {
    }
    //accepts line objects
    categorize.iscompare = function (input) {
        if(/^.+\=\=.+$|^.+\<\=.+$|^.+\>\=.+$|^.+\>.+$|^.+\<.+$|^.+\!\=.+$/.test(input.statement)) input.settag("compare");
    };

    categorize.isfuncdef = function (input) {
        if(/^def [^ ]+\([^\(\)]\)/.test(input.statement)) input.settag("func def");
        else ;
    };

    categorize.isif = function (input){
        if(/^if .+\:$/.test(input)) input.settag("if state");
        else ;
    };
    return categorize;
})();
