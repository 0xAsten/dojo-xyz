import Phaser from 'phaser'

const gridSize = 40
const gridWidth = 20
const gridHeight = 15
let player: Phaser.GameObjects.Sprite

function movePlayerTo(x: number, y: number) {
  player.x = x * gridSize + gridSize / 2
  player.y = y * gridSize + gridSize / 2
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

        this.onGridClick(x, y)

        movePlayerTo(x, y)
      },
      this
    )
  }
}
