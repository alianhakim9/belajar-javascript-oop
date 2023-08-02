"use strict";

// init
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw Error("Total parameter harus lebih dari 0");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// output
console.info(MathUtil.sum()); // error
console.info(MathUtil.sum(10, 10, 10)); // 30
