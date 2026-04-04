import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🚀 MyApp</h2>

      <nav>
        <NavLink to="/app/dashboard" className="link">
          Dashboard
        </NavLink>

        <NavLink to="/app/team" className="link">
          Team Profiles
        </NavLink>

        <NavLink to="/app/projects" className="link">
          Projects
        </NavLink>

        <NavLink to="/app/analytics" className="link">
          Analytics
        </NavLink>

        <NavLink to="/app/settings" className="link">
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;