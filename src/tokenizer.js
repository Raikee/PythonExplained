//file that contains the tokenizer and splitter

function SplitByTokens(string, arr) {
    var regex = "(";
    for(var i=0;i<arr.length;i++) {
        var temp = arr[i].split("");
        for(var j=0;j<temp.length;j++) {
            regex += "\\" + temp[j];
        }
        regex += ")|(";
    }
    regex = regex.slice(0, regex.length-2);
    var splitter = new RegExp(regex);
    var splits = string.split(splitter);
    for(var k=0;k<splits.length;k++) {
        if(splits[k] === "" || splits[k] === undefined) {
            splits.splice(k, 1);
        }
    }
    return splits;
}
exports.SplitByTokens = SplitByTokens;

//automatically splits to python code
function SplitByRegex(code) {
    var splits = code.split(TokenExp);
    var tokens = [];
    for(var k=0;k<splits.length;k++) {
        if(splits[k]) {
            tokens.push(splits[k]);
        }
    }
    return tokens;
}

exports.SplitByRegex = SplitByRegex;


//safe splitting regexp to keep instances of python variables
var TokenExp = /(class .*?:)|(lambda .*:.*\n)|(def .*?\):)|(for .*? in .*?:)|(while .*?:)|(elif .*?:)|(if .*?:)|(#.*?\n)|(else:)|(\[.*?\])|(\{.*?\})|(\(.*?\))|(".*?")|(,)|(\.)|(:)|(\n)|(\t)|(#)| /;

exports.TokenExp = TokenExp;




