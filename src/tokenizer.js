//file that contains the tokenizer and splitter

var token = require("./token.js");

var Splitter = (function () {
    function Splitter() {
    }
    //splits the file by python delimeters
    Splitter.splitfile = function (text) {
        var sfile = text.split(/(\n)|(\t)|( )|(,)|(\.)|(\()|(\))|(\[)|(\])|(\{)|(\})|(\")|(\')|(\#)/);
        var news = [];
        for(var i=0;i<sfile.length;i++) {
            if (sfile[i]==undefined || sfile[i] == '') delete sfile[i];
            else news.push(sfile[i]);
        }
        return news;
    };
    return Splitter;
})();
//exports splitter class
exports.splitter = Splitter;

var Tokenizer = (function () {
    function Tokenizer() {
        //automata modes for tagging
        this.funcmode = false;
        this.parammode = false;
        this.listmode = false;
        this.dictmode = false;
        this.tuplemode = false;
        this.callmode = false;
        this.stringmode = false;
        this.funcname = false;
    }
    Tokenizer.prototype.tokenize = function (lst) {
        var tokenlst = [];
        for(var i=0;i<lst.length;i++) {
            switch(lst[i]) {
                case "def": tokenlst.push(new token.token(lst[i], "func start"));
                    this.funcmode = true;
                    this.funcname = true;
                    break;
                case "if": {

                }
                    break;
                case "else": {

                }
                    break;
                case "try":
                    break;
                case "for":
                    break;
                case "in":
                    break;
                case "is":
                    break;
                case "not":
                    break;
                case "lambda":
                    break;
                case "and":
                    break;
                case "or":
                    break;
                case "(":
                    break;
                case ")":
                    break;
                default:
                    break;
            }
        }
    };
    return Tokenizer;
})();