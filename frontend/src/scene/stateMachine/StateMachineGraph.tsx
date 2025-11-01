import { useEffect, useState } from "react";
import type { StateData } from "./data";
import { Circle, Arrow } from "react-konva";
import Konva from "konva";
import { getStateMachineForDT } from "@/service/stateMachine/stateMachine.ts";

export function StateMachineGraph({ setLoading }: { setLoading: (value: boolean) => void }) {
  const [states, setStates] = useState<StateData[]>([]);

  useEffect(() => {
    fetchData().then();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getStateMachineForDT("1", "A");
      setStates(response.data);
      console.debug(`fetched data:`, response.data)
    } finally {
      setLoading(false);
    }
  };

  const getConnectorPoints = (from: StateData, to: StateData) => {
    const dx = to.posX - from.posX;
    const dy = to.poxY - from.poxY;
    const angle = Math.atan2(-dy, dx);

    const radius = 30;

    return [
      from.posX + -radius * Math.cos(angle + Math.PI),
      from.poxY + radius * Math.sin(angle + Math.PI),
      to.posX + -radius * Math.cos(angle),
      to.poxY + radius * Math.sin(angle),
    ];
  };

  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    e.target.x(Math.round(e.target.x() / 25) * 25);
    e.target.y(Math.round(e.target.y() / 25) * 25);

    setStates(
      states.map((state) =>
        "node" + state.id === e.target.id()
          ? { ...state, posX: e.target.x(), poxY: e.target.y() }
          : state,
      ),
    );
  };

  return (
    <>
      {
        states.map((state) => {
          return (
            <>
              <Circle
                key={"node" + state.id}
                id={"node" + state.id}
                x={state.posX}
                y={state.poxY}
                draggable
                stroke="#737373FF"
                fill="#171717FF"
                onDragMove={handleDragMove}
                radius={30}
              />
              {
                state.connectedTo.map(toStateId => {
                  const toState = states.find(it => it.id === toStateId);
                  if (toState === undefined) return null;
                  return (
                    <Arrow
                      key={`arrow${state.id}-${toStateId}`}
                      id={`arrow${state.id}-${toStateId}`}
                      points={getConnectorPoints(state, toState)}
                      fill="white"
                      stroke="white"
                    />
                  );
                })
              }
            </>
          );
        })
      }
    </>
  );
}