// Pop

let popping = [1, 2, 3, 4];

function pop(array) {
  let last = array[array.length - 1];
  --array.length;
  return last;
}

const popped = pop(popping);
console.log(popped);

// join
function join(array, joinner) {
  let result = "";
  for (let index = 0; index < array.length; index++) {
    result = result + array[index];
    if (index < array.length - 1) result = result + joinner;
  }
  return result;
}

const elements = ["Fire", "Air", "Water"];
result = join(elements, ",");
console.log(result); // "Fire,Air,Water"

// find
function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
}

numbers = [1, 2, 3];
result = find(numbers, number => number > 4);
console.log(result); // true

// every
function every(array, callback) {
  let result = true;
  for (let index = 0; index < array.length; index++) {
    result = result && callback(array[index], index, array);
  }
  return result;
}

numbers = [1, 2, 3];
result = every(numbers, number => number > 1);
console.log(result); // true

// some
function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

numbers = [1, 2, 3];
result = some(numbers, number => number > 1);
console.log(result); // true

// foreach
function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

numbers = [1, 2, 3];
forEach(numbers, number => console.log(number * 2)); //  2 4 6

// map
function map(array, callback) {
  result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(callback(array[index], index, array));
  }
  return result;
}

numbers = [1, 2, 3];
const doubles = map(numbers, number => number * 2);
console.log(doubles); // [2,4,6]
