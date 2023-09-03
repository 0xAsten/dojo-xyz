import './App.css'
import { useDojo } from './DojoContext'
import { useComponentValue } from '@dojoengine/react'
import { Direction } from './dojo/createSystemCalls'
import { EntityIndex, setComponent } from '@latticexyz/recs'
import { useEffect } from 'react'
import { getFirstComponentByType } from './utils'
import { Moves, Position } from './generated/graphql'
import './xyz/PhaserGame'
import Phaser from 'phaser'
import config from './xyz/PhaserGame'

function App() {
  const {
    setup: {
      systemCalls: { spawn, move },
      components: { Moves, Position },
      network: { graphSdk, call },
    },
    account: { create, list, select, account, isDeploying },
  } = useDojo()

  // entity id - this example uses the account address as the entity id
  const entityId = account.address

  // get current component values
  const position = useComponentValue(
    Position,
    parseInt(entityId.toString()) as EntityIndex
  )
  const moves = useComponentValue(
    Moves,
    parseInt(entityId.toString()) as EntityIndex
  )

  const handleGridClick = (x: number, y: number) => {
    // Do something when grid is clicked
    console.log('Player Move')
    move(account, Direction.Up)
  }

  useEffect(() => {
    if (!entityId) return

    const fetchData = async () => {
      const { data } = await graphSdk.getEntities()

      if (data) {
        let remaining = getFirstComponentByType(
          data.entities?.edges,
          'Moves'
        ) as Moves
        let position = getFirstComponentByType(
          data.entities?.edges,
          'Position'
        ) as Position

        setComponent(Moves, parseInt(entityId.toString()) as EntityIndex, {
          remaining: remaining.remaining,
        })
        setComponent(Position, parseInt(entityId.toString()) as EntityIndex, {
          x: position.x,
          y: position.y,
        })
      }
    }
    fetchData()

    const game = new Phaser.Game(config)
    game.scene.start('bootstrap', { onGridClick: handleGridClick })
    return () => game.destroy(true)
  }, [account.address])

  return (
    <>
      <div id='phaser-container' className='App'></div>
    </>
  )

  return (
    <>
      <div id='phaser-container' className='App'></div>

      <button onClick={create}>
        {isDeploying ? 'deploying burner' : 'create burner'}
      </button>
      <div className='card'>
        select signer:{' '}
        <select onChange={(e) => select(e.target.value)}>
          {list().map((account, index) => {
            return (
              <option value={account.address} key={index}>
                {account.address}
              </option>
            )
          })}
        </select>
      </div>
      <div className='card'>
        <button onClick={() => spawn(account)}>Spawn</button>
        <div>
          Moves Left: {moves ? `${moves['remaining']}` : 'Need to Spawn'}
        </div>
        <div>
          Position:{' '}
          {position ? `${position['x']}, ${position['y']}` : 'Need to Spawn'}
        </div>
      </div>
      <div className='card'>
        <button onClick={() => move(account, Direction.Up)}>Move Up</button>{' '}
        <br />
        <button onClick={() => move(account, Direction.Left)}>Move Left</button>
        <button onClick={() => move(account, Direction.Right)}>
          Move Right
        </button>{' '}
        <br />
        <button onClick={() => move(account, Direction.Down)}>Move Down</button>
      </div>
    </>
  )
}

export default App
