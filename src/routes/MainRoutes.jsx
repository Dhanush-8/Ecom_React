import { Route } from "react-router-dom";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Team from "../features/team/pages/Team";
import Projects from "../features/projects/pages/Projects";
// import Analytics from "../features/analytics/pages/Analytics";
import Analytics from "../features/analytics/pages/Analytics";
import Settings from "../features/settings/pages/Settings";

const MainRoutes = (
  <>
    {/* Default when user goes to /app */}
    <Route index element={<Dashboard />} />

    {/* Sidebar Routes */}
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="team" element={<Team />} />
    <Route path="projects" element={<Projects />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="settings" element={<Settings />} />
  </>
);

export default MainRoutes;