// constructor function
function Person(firstName, middleName, lastName) {
  // property
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// menambahkan sesuatu ke prototype
Person.prototype.sayBye = function () {
  console.info("Adios!");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

// membuat/instance objek
const alian = new Person("Alian", "", "Hakim");
const hanifah = new Person("Hanifah", "Indah", "Rahmawati");

// mengakses properti objek
console.info(`${alian.firstName} ${alian.lastName}`);
console.info(`${hanifah.firstName} ${hanifah.middleName} ${hanifah.lastName}`);

// mengakses method
alian.sayHello("Ilyas");
alian.run();
alian.sayBye();

hanifah.sayHello("Ilyas");
hanifah.run();
hanifah.sayBye();
