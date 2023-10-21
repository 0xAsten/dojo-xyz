import './App.css'
import { useDojo } from './DojoContext'
import { useComponentValue } from '@latticexyz/react'
import { EntityIndex, setComponent } from '@latticexyz/recs'
import { Entity } from '@latticexyz/recs'
import { useEffect, useState } from 'react'
// import { Attributes, Position, Counter } from './generated/graphql'
import './xyz/PhaserGame'
import Phaser from 'phaser'
import config from './xyz/PhaserGame'
import { getEntityIdFromKeys } from '@dojoengine/utils'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, ProgressBar } from 'react-bootstrap'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('')
  const [questId, setQuestId] = useState(0)

  const {
    setup: {
      systemCalls: { spawn },
      components: { Attributes, Counter, Quest },
      network: { graphSdk, contractComponents },
    },
    account: { create, list, select, account, isDeploying },
  } = useDojo()

  // get current component values
  const counter = useComponentValue(
    Counter,
    account.address.toString() as Entity
  )
  console.log('counter', counter)

  const quest = useComponentValue(
    Quest,
    getEntityIdFromKeys([
      BigInt(account.address.toString()),
      BigInt(questId),
    ]) as EntityIndex
  )

  const handleGridClick = (x: number, y: number) => {
    // Do something when grid is clicked
    console.log('Player Move To:', x, y)
    spawn(account)
  }

  const handleStartGame = async () => {
    setShowModal(true)
    setMessage('Starting...')
    setProgress(30)
    await spawn(account)
    // Fake progress updates (replace this with real progress if possible)
    for (let i = 4; i <= 10; i++) {
      setProgress(i * 10)
      await new Promise((r) => setTimeout(r, 1)) // simulate delay
    }
    setShowModal(false)
    setProgress(0)
  }

  const { getCounterForPlayer, getQuestForPlayer } = graphSdk()
  async function fetchDataAndProgress() {
    const { data: counterData } = await getCounterForPlayer({
      player: account.address,
    })

    const count = counterData?.counterModels?.edges?.[0]?.node?.count
    console.log("The current player's quest id:", count)

    if (count) {
      setQuestId(count)

      setComponent(
        Counter,
        parseInt(account.address.toString()) as EntityIndex,
        {
          count: count,
        }
      )

      const { data: questdata } = await getQuestForPlayer({
        player: account.address,
        questId: count,
      })
      const questState = questdata?.questModels?.edges?.[0]?.node?.quest_state

      const questKeys = getEntityIdFromKeys([
        BigInt(account.address.toString()),
        count,
      ])
      setComponent(Quest, questKeys as EntityIndex, {
        quest_state: questState,
      })
    }
  }

  useEffect(() => {
    if (!account.address) return

    fetchDataAndProgress()
  }, [account.address])

  useEffect(() => {
    if (quest) {
      if (quest.quest_state === 2) {
        setMessage(
          'Quest is already completed. Do you want to restart a new game?'
        )
        setShowModal(true)
      } else {
        setShowModal(false)
      }
    } else {
      setMessage('No active quest found. Do you want to start the game?')
      setShowModal(true)
    }
  }, [quest])

  useEffect(() => {
    const game = new Phaser.Game(config)
    game.scene.start('bootstrap', { onGridClick: handleGridClick })

    return () => game.destroy(true)
  })

  return (
    <>
      <div>{counter?.count}</div>
      <div>{quest?.quest_state}</div>
      <div id='phaser-container' className='App'></div>

      <Modal show={showModal} backdrop='static' keyboard={false}>
        <Modal.Header>
          <Modal.Title>Game Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {progress > 0 ? (
            <ProgressBar now={progress} label={`${progress}%`} />
          ) : (
            message
          )}
        </Modal.Body>
        <Modal.Footer>
          {progress === 0 && (
            <>
              <Button
                variant='primary'
                onClick={() => {
                  handleStartGame()
                }}
              >
                Confirm
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
