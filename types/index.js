export type PredicateFunctionType = mixed => boolean
export type UnaryFunctionType = mixed => mixed
export type RecordType = {[name: string]: mixed} | Map<mixed, mixed>
export type ParameterType = RecordType
export type IntentType = {trigger: string, name: Array<string>, parameters: ParameterType}
export type TriggersType = {[name: string]: Array<string>}
