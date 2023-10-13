import Phaser from 'phaser'
import EasyStar from 'easystarjs'

const gridSize = 40
const gridWidth = 25
const gridHeight = 20
let player: Phaser.GameObjects.Sprite

function movePlayerTo(x: number, y: number) {
  player.x = x * gridSize + gridSize / 2
  player.y = y * gridSize + gridSize / 2
}

const arr = new Array(40).fill(0)
const grid = arr.map(() => new Array(40).fill(0))
const easystar = new EasyStar.js()
easystar.setGrid(grid)
easystar.setAcceptableTiles([0])

let graphics: Phaser.GameObjects.Graphics

function animateMovement(
  scene: Phaser.Scene,
  path: { x: number; y: number }[]
) {
  const duration = 300
  for (let i = 0; i < path.length - 1; i++) {
    const ex = path[i + 1].x
    const ey = path[i + 1].y

    scene.time.delayedCall(i * duration, () => {
      scene.tweens.add({
        targets: player,
        x: ex * gridSize + gridSize / 2,
        y: ey * gridSize + gridSize / 2,
        duration: duration,
      })
    })
  }
}

function drawDottedLine(
  scene: Phaser.Scene,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
) {
  const distance = Phaser.Math.Distance.Between(fromX, fromY, toX, toY)
  const dashSize = 10 // or whatever size for your dash
  const gapSize = 5 // or whatever size for the gap between dashes
  const numOfDashes = Math.floor(distance / (dashSize + gapSize))

  for (let i = 0; i < numOfDashes; i++) {
    const startX = Phaser.Math.Interpolation.Linear(
      [fromX, toX],
      i / numOfDashes
    )
    const startY = Phaser.Math.Interpolation.Linear(
      [fromY, toY],
      i / numOfDashes
    )
    const endX = Phaser.Math.Interpolation.Linear(
      [fromX, toX],
      (i + dashSize / (dashSize + gapSize)) / numOfDashes
    )
    const endY = Phaser.Math.Interpolation.Linear(
      [fromY, toY],
      (i + dashSize / (dashSize + gapSize)) / numOfDashes
    )

    graphics.lineStyle(1, 0xff00ff, 1.0)
    graphics.beginPath()
    graphics.moveTo(startX + gridSize / 2, startY + gridSize / 2)
    graphics.lineTo(endX + gridSize / 2, endY + gridSize / 2)
    graphics.closePath()
    graphics.strokePath()
  }
}

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super('bootstrap')
  }

  private onGridClick!: (x: number, y: number) => void

  init(data: { onGridClick: (x: number, y: number) => void }) {
    this.onGridClick = data.onGridClick
  }

  preload() {
    this.load.image('player', '/src/assets/player.png')
  }

  create() {
    for (let x = 0; x < gridWidth; x++) {
      for (let y = 0; y < gridHeight; y++) {
        this.add
          .rectangle(x * gridSize, y * gridSize, gridSize, gridSize, 0xaaaaaa)
          .setStrokeStyle(1, 0x12345)
          .setOrigin(0)
      }
    }
    player = this.add.sprite(gridSize / 2, gridSize / 2, 'player')
    player.setDisplaySize(32, 32)

    graphics = this.add.graphics()

    this.input.on(
      'pointerdown',
      (pointer: { x: number; y: number }) => {
        const x = Math.floor(pointer.x / gridSize)
        const y = Math.floor(pointer.y / gridSize)

        // Call Contract
        this.onGridClick(x, y)

        // movePlayerTo(x, y)

        console.log(
          'Calling easystar.findPath, player.x: ' +
            player.x +
            ', player.y: ' +
            player.y +
            ', x: ' +
            x +
            ', y: ' +
            y +
            ', path:'
        )
        easystar.findPath(
          Math.floor(player.x / gridSize),
          Math.floor(player.y / gridSize),
          x,
          y,
          (path) => {
            if (path) {
              graphics.clear() // clear previous paths
              for (let i = 0; i < path.length - 1; i++) {
                const startX = path[i].x * gridSize
                const startY = path[i].y * gridSize
                const endX = path[i + 1].x * gridSize
                const endY = path[i + 1].y * gridSize
                drawDottedLine(this, startX, startY, endX, endY)
              }

              animateMovement(this, path)
            }
          }
        )

        easystar.calculate()
      },
      this
    )
  }
}
