import Phaser from 'phaser'
import EasyStar from 'easystarjs'

const gridSize = 40
const gridWidth = 20
const gridHeight = 15
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

function animateMovement(scene: Phaser.Scene, path) {
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
          .setStrokeStyle(1, 0x000000)
          .setOrigin(0)
      }
    }
    player = this.add.sprite(gridSize / 2, gridSize / 2, 'player')
    player.setDisplaySize(32, 32)

    this.input.on(
      'pointerdown',
      function (pointer: { x: number; y: number }) {
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
