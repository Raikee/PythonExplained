/**
 * Created by Josh on 1/29/16.
 */
//class for manipulating lines of a python program
var line = (function () {
    function line(input) {
        this.statement = input;
    }
    line.prototype.settag = function (input) {
        this.tag = input;
    };
    line.prototype.setexplain = function (input) {
        this.explanation = input;
    };
    return line;
})();

exports.line = line;