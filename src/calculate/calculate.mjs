class Calculate {
  constructor() {
    this.a = null;
    this.b = null;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("An illegal divisor");
    return a / b;
  }

  mod(a, b) {
    if (b === 0) throw new Error("An illegal divisor");
    return a % b;
  }
}

export { Calculate };
