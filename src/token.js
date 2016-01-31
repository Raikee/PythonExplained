/**
 * Created by Josh on 1/30/16.
 */
//class to identify python tokens
var token = (function () {
    function token(symbol, label) {
        this.symbol = symbol;
        this.label = label;
    }
    token.prototype.setlabel = function (label) {
        this.label = label;
    };
    return token;
})();

exports.token = token;