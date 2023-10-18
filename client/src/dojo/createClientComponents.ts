import { overridableComponent } from '@latticexyz/recs'
import { SetupNetworkResult } from './setupNetwork'

export type ClientComponents = ReturnType<typeof createClientComponents>

export function createClientComponents({
  contractComponents,
}: SetupNetworkResult) {
  return {
    ...contractComponents,
    Attributes: overridableComponent(contractComponents.Attributes),
    Stats: overridableComponent(contractComponents.Stats),
    Position: overridableComponent(contractComponents.Position),
    Counter: overridableComponent(contractComponents.Counter),
    Quest: overridableComponent(contractComponents.Quest),
  }
}
