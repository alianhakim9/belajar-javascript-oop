"use strict";

class Person {
  // constructor function
  constructor(name) {
    this.name = name;
    this.run();
  }

  // method di class
  run() {
    console.info(`${this.name} is running`);
  }
}

Person.prototype.sayHello = function () {
  console.info(`Hello, my name is ${this.name}`);
};

// instansiasi object
const hanifah = new Person("Hanifah");
const ali = new Person("Ali");
const ilyas = new Person("Ilyas");

// output
hanifah.sayHello();
ali.sayHello();
ilyas.sayHello();
