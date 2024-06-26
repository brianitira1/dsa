//sorting algorithms

//buble sort

/**
 * Sorts an array using the bubble sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
    // Initialize the length of the array
    let n = arr.length;
    // Initialize a flag to keep track of whether any swaps were made
    let swapped;
    // Continue swapping elements until no more swaps are made
    do {
        // Initialize the flag to false
        swapped = false;
        // Loop through each element in the array
        for (let i = 1; i < n; i++) {
            // If the current element is greater than the next element
            if (arr[i - 1] > arr[i]) {
                // Swap the elements
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                // Set the flag to true as a swap was made
                swapped = true;
            }
        }
        // Decrease the range of comparison as the largest element is bubbled to the end
        n--;
    } while (swapped); // Continue swapping elements until no more swaps are made
    // Return the sorted array
    return arr;
}

// Test cases
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [5, 1, 4, 2, 8];
let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];

console.log("Original array:", array1);
console.log("Sorted array:", bubbleSort(array1)); // [11, 12, 22, 25, 34, 64, 90]

console.log("Original array:", array2);
console.log("Sorted array:", bubbleSort(array2)); // [1, 2, 4, 5, 8]

console.log("Original array:", array3);
console.log("Sorted array:", bubbleSort(array3)); // [1, 2, 3, 4, 5]

console.log("Original array:", array4);
console.log("Sorted array:", bubbleSort(array4)); // [1, 2, 3, 4, 5]
