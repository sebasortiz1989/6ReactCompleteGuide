// import apiKey from "./util.js";
// import {apiKey1, apiKey2 as content} from "./util.js";
// import * as utils from "./util.js";

// console.log(utils.apiKey1);
// console.log(content);
// console.log(10 !== 5);

// function greet(condition) {
//     if (condition) {
//         console.log("Hello World!");
//     }
//    
//     return "Hello World! Man";
// }
//
// console.log(greet(true));

// function Combine(a, b, c) {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//         return a * b / c;
//     }
//    
//     return "Not a value"
// }
//
// console.log(Combine(1, 2, 3));
// console.log(Combine(1, "Hello", 3));

// export default function() {
//     console.log("Hello");
// }

// export default (userName, value)=> {
//     console.log(userName + value);
// }
//
// export default userName => console.log(userName);

// const userName = "Max";
// const age = 34;
//
// const user = {
//     name: "Max",
//     age: 9,
//     greet() {
//         return "Hello " + this.name;
//     }
// };
//
// console.log(user);
// console.log(user.name);
// console.log(user.greet());
//
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("Hi")
//     }
// }
//
// const user1 = new User("Manuel", 35);
// console.log(user1.name);

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);
//
// hobbies.push("Working")
// console.log(hobbies);
//
// const index = hobbies.findIndex((item) => {
//     return item === 'Sports';
// })
//
// const index1 = hobbies.findIndex((item) =>  item === 'Sports');
//
// console.log(index);
//
// const editedHobbies = hobbies.map((item) => item + "!")
// console.log(editedHobbies);
//
// const editedHobbies1 = hobbies.map((item, index) => ({text: item, index: index}))
// console.log(editedHobbies1);
//
// const numbers = transformToObjects([1, 2, 3]);
// console.log(numbers);
//
// function transformToObjects(numberArray) {
//     return numberArray.map((val) => ({val}));
// }

// const userNameData = ["Max", "Santacoloma"];
//
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Max", "Santacoloma"];
// console.log(firstName);
// console.log(lastName);
//
// const user = {
//     name: "John",
//     age: 35,
// }
//
// const name = user.name;
// const age = user.age;
//
// const {name1, age1: newAge} = {
//     name1: "John",
//     age1: 35,
// }
//
// console.log(name1);
// console.log(newAge);

const hobbies1 = ["Sports", "Cooking", "Reading"];
const hobbies2 = ["Running"];

const mergedHobbies = [...hobbies1, ...hobbies2];
console.log(mergedHobbies);

const user = {
    name: "John",
    age: 35,
}

const extendedUser = {
    isAdmin: true,
    ...user
};

console.log(extendedUser);