/**
 * Created by Josh on 1/30/16.
 */

//file for randomly selecting explanations and statements.

//gets a random number between 1 and n
var randnum = function(n) {
    return Math.floor((Math.random() * n) + 1);
};
//randomly selects an array element
var randselect = function(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
};
//randomly picks value from object
var randkeyval = function(obj) {
    var select = Object.keys(obj);
    return obj[randselect(select)];
};

exports.randnum = randnum;
exports.randselect = randselect;
exports.randkeyval = randkeyval;


