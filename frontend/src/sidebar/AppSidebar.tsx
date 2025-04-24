import { Sidebar, SidebarContent } from "@/components/ui/sidebar.tsx";
import { KeepMeAlive3DGroup } from "@/sidebar/KeepMeAlive3DGroup.tsx";
import { ModelGroup } from "@/sidebar/model/ModelGroup.tsx";
import { ModelPartsGroup } from "@/sidebar/ModelPartsGroup.tsx";
import { Footer } from "@/sidebar/Footer.tsx";
import { ReplayGroup } from "@/sidebar/replay/ReplayGroup.tsx";
import { SidebarVersionHeader } from "@/sidebar/header/SidebarVersionHeader.tsx";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarVersionHeader />
      <SidebarContent>
        <KeepMeAlive3DGroup />
        <ModelGroup />
        <ReplayGroup />
        <ModelPartsGroup />
      </SidebarContent>
      <Footer />
    </Sidebar>
  );
}
