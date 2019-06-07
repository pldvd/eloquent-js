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
  const arrayHalf = Math.floor(array.length / 2);
  for (let i = 0; i < arrayHalf; i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

//a list

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node != null; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

//Since the first solution's for loop comes from the clues section of the chapter, I was trying to come up with an other solution which I am more comfortable with personally...this is it with a while loop

function listToArrayWithWhile(list) {
  let node = list;
  let array = [];

  while (node) {
    array.push(node.value);
    node = node.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, number) {
  let array = [];
  for (let node = list; node != null; node = node.rest) {
    array.push(node.value);
  }
  return array[number];
}

function recursiveNth(list, number) {
  if (!list) return undefined;
  else if (number == 0) return list.value;
  else return recursiveNth(list.rest, number - 1)
}

function deepEqual(a, b) {
  if (a === b) return true;
  else if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
    if (Object.keys(a).length == Object.keys(b).length) {
      for (prop in a) {
        if (Object.keys(b).includes(prop)) {
          return deepEqual(b[prop], a[prop])
        };
      }
    }
    else return false;
  }
  else return false;
}
