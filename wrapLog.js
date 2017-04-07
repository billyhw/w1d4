var wrapLog = function (callback, name) {

  return function() {
    var args = Array.prototype.slice.call(arguments);
    var result = callback.apply(null, arguments);
    console.log(name + "(" + args + ") => " + result);
  }

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5