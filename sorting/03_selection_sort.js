/*
 * selection Sort
 * 从未排序的序列中找到最小的，放到已排序的末尾
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

const selection_sort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[index]) {
        index = j;
      }
    }
    const temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  return array
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = selection_sort(array)
console.log('sort array: ', array)

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
