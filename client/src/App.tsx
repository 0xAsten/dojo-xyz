import './App.css'
import { useDojo } from './DojoContext'
// import { useComponentValue } from '@latticexyz/react'
import { useComponentValue } from '@latticexyz/react'
import { EntityIndex, setComponent } from '@latticexyz/recs'
import { useEffect } from 'react'
import { Attributes, Position, Counter } from './generated/graphql'
import './xyz/PhaserGame'
import Phaser from 'phaser'
import config from './xyz/PhaserGame'
import { getEntityIdFromKeys } from '@dojoengine/utils'

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
  const player = account.address

  // get current component values
  const counter = useComponentValue(
    Counter,
    parseInt(player.toString()) as EntityIndex
  )

  console.log('Use Counter value:', counter)

  const handleGridClick = (x: number, y: number) => {
    // Do something when grid is clicked
    console.log('Player Move To:', x, y)
    spawn(account)
  }

  useEffect(() => {
    if (!player) return

    const fetchData = async () => {
      const { data } = await graphSdk.getCounterForPlayer({ player: player })
      const questId = data?.counterComponents?.edges?.[0]?.node?.count

      console.log("The current player's quest id:", questId)

      if (questId) {
        const { data } = await graphSdk.getAttributesForPlayer({
          player: player,
          questId: questId,
          entityId: 0,
        })

        console.log(data?.attributesComponents?.edges?.[0]?.node)

        const keys = [parseInt(player.toString()), questId, 0]
        setComponent(Attributes, getEntityIdFromKeys(keys) as EntityIndex, {
          player: 1,
          quest_id: 1,
          entity_id: 1,
          points: 100,
          str: 10,
          dex: 10,
          int: 10,
          wis: 10,
          con: 10,
          cha: 10,
          str_modifier: 0,
          dex_modifier: 0,
          int_modifier: 0,
          wis_modifier: 0,
          con_modifier: 0,
          cha_modifier: 0,
        })

        setComponent(Moves, parseInt(entityId.toString()) as EntityIndex, {
          remaining: remaining.remaining,
        })
        setComponent(Position, parseInt(entityId.toString()) as EntityIndex, {
          x: position.x,
        })
      } else {
        // TODO: create a new quest
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
