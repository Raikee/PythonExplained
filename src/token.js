/**
 * Created by Josh on 1/30/16.
 */
//class to identify python tokens
var token = (function () {
    function token(string, label) {
        this.string = string;
        this.label = label;
    }
    token.prototype.setlabel = function (label) {
        this.label = label;
    };
    return token;
})();

exports.token = token;