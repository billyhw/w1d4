// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

function findWaldo(arr, found) {
  arr.forEach(found);
}

function actionWhenFound(elements, index) {
  if (elements === "Waldo") {
    console.log("Found him at index " + index);
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo"], actionWhenFound);