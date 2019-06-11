//higher order functions

let SCRIPTS = require('./chapter_five_scripts')

//flattening - flatten the arrays within the array into one

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((a, b) => a.concat(b)));

//your own loop - without an actual for loop, using recursion

function loop(value, testFunc, updateFunc, bodyFunc) {
  if (testFunc(value)) {
    bodyFunc(value);
    return loop(updateFunc(value), testFunc, updateFunc, bodyFunc)
  } else {
    return;
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

//everything - write two functions which act like array.prototype.every(), one with a loop and one using array.prototype.some()

function every(array, test) {
  let count = 0;
  for (item of array) {
    if (test(item)) count++;
  }
  return count == array.length;
}

console.log(every([1, 3, 5], n => n < 10));

function everyWithSome(array, test) {
  return !array.some(item => !test(item));
}

console.log(everyWithSome([2, 4, 16], n => n < 10));

//dominant writing direction --- characterScript and countBy functions taken from the book

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {

  let grouping = countBy(text, character => {
    let script = characterScript(character.codePointAt(0));
    return script ? script.direction : 'none';
  })

  return grouping.reduce((a, b) => a.count > b.count ? a.name : b.name);
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));