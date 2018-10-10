/*
 * Shell Sort
 *根据待排序数组的长度，算出间隔（增量）；
 *在数组长度特别大的时候，并且排序特别不理想的情况下有优势
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
  // for (let i = gap; i > 0; gap = ((gap - 1) / 3)) {
  //   // 死循环了！！！！
  //   // i的值一直等于gap（等于4），条件永远为真，永远执行；
  //   // console.log('gap: ', gap)
  // }
  while(gap > 0) {
    for (let j = 0; j < gap; j++) { // for循环中的第一个条件只执行一次啊啊，要不还要j++ 干嘛，那不每次j都等于0了嘛。。
      for (let k = j + gap; k < array.length; k = k + gap) {
        const current = array[k];
        let l = k;
        while(l > j && current < array[l - gap]) { // 是用当前待插入的项的值和他前面的项去比大小，找到他要插入的位置
          array[l] = array[l - gap];
          l = l - gap;
        }
        array[l] = current;
      }
    }
    gap = (gap - 1) / 3;
  }
  return array;
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = shell_sort(array)

console.log(validate_order(array) === true ?
  'It is sorted.' : 'Not sorted')
