function analyzeArry(array) {
  if (array.length === 0) throw new Error("Given array is empty");
  let node = new Node();
  array = mergeSort(array);
  node.average = average(array);
  node.min = min(array);
  node.max = max(array);
  node.length = length(array);
  return node;
}

class Node {
  constructor() {
    this.average = null;
    this.min = null;
    this.max = null;
    this.length = null;
  }
}

function average(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  let totalElement = length(array);
  return sum / totalElement;
}

const length = function (array) {
  let length = 0;
  array.forEach(() => {
    length += 1;
  });
  return length;
};

const min = function (array) {
  return array[0];
};

const max = function (array) {
  return array[array.length - 1];
};

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


export { analyzeArry };
