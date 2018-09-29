/*
 * insertion Sort
 */

const generate_array = (min, max, size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return arr;
}

const validate_order = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

const swap = (former, later) => {
  const temp = later
  later = former
  former = temp
  return former, later
}

// question: 直接交换不会改变array[i]的值吗？
const insertion_sort_0 = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[i] < array[j - 1]) {
      j--
      array[j + 1], array[j] = swap(array[j + 1], array[j])
    }
  }
  return array
}

// 不建议用splice()方法
const insertion_sort_1 = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[i] < array[j - 1]) {
      j--
    }
    const temp = array[i];
    array.splice(i, 1);
    array.splice(j, 0, temp);
  }
  return array
}

const insertion_sort = array => {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array;
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = insertion_sort(array)
console.log('sort array: ', array)

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
