// quick sort

/**
 * This function implements the quick sort algorithm to sort an array.
 * The algorithm divides the array into two parts: one with elements smaller than the pivot
 * and one with elements greater than the pivot. It then recursively sorts the two parts.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {Array} The sorted array.
 */
function quickSort(arr) {
    // If the array has 1 or fewer elements, it is already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // The pivot is defined as the middle element of the array.
    const pivot = arr[Math.floor(arr.length / 2)];

    // Initialize arrays to store elements smaller than, equal to, and greater than the pivot.
    const left = [];
    const right = [];
    const equal = [];

    // Loop through each element of the array.
    for (let i = 0; i < arr.length; i++) {
        // If the element is smaller than the pivot, add it to the left array.
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        // If the element is greater than the pivot, add it to the right array.
        else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
        // If the element is equal to the pivot, add it to the equal array.
        else {
            equal.push(arr[i]);
        }
    }

    // Recursively sort the left and right arrays.
    return quickSort(left).concat(equal, quickSort(right));
}

// Test cases
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [5, 1, 4, 2, 8];
let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];

console.log("Original array:", array1);
console.log("Sorted array:", quickSort(array1)); // [11, 12, 22, 25, 34, 64, 90]

console.log("Original array:", array2);
console.log("Sorted array:", quickSort(array2)); // [1, 2, 4, 5, 8]

console.log("Original array:", array3);
console.log("Sorted array:", quickSort(array3)); // [1, 2, 3, 4, 5]

console.log("Original array:", array4);
console.log("Sorted array:", quickSort(array4)); // [1, 2, 3, 4, 5]
