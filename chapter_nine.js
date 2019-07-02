//regular expressions

//regexp golf 

// car and cat
const carThing = /ca[rt]/;

// pop and prop
const propThing = /pr?op/;

// ferret, ferry, ferrari
const ferrThing = /ferr(et|y|ari)/;

// any word ending to -ious
const ious = /ious\b/;

// a whitespace character followed by . OR , OR - OR ;
const escapeChars = /\s[.,-;]/;

// a word longer than six characters
const longWord = /\w{7,}\b/;

// no word with e
const noE = /\b[^\We]+\b/ig;

// quoting style
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

//numbers again - write a regexp which matches all JS-style numbers

let number = /^[+-]?((\.\d+)$|(\d+\.?\d*)(([eE][+-]?)?\d+)?$)/;

// Tests - from the book:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
  "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
  ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}