// selection sort


/**
 * Sorts an array using the selection sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(arr) {
    // Get the length of the array
    let n = arr.length;
    
    // Loop through each element in the array (except the last one)
    for (let i = 0; i < n - 1; i++) {
        // Initialize the index of the minimum element to the current index
        let minIndex = i;

        // Loop through the unsorted part of the array starting from the current index
        for (let j = i + 1; j < n; j++) {
            // If the current element is less than the minimum element so far
            if (arr[j] < arr[minIndex]) {
                // Update the minimum element index to the current index
                minIndex = j;
            }
        }

        // If the minimum element index is not the same as the current index
        // (i.e., there is a smaller element to the right of the current element)
        if (minIndex !== i) {
            // Swap the current element with the minimum element
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    // Return the sorted array
    return arr;
}

// Test cases
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [5, 1, 4, 2, 8];
let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];

console.log("Original array:", array1);
console.log("Sorted array:", selectionSort(array1)); // [11, 12, 22, 25, 34, 64, 90]

console.log("Original array:", array2);
console.log("Sorted array:", selectionSort(array2)); // [1, 2, 4, 5, 8]

console.log("Original array:", array3);
console.log("Sorted array:", selectionSort(array3)); // [1, 2, 3, 4, 5]

console.log("Original array:", array4);
console.log("Sorted array:", selectionSort(array4)); // [1, 2, 3, 4, 5]
