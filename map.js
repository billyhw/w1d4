var map = function(array, func) {
  var result = [];
  for (i of array) {
    result.push(func(i));
  }
  return result;
}

var words = ["ground", "control", "to", "major", "tom"];

var wordCount = map(words, function(word) {
  return word.length;
});

console.log(wordCount);