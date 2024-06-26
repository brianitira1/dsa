//merge sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test cases
let array1 = [64, 34, 25, 12, 22, 11, 90];
let array2 = [5, 1, 4, 2, 8];
let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];

console.log("Original array:", array1);
console.log("Sorted array:", mergeSort(array1)); // [11, 12, 22, 25, 34, 64, 90]

console.log("Original array:", array2);
console.log("Sorted array:", mergeSort(array2)); // [1, 2, 4, 5, 8]

console.log("Original array:", array3);
console.log("Sorted array:", mergeSort(array3)); // [1, 2, 3, 4, 5]

console.log("Original array:", array4);
console.log("Sorted array:", mergeSort(array4)); // [1, 2, 3, 4, 5]
