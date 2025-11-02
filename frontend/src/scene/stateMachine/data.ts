export interface StateData {
  id: string
  posX: number
  posY: number
  connectedTo: string[],
  details: StateInfoDetails
}

export interface StateInfoDetails {
  initial: string | undefined,
  onEntry: boolean,
  onExit: boolean,
  transitions: StateTransitionsDetails[]
}

export interface StateTransitionsDetails {
  toState: string | undefined,
  event: string | undefined,
  condition: string | undefined
}