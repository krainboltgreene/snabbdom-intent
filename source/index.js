import mergeDeepRight from "@unction/mergedeepright"
import recordFrom from "@unction/recordfrom"

import toIntentTree from "./toIntentTree"

export default function intent (triggers: TriggersType): UnaryFunctionType {
  return function intentOnActions (parameters: ParametersType): UnaryFunctionType {
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
