import service from "@/service/service.ts";
import type { AxiosResponse } from "axios";

export interface StateData {
  id: string
  posX: number
  poxY: number
  connectedTo: string[]
}

export function getStateMachineForDT(dtId: string, participantId: string): Promise<AxiosResponse<StateData[]>> {
  return service.get<StateData[]>(`/api/dt/${dtId}/statemachine/${participantId}`);
}