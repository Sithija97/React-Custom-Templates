import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};
