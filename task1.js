//arrays

// Define a function called `reverseArray` that takes an array as input
function reverseArray(array) {
  // Create an empty array to store the reversed elements
  let newArray = [];

  // Traverse the input array from the last element to the first element
  for (let i = array.length - 1; i >= 0; i--) {
    // Push the current element into the new array
    // This effectively reverses the order of elements in the array
    newArray.push(array[i]);
  }

  // Return the reversed array
  return newArray;
}

const array = [1, 2, 3, 4, 5];

const result = reverseArray(array);
console.log(result);

/**
 * This function takes an array as input and returns a new array
 * that contains only the unique elements from the input array.
 *
 * @param {Array} arraytwo - The array to remove duplicates from.
 * @return {Array} - A new array that contains only the unique elements.
 */
function removeDuplicates(arraytwo) {
  // Create an empty array to store the unique elements
  const uniqueArray = [];

  // Loop through each element in the input array
  for (let i = 0; i < arraytwo.length; i++) {
    // Initialize a flag to keep track of whether the current element is a duplicate
    let isDuplicate = false;

    // Loop through the remaining elements in the input array, starting from the next element
    for (let j = i + 1; j < arraytwo.length; j++) {
      // If the current element is equal to the element at index j,
      // it means that it is a duplicate, so set the flag to true
      if (arraytwo[i] === arraytwo[j]) {
        isDuplicate = true;
      }
    }

    // If the current element is not a duplicate,
    // add it to the uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(arraytwo[i]);
    }
  }

  // Return the array containing the unique elements
  return uniqueArray;
}

const arraytwo = [1, 2, 5, 4, 5];

const resulttwo = removeDuplicates(arraytwo);
console.log(resulttwo);



