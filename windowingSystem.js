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
    const newWidth = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x))
    const newHeight = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y))
    this.size.resize(newWidth, newHeight)
  }

  move (newPosition) {
    const newX = Math.max(0, Math.min(newPosition.x, this.screenSize.width - this.size.width))
    const newY = Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height))
    this.position.move(newX, newY)
  }
}
export const changeWindow = programWindow => (
  // eslint-disable-next-line no-sequences
  programWindow.move(new Position()),
  programWindow.resize(new Size(400, 300)),
  programWindow.move(new Position(100, 150)),
  programWindow
)
