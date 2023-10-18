import { SetupNetworkResult } from './setupNetwork'
import {
  Account,
  InvokeTransactionReceiptResponse,
  shortString,
} from 'starknet'
import { EntityIndex, getComponentValue, setComponent } from '@latticexyz/recs'
import { uuid } from '@latticexyz/utils'
import { ClientComponents } from './createClientComponents'
import { getEvents, setComponentsFromEvents } from '@dojoengine/utils'

export type SystemCalls = ReturnType<typeof createSystemCalls>

export function createSystemCalls(
  { execute, contractComponents }: SetupNetworkResult,
  { Attributes, Stats, Position, Counter, Quest }: ClientComponents
) {
  const spawn = async (signer: Account) => {
    // const entityId = parseInt(signer.address) as EntityIndex

    // const positionId = uuid()
    // Position.addOverride(positionId, {
    //   entity: entityId,
    //   value: { x: 1000, y: 1000 },
    // })

    // const movesId = uuid()
    // Moves.addOverride(movesId, {
    //   entity: entityId,
    //   value: { remaining: 100 },
    // })

    const str = 2
    const dex = 2
    const con = 2
    const int = 0
    const wis = 0
    const cha = 0

    try {
      const tx = await execute(signer, 'spawn_system', [
        str,
        dex,
        con,
        int,
        wis,
        cha,
      ])

      console.log(tx)
      const receipt = await signer.waitForTransaction(tx.transaction_hash, {
        retryInterval: 100,
      })

      setComponentsFromEvents(contractComponents, getEvents(receipt))
    } catch (e) {
      console.log(e)
      //   Position.removeOverride(positionId)
      //   Moves.removeOverride(movesId)
    } finally {
      //   Position.removeOverride(positionId)
      //   Moves.removeOverride(movesId)
    }
  }

  //   const move = async (signer: Account, direction: Direction) => {
  //     const entityId = parseInt(signer.address) as EntityIndex

  //     const positionId = uuid()
  //     Position.addOverride(positionId, {
  //       entity: entityId,
  //       value: updatePositionWithDirection(
  //         direction,
  //         getComponentValue(Position, entityId) as Position
  //       ),
  //     })

  //     const movesId = uuid()
  //     Moves.addOverride(movesId, {
  //       entity: entityId,
  //       value: {
  //         remaining: (getComponentValue(Moves, entityId)?.remaining || 0) - 1,
  //       },
  //     })

  //     try {
  //       const tx = await execute(signer, 'move', [direction])

  //       console.log(tx)
  //       const receipt = await signer.waitForTransaction(tx.transaction_hash, {
  //         retryInterval: 100,
  //       })

  //       console.log(receipt)

  //       const events = parseEvent(receipt)
  //       const entity = parseInt(events[0].entity.toString()) as EntityIndex

  //       const movesEvent = events[0] as Moves
  //       setComponent(contractComponents.Moves, entity, {
  //         remaining: movesEvent.remaining,
  //       })

  //       const positionEvent = events[1] as Position
  //       setComponent(contractComponents.Position, entity, {
  //         x: positionEvent.x,
  //         y: positionEvent.y,
  //       })
  //     } catch (e) {
  //       console.log(e)
  //       Position.removeOverride(positionId)
  //       Moves.removeOverride(movesId)
  //     } finally {
  //       Position.removeOverride(positionId)
  //       Moves.removeOverride(movesId)
  //     }
  //   }

  return {
    spawn,
    // move,
  }
}
