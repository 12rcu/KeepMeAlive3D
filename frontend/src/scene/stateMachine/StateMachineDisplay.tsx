import { Layer, Stage } from "react-konva";
import { useEffect, useRef, useState } from "react";
import { StateMachineGraph } from "@/scene/stateMachine/StateMachineGraph.tsx";
import { LoadingSpinner } from "@/components/custom/loading-spinner.tsx";

export function StateMachineDisplay() {
  const divRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
        setDimensions({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight
        })
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div ref={divRef} className="flex-1 h-full overflow-hidden bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
      <LoadingSpinner loading={loading}></LoadingSpinner>
      <Stage width={dimensions.width} height={dimensions.height} className="w-full">
        <Layer>
          <StateMachineGraph setLoading={setLoading}></StateMachineGraph>
        </Layer>
      </Stage>
    </div>
  )
}