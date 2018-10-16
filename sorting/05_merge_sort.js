/*
 * Merge Sort
 * 1，可以先想下怎么合并两个有序数组为一个有序数组（关键点）
 * 2，二路归并，将一个待排序数组折半为两个待排序数组，直到拆成可视为已排序的数组，也就是只有一个元素的数组；（递归）
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

function merge(left, right) { // 合并两个有序数组；
  const result = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length > 0) {
    result.push(left.shift()); // 用push和shift就可以实现concat方法
  }
  while(right.length > 0) {
    result.push(right.shift());
  }
  return result;
}

function merge_sort(array) { // 需要返回一个已经排序的数组
  if (array.length < 2) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);
  return merge(merge_sort(left), merge_sort(right));
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = merge_sort(array)

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
