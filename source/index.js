import mergeDeepRight from "@unction/mergedeepright"
import recordFrom from "@unction/recordfrom"

import toIntentTree from "./toIntentTree"

import type {ParametersType} from "types"
import type {TriggersType} from "types"
import type {VirtualDOMNodeType} from "types"

export default function intent (parameters: ParametersType): Function {
  return function intentOnActions (triggers: TriggersType): Function {
    return function intentOnActionsParameters (component: VirtualDOMNodeType): VirtualDOMNodeType {
      return mergeDeepRight(
        component
      )(
        recordFrom(
          ["data", "intents"]
        )(
          toIntentTree(
            parameters
          )(
            triggers
          )
        )
      )
    }
  }
}
