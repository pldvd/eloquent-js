// asynchronous programming


// generator function
function* iterator(n) {
  for (let current = n; current < 50; current *= n) {
    yield current;
  }
}

for (let current of iterator(3)) {
  console.log(current);
}

const it = iterator(3)[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//tracking the scalpel

async function locateScalpel(nest) {
  let current = nest.name;
  while (nest) {
    let next = await anyStorage(nest, current, "scalpel");
    if (next == current) return current;
    current = next;
  }
}

//building promise.all

function promise_all(promises) {
  return new Promise((resolve, reject) => {
    let returnVal = [];
    let promiseCount = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        returnVal[i] = value;
        promiseCount -= 1;
        if (promiseCount == 0) resolve(returnVal);
      }).catch(e => reject(e));
    }
    if (promises.length == 0) resolve(returnVal);
  })
}
