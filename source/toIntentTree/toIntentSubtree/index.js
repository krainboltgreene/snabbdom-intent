import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"

export default function toIntentSubtree (trigger: string): UnaryFunctionType {
  return function toIntentSubtreeTrigger (parameters: ParametersType): UnaryFunctionType {
    return function toIntentSubtreeParameters (names: Array<string>): RecordTree<IntentType> {
      return reduceValues(
        (subtree: RecordType<IntentType>): UnaryFunctionType =>
          (name: string): IntentType =>
            mergeRight(subtree)({
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
