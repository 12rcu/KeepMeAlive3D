import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { FolderCog } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogTrigger } from "@/components/ui/dialog.tsx";
import { CreateDigitalTwinProjectDialog } from "@/scene/home/CreateDigitalTwinProjectDialog.tsx";

export function DigitalTwinsOverviewEmpty() {
  return(
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCog />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any digital twins yet. Get started by creating
          your first digital twin.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Dialog>
          <DialogTrigger>
            <Button>Create Project</Button>
          </DialogTrigger>
          <CreateDigitalTwinProjectDialog/>
        </Dialog>
      </EmptyContent>
    </Empty>
  )
}