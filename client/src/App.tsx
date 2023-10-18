import './App.css'
import { useDojo } from './DojoContext'
import { useComponentValue } from '@dojoengine/react'
import { EntityIndex, setComponent } from '@latticexyz/recs'
import { useEffect } from 'react'
import { getFirstComponentByType } from './utils'
import { Attributes, Position, Counter } from './generated/graphql'
import './xyz/PhaserGame'
import Phaser from 'phaser'
import config from './xyz/PhaserGame'

function App() {
  const {
    setup: {
      systemCalls: { spawn },
      components: { Attributes, Counter },
      network: { graphSdk, call },
    },
    account: { create, list, select, account, isDeploying },
  } = useDojo()

  // entity id - this example uses the account address as the entity id
  const entityId = account.address
  console.log(entityId)

  // get current component values
  const counter = useComponentValue(
    Counter,
    parseInt(entityId.toString()) as EntityIndex
  )

  // console.log('Counter', counter)

  const handleGridClick = (x: number, y: number) => {
    // Do something when grid is clicked
    console.log('Player Move To:', x, y)
    spawn(account)
  }

  useEffect(() => {
    if (!entityId) return

    const fetchData = async () => {
      const { data } = await graphSdk.getEntities()
      console.log('data', data)

      if (data) {
        let counter = getFirstComponentByType(
          data.entities?.edges,
          'Counter'
        ) as Counter

        console.log('Counter', counter.count)
        // setComponent(Moves, parseInt(entityId.toString()) as EntityIndex, {
        //   remaining: remaining.remaining,
        // })
        // setComponent(Position, parseInt(entityId.toString()) as EntityIndex, {
        //   x: position.x,
        //   y: position.y,
        // })
      }
    }
    fetchData()

    const game = new Phaser.Game(config)
    game.scene.start('bootstrap', { onGridClick: handleGridClick })

    return () => game.destroy(true)
  }, [account.address])

  return (
    <>
      <div>{counter?.count}</div>
      <div id='phaser-container' className='App'></div>
    </>
  )
}

export default App
