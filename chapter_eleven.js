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

function Promise_all(promises) {
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


// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
  console.log("We should not get here");
}).catch(error => {
  if (error != "X") {
    console.log("Unexpected failure:", error);
  }
});