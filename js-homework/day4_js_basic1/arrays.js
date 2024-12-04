// Do not use prototype methods => map, filter, reduce, slice, concat, push, pop

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  if (typeof str !== "string") {
    throw new Error("Please enter a string.");
  }
  return !isNaN(str) && !isNaN(parseFloat(str));
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the argument!");
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      count++;
      sum += arr[i];
    } else if (typeof arr[i] === "string" && !isNaN(arr[i])) {
      sum += parseFloat(arr[i]);
      count++;
    }
  }
  if (count === 0) return 0;
  return sum / count;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
 if(people.length ===0) return 0;
  let count = 0;
  let ageSum = 0;

  for (const person of people) {
    if (typeof person.age === "number") {
      ageSum += person.age;
      count++;
    }
  }

  if (count === 0) return 0;
  return ageSum / count;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
 
  if (typeof job !== "string") {
    throw new Error("Please enter a string as the second argument.");
  }
  let count = 0;
  let ageSum = 0;
  for (const person of people) {
    if (person.job == job && typeof person.age === "number") {
      ageSum += person.age;
      count++;
    }
  }
  if (count === 0) return 0;
  return ageSum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the argument!");
  }

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  if (typeof str !== "string") {
    throw new Error("Input must be a string!");
  }
  const strArr = str.split(" ");
  let longestWord = "";
  for (const word of strArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  if (!Array.isArray(arr)) {
    throw new Error("Please enter an array as the argument!");
  }
  let res = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      res.push(num);
    }
  }
  return res;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  const sortedArray = [...num];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }
  return sortedArray;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  let n = num.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (num[i] > num[i + 1]) {
        // Swap if elements are in the wrong order
        [num[i], num[i + 1]] = [num[i + 1], num[i]];
        swapped = true; // Mark that a swap happened
      }
    }

    n--; // Reduce the range to optimize performance
  } while (swapped);

  return num; // Return the same array reference

}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let res = [];
  for (const val of arr) {
    if (typeof val !== typeToRemove) {
      res.push(val);
    }
  }
  return res;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let res = [];
  for (const num of nums) {
    let newNum;
    switch (operator) {
      case "+":
        newNum = num + amount;
        break;
      case "-":
        newNum = num - amount;
        break;
      case "*":
        newNum = num * amount;
        break;
      case "/":
        newNum = num / amount;
        break;
    }
    res.push(newNum);
  }
  return res;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  let res=[];
  for(const val of nums){
    if(val !== num){
      res.push(val);
    }
  }
  return res;
}
