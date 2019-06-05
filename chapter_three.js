//minimum - write a function which returns its smallest integer argument

function min(a, b) {
  return (a > b) ? a : b;
}

console.log(min(3, 3));

//recursion - write a recursive function which returns a boolean to indicate if its argument is an even number

function isEven(n) {
  if (n > 0) {
    if (n === 1) return false;
    else return isEven(n - 2);
  }
  if (n < 0) {
    if (n === -1) return false;
    else return isEven(n + 2);
  }
  if (n === 0) {
    return true;
  }
}

console.log(isEven(-50));

//count beans - write a function that takes a string argument and returns the number of uppercase Bs in it

function countBs(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'B') count++;
  }
  return count;
}

console.log(countBs('BBC'));

function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) count++;
  }
  return count;
}

console.log(countChar('kakkerlak', 'k'));

