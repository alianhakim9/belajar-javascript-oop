"use strict";

// init
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "numbers"
      );
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// output
try {
  console.info(MathUtil.sum()); // error
  console.info("Alian");
} catch (error) {
  // hanya akan di eksekusi kalau terjadi error
  if (error instanceof ValidationError) {
    console.error(`terjadi error: ${error.message} di field : ${error.field}`);
  } else {
    console.error(`terjadi error : ${error.message}`);
  }
} finally {
  // finally, akan tetap dieksekusi maupun terdapat error ataupun tidak
  console.info("kode program selesai");
}

class Counter {
  #counter = 0;

  next() {
    // return this.#counter;
    // this.#counter++; // ga bisa, terburu return
    // solusi : menggunakan try finally
    try {
      return this.#counter++;
    } finally {
      this.#counter++;
    }
  }
}

console.info("Hakim"); // tetap di eksekusi
