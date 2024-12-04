export function destructurePerson1() {
  // log the name, age, and job of person1, using string literal
  // hint: `${}`
  // expected output: "Alice is 25 years old and is a teacher"
  const person = {
    name: "Alice",
    age: 25,
    job: "teacher",
  };
  const{name, age, job} = person;
  console.log(
    `${name} is ${age} years old and is a ${job}`
  );
  // Write your code here
}

export function destructurePerson2() {
  // log the name, age, and city of person2, using string literal
  // expected output: "John is 21 years old and lives in New York"
  const person = {
    name: "John",
    age: 21,
    job: "developer",
    address: {
      city: "New York",
      country: "USA",
    },
  };
  console.log(
    `${person.name} is ${person.age} years old and lives in ${person.address.city}`
  );
  // Write your code here
}

export function destructurePerson3() {
  // descture but change the variable names

  const name = "NAME ALREADY EXIST";
  // if you do const {name} = person,
  // there'd be an error because name already exists

  const person = {
    name: "Alice",
    age: 25,
    job: "teacher",
  };
  const { name: fisrtName, age: personAge, job: work } = person;
  console.log(`${fisrtName} is ${personAge} years old and is a ${work}`);
  // Write your code here
}

export function destructurePerson4() {
  const person = {
    name: "Alice",
    age: 25,
    job: "teacher",
    gender: "female",
    salary: 50000,
    hobby: "reading",
    favFood: "pizza",
  };
  const { name, age, ...rest } = person;
  // destructure the name and age of person4, and use rest operator to get the rest of the properties
  // write your code here
}

export function destructureArray1() {
  // destructure and get the first and last elements of the array
  // expected output: "1 5"
  const arr = [1, 2, 3, 4, 5];
  // Write your code here
  const [first, , , , last] = arr;
  console.log(first, last);
}

export function destructureArray2() {
  const methods = [
    function () {
      return "GET";
    },
    function () {
      return "POST";
    },
    function () {
      return "PUT";
    },
    function () {
      return "DELETE";
    },
  ];
  const [get, post, put, del] = methods;
  console.log(get(), post(), put(), del());
  // destructure the methods from the array, and call them
  // Write your code here
}

export function destructureArray3() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [first, second, third, ...rest] = arr;
  console.log(first, second, third, rest);
  // destructure the first 3 elements, and use rest operator to get the rest of the elements
  // Write your code here
}

export function spreadObj() {
  const person = {
    name: "Alice",
    age: 25,
    job: "teacher",
  };

  // 1. use spread operator to create a new object with the same properties as person
  // const person1 =
  const person1 = { ...person };
  console.log(person1);
  // 2. step 1, but change the name to "Bob"
  // const person2 =
  const person2 = { ...person, name: "Bob" };
  console.log(person2);

  // 3. step 1, but add a new property, hobby: "reading"
  // const person3 =
  const person3 = { ...person, hobby: "reading" };
  console.log(person3);

  const additionalInfo = {
    salary: 50000,
    hobby: "reading",
    favFood: "pizza",
  };
  // 4. use spread operator to merge the additionalInfo object with the person object
  // const person4 =
  const person4 = { ...person, ...additionalInfo };
  console.log(person4);
}

export function spreadArr() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  // 1. use spread operator to create a new array that combines arr1 and arr2
  // const arr3 =
  const arr3 = [...arr1, ...arr3];
  console.log(arr3)

  // 2. use spread operator to create a new array that combines arr1 and arr2, but add a new element, 7
  // expected arr4: [1, 2, 3, 4, 5, 6, 7]
  // const arr4 =
  const arr4 =[...arr1, arr2, 7];
  console.log(arr4);

  // 3. combine arr1 and arr2, but add a new element, 0, at the beginning
  // expected arr5: [0, 1, 2, 3, 4, 5, 6]
  const arr5 = [0, ...arr1, ...arr2];
  console.log(arr5);
}
