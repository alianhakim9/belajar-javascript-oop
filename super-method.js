"use strict";

class Shape {
  paint() {
    console.info("shape paint");
  }
}

class Circle extends Shape {
  paint() {
    super.paint(); // memanggil parent method
    console.info("circle paint");
  }
}

const circle = new Circle();
circle.paint();
