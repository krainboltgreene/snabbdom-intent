import mergeRight from "@unction/mergeright"
import reduceWithValueKey from "@unction/reducewithvaluekey"

import toIntentSubtree from "./toIntentSubtree"

export default function toIntentTree (parameters: ParametersType): UnaryFunctionType {
  return function toIntentTreeTriggers (triggers: TriggersType): RecordType<RecordType<IntentType>> {
    return reduceWithValueKey(
      (tree: RecordType<RecordType<IntentType>>): UnaryFunctionType =>
        (names: Array<string>): UnaryFunctionType =>
          (trigger: string): RecordType<RecordType<IntentType>> =>
            mergeRight(
              tree
            )(
              {[trigger]: toIntentSubtree(trigger)(parameters)(names)}
            )
    )(
      {}
    )(
      triggers
    )
  }
}
