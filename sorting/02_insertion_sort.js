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

const insertion_sort = array => {
    // 
    return array
}

array = generate_array(-100, 100, 10)
console.log('array: ', array)

array = validate_order(array)

console.log(validate_order(array) === true ?
            'It is sorted.' : 'Not sorted')
