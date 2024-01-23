const example1 = [3, 2, 1, 13, 8, 5, 0, 1];
const example2 = [105, 79, 100, 110];
const example3 = [2, 1, 3];
const example4 = [1, 2, 3];

function mergeSort(arr) {
  const midpoint = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, midpoint);

  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

console.log('example 1: \n', mergeSort(example1));
console.log('example 2: \n', mergeSort(example2));
console.log('example 3: \n', mergeSort(example3));
console.log('example 4: \n', mergeSort(example4));
