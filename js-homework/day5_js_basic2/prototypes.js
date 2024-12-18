// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }
  return arr.map(cb);
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }
  return arr.filter(cb);
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Please enter two arrays as your arguments");
  }
  
  return arr1.concat(arr2);
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }

  return arr.find(cb);
}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }
  return arr.every(cb);
}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }
  return arr.some(cb);
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof val !== "number") {
    throw new Error("Please enter a number as the second argument!");
  }
  return arr.includes(val);
}

export function myJoin(arr, separator="-") {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if(typeof separator!=="string"){
    throw new Error("Separator must be a string");
  }
  return arr.join(separator);
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof val !== "number") {
    throw new Error("Please enter a number as the second argument!");
  }

  return arr.push(val);

}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  return [...arr].reverse();
  // did not modify the original arr

}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  return arr.reverse();
}

// Challenges
export function myReduce(arr, cb, initial) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the first argument!");
  }
  if (typeof cb !== "function") {
    throw new Error("Please enter a function as the second argument!");
  }
  if(typeof initial !=="number"){
    throw new Error("Please enter a number as the third argument!");
  }
  return arr.reduce(cb, initial);
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  const sortedArray = [...arr];

  // Sort the array using the callback
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (cb(sortedArray[j], sortedArray[j + 1]) > 0) {
        // Swap if callback comparison indicates the order is incorrect
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }

  return sortedArray;
 

}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  start = start !== undefined ? start : 0;
  end = end !== undefined ? end : arr.length;
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;

  // Ensure indices are within bounds
  start = Math.max(0, Math.min(start, arr.length));
  end = Math.max(0, Math.min(end, arr.length));

  // Create the sliced array
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;

}
