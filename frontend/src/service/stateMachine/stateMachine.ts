import service from "@/service/service.ts";
import type { AxiosResponse } from "axios";
import type { StateData } from "@/scene/stateMachine/data.ts";

export function getStateMachineForDT(dtId: string, participantId: string): Promise<AxiosResponse<StateData[]>> {
  return service.get<StateData[]>(`/api/dt/${dtId}/statemachine/${participantId}`);
}