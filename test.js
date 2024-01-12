export const colorCode = (color) =>
  COLORS.indexOf(color)

export const decodedValue = colors =>
  Number(colors.slice(0, 2).map(color => COLORS.indexOf(color)).join(''))

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

console.log(colorCode('black'))
console.log(decodedValue(['brown', 'green', 'red', 'blue']))

export const buildSign = (occasion, name) => `Happy ${occasion} ${name}!`

console.log(buildSign(''))

export const buildBirthdaySign = age =>
  `Happy Birthday! What a ${age < 50 ? 'young' : 'mature'} fellow you are.`

console.log(buildBirthdaySign(90))

export const costOf = (sign, currency) =>
  `Your sign costs ${(sign.length * 2 + 20).toFixed(2)} ${currency}`

console.log(costOf('Happy Birthday Rob!', 'dollars'))

export class Size {
  constructor (width = 80, height = 60) {
    this.width = width
    this.height = height
  }

  resize (newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
  }
}

export class Position {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  move (newX, newY) {
    this.x = newX
    this.y = newY
  }
}

export class ProgramWindow {
  constructor () {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize (newSize) {
    this.size.resize(
      newSize.width >= 1 ? newSize.width : 1,
      newSize.height >= 1 ? newSize.height : 1
    )
  }
}

const size = new Size(1080, 720)
const sizeTest = new Size()
console.log(size.width)
console.log(size.height)
size.resize(1920, 1080)
console.log(size.width)
console.log(size.height)
console.log(sizeTest.width)
console.log(sizeTest.height)
