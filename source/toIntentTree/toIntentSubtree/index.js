import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"

import type {ParametersType} from "types"
import type {RecordType} from "types"
import type {IntentType} from "types"

export default function toIntentSubtree (parameters: ParametersType): Function {
  return function toIntentSubtreeTrigger (trigger: string): Function {
    return function toIntentSubtreeParameters (names: Array<string>): RecordType<IntentType> {
      return reduceValues(
        (subtree: RecordType<IntentType>): Function =>
          (name: string): IntentType =>
            mergeRight(
              subtree
            )({
              [name]: {
                trigger,
                name,
                parameters,
              },
            })
      )(
        {}
      )(
        names
      )
    }
  }
}
