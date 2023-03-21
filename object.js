let students = [
  { name: "A", age: "12", marks: ["10", "11", "10"] },
  { name: "M", age: "15", marks: ["9", "11", "10"] },
  { name: "K", age: "13", marks: ["8", "11", "10"] },
  { name: "S", age: "17", marks: ["11", "11", "10"] },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
for (var i = 0; i < students.length; i++) {
  students[i].test = "True";
}
var newPerson = { name: "Alice", age: 20 };
students.push(newPerson);
console.log(students);

let information = { name: "Sofiia ", age: "11" };
information.address = {
  country: "Ukraine",
  city: "Kyiv",
};
//homework
const numbers = [12, 18, 6, 20, 30, 15, 21];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 17) {
    console.log(numbers[i]);
  }
}
const person = {
  name: "John",
  age: 25,
  grades: [80, 90, 75, 85, 95],
};

let sum = 0;
for (let i = 0; i < person.grades.length; i++) {
  sum += person.grades[i];
}

console.log("Sum of grades:", sum);
console.log("First grade:", person.grades[0]);
console.log("Last grade:", person.grades[person.grades.length - 1]);
