import { Outlet } from "react-router";

/**
 * Layout without sidebar
 */
function LayoutVanilla() {
  return (
    <main className="w-full">
      <div className={"main-body"}>
        <main className={"main-content"}>
          <Outlet />
        </main>
      </div>
    </main>
  );
}

export default LayoutVanilla;
