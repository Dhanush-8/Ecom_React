import Nav from "../shared/components/Nav";
import Sidebar from "../shared/components/Sidebar";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Nav />

      <div className="layout-body">
        <Sidebar />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;