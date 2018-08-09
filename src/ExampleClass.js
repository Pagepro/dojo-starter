class Rectangle {
  constructor (width, height) {
    // if required this is the place to init the object
    this.width = width
    this.height = height
  }

  getPerimeter () {
    return this.width * 2 + this.height * 2
  }

  isSquare () {
    return this.width === this.height
  }

  static getSquarePerimeter (size) {
    return size * 4
  }
}

const rect = new Rectangle(2, 4)
rect.getPerimeter() // 12
rect.isSquare() // false
Rectangle.getSquarePerimeter(2) // 8
