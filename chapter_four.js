//sum of a range

function range(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function rangeWithStep(start, end, step) {
  let range = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else if (start > end) {    
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(range) {
  return range.reduce((a, b) => a + b);
}

//reverse array

const testArray = [1, 2, 3, 4, 5, 6]

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
const arrayHalf = Math.floor(array.length/2);
for (let i = 0; i < arrayHalf; i++) {
  let old = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = old;
}
return array;
}
