// asynchronous programming


// generator function
function* iterator(n) {
  for (let current = n; current < 50; current*=n) {
    yield current;
  }
}

for (let current of iterator(3)){
  console.log(current);
}

const it = iterator(3)[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());