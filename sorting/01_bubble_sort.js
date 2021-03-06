/*
 * Bubble Sort
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

// 为什么i是小于length - 1;因为length -1个数已经排好序的时候，剩下的一个数字的顺序必定是对的，不需要再对该数字排序；
const bubble_sort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = bubble_sort(array)

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
