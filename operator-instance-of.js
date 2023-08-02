"use strict";

// init
class Employee {}

class Manager extends Employee {}

// membuat instance objek
const ali = new Employee();
const hani = new Manager();

// output
console.info(ali instanceof Employee); // true
console.info(hani instanceof Manager); // true

console.info(ali instanceof Manager); // false
console.info(hani instanceof Employee); // true, meskipun objek hani itu Manager tapi class Manager memiliki inheritance/turunan dari class Employee
