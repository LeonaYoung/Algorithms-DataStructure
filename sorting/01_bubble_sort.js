/*
 * Bubble Sort
 */

const generate_array = (min, max, size) => {
    return [3, 2, 1]
}

const validate_order = array => {
    return false
}

const bubble_sort = array => {
    return array
}

array = generate_array(-100, 100, 3)
console.log('array: ', array)

array = bubble_sort(array)

console.log(validate_order(array) === true ?
            'It is sorted.' : 'Not sorted')
