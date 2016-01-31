//file that contains the tokenizer and splitter

var Splitter = (function () {
    function Splitter() {
    }
    //splits the file by python delimeters
    Splitter.splitfile = function (text) {
        var sfile = text.split(/(\n)|(\t)|( )|(,)|(\.)|(\()|(\))|(\[)|(\])|(\{)|(\})|(\")|(\')/);
        var news = [];
        for(var i=0;i<sfile.length;i++) {
            if (sfile[i]==undefined || sfile[i] == '') delete sfile[i];
            else news.push(sfile[i]);
        }
        return news;
    };
    return Splitter;
})();