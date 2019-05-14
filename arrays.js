// Pop

let popping = [1, 2, 3, 4];

function pop(array) {
  let last = array[array.length - 1];
  --array.length;
  return last;
}

const popped = pop(popping);
console.log(popped);
