const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};


// get the average age of the people
export const getAverageAge = (people) => {
  let ageSum = 0;
  let count = 0;
  for(const person of Object.values(people)){
    if(typeof person.age === "number"){
      ageSum+= person.age;
      count++;
    }
  }
  return count >0 ? ageSum / count: 0;
};



