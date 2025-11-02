import { DigitalTwinsOverviewEmpty } from "@/scene/home/DigitalTwinsOverviewEmpty.tsx";
import type { DtProjectData } from "@/scene/home/dtProjectData.ts";
import { DigitalTwinsOverviewCard } from "@/scene/home/DigitalTwinsOverviewCard.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogTrigger } from "@/components/ui/dialog.tsx";
import { CreateDigitalTwinProjectDialog } from "@/scene/home/CreateDigitalTwinProjectDialog.tsx";

export function DigitalTwinsOverview() {
  const data: DtProjectData[] = [
    {
      id: "1",
      name: "test",
      icon: 1
    },
    {
      id: "2",
      name: "test2",
      icon: 2
    }
  ]

  if(data.length > 0) {
    return <div className="flex flex-1 flex-col gap-4 p-4">
      {
        data.map(project => {
          return (
            <DigitalTwinsOverviewCard projectData={project}/>
          )
        })
      }
      <div className="max-width flex flex-row">
        <div className="grow"></div>
        <Dialog>
          <DialogTrigger>
            <Button className="max-w-42">Create New Project</Button>
          </DialogTrigger>
          <CreateDigitalTwinProjectDialog/>
        </Dialog>
      </div>
    </div>
  } else {
    return (
      <DigitalTwinsOverviewEmpty/>
    )
  }
}