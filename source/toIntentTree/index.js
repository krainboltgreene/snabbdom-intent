import mergeRight from "@unction/mergeright"
import reduceWithValueKey from "@unction/reducewithvaluekey"

import toIntentSubtree from "./toIntentSubtree"

import type {ParametersType} from "types"
import type {TriggersType} from "types"
import type {RecordType} from "types"
import type {IntentType} from "types"

export default function toIntentTree (parameters: ParametersType): Function {
  return function toIntentTreeTriggers (triggers: TriggersType): RecordType<RecordType<IntentType>> {
    return reduceWithValueKey(
      (tree: RecordType<RecordType<IntentType>>): Function =>
        (names: Array<string>): Function =>
          (trigger: string): RecordType<RecordType<IntentType>> =>
            mergeRight(
              tree
            )(
              {[trigger]: toIntentSubtree(parameters)(trigger)(names)}
            )
    )(
      {}
    )(
      triggers
    )
  }
}
