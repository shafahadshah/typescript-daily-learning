// Advanced tuples

let data: [string, ...number[]];

data = ["scores", 10, 20, 30];

function displayTuple(tuple: [string, ...number[]]) {
  console.log("Label:", tuple[0]);
  console.log("Values:", tuple.slice(1));
}

displayTuple(data);