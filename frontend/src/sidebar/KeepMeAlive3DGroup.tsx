import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { GitCompareArrows, Home, LineChartIcon } from "lucide-react";
import { Link } from "react-router";

export function KeepMeAlive3DGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>KeepMeAlive3D</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem key="Home">
            <SidebarMenuButton asChild>
              <a href="/">
                <Home />
                <span>Home</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem key="Graphs">
            <SidebarMenuButton asChild>
              <Link to="/graphs" target="_blank">
                <LineChartIcon />
                <span>Graphs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem key="StateMachine">
            <SidebarMenuButton asChild>
              <Link to="/state-machine">
                <GitCompareArrows />
                <span>State Machine</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
