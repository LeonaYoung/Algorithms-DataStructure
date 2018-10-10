/*
 * Shell Sort
 *根据待排序数组的长度，算出间隔（增量）；
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

const shell_sort = array => {
  let gap = 1;
  while((3 * gap + 1) < array.length) {
    gap = 3 * gap + 1;
  }
  console.log('gap', gap);
  for (let i = gap; i > 0; gap = ((gap - 1) / 3)) {
    console.log('for', i, gap);
    // for (let j = 0; j < gap; j++) {
    //   for (let k = j + gap; k < array.length; k = k + gap) {
    //     const current = array[k];
    //     let l = k;
    //     while(l > 0 && array[l] < array[l - gap]) {
    //       array[l] = array[l - gap];
    //       l = l - gap;
    //     }
    //     array[l] = current;
    //   }
    // }
  }
  return array;
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = shell_sort(array)
console.log('hh', array);

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
