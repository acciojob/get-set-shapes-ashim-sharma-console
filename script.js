// Rectangle Class
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  getArea() {
    return this.#width * this.#height;
  }
}

// Square Class
class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// DOM handling
document.getElementById("calc-rectangle").addEventListener("click", () => {
  const width = parseInt(document.getElementById("rect-width").value);
  const height = parseInt(document.getElementById("rect-height").value);
  const output = document.getElementById("rectangle-output");

  try {
    const rectangle = new Rectangle(width, height);
    output.innerHTML = `Width: ${rectangle.width}, Height: ${rectangle.height}, Area: ${rectangle.getArea()}`;
  } catch (err) {
    output.innerHTML = `<span style="color:red;">${err.message}</span>`;
  }
});

document.getElementById("calc-square").addEventListener("click", () => {
  const side = parseInt(document.getElementById("square-side").value);
  const output = document.getElementById("square-output");

  try {
    const square = new Square(side);
    output.innerHTML = `Side: ${square.width}, Area: ${square.getArea()}, Perimeter: ${square.getPerimeter()}`;
  } catch (err) {
    output.innerHTML = `<span style="color:red;">${err.message}</span>`;
  }
});

// Expose to Cypress or console if needed
window.Rectangle = Rectangle;
window.Square = Square;
