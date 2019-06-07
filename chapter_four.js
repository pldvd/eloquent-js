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

