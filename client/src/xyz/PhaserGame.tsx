import Phaser from 'phaser'

import { Bootstrap } from './scenes/Bootstrap'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-container',
  scene: [Bootstrap],
}

export default config
