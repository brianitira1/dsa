// insertion sort

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Test cases
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [5, 1, 4, 2, 8];
let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];

console.log("Original array:", array1);
console.log("Sorted array:", insertionSort(array1)); // [11, 12, 22, 25, 34, 64, 90]

console.log("Original array:", array2);
console.log("Sorted array:", insertionSort(array2)); // [1, 2, 4, 5, 8]

console.log("Original array:", array3);
console.log("Sorted array:", insertionSort(array3)); // [1, 2, 3, 4, 5]

console.log("Original array:", array4);
console.log("Sorted array:", insertionSort(array4)); // [1, 2, 3, 4, 5]
