//higher order functions

//flattening

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((a, b) => a.concat(b)));

//your own loop

function loop(value, testFunc, updateFunc, bodyFunc) {
  if (testFunc(value)) {
    bodyFunc(value);
    return loop(updateFunc(value), testFunc, updateFunc, bodyFunc)
  } else {
    return;
  }
}

loop(3, n => n > 0, n => n - 1, console.log);