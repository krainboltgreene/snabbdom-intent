export type PredicateFunctionType = mixed => boolean
export type RecordType = {[name: string]: mixed} | Map<mixed, mixed>
export type ParametersType = RecordType
export type IntentType = {trigger: string, name: Array<string>, parameters: ParametersType}
export type TriggersType = {[name: string]: Array<string>}
export type VirtualDOMNodeType = {}
