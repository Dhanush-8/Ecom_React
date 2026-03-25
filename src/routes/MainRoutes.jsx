import { Route } from "react-router-dom";
import Dashboard from "../features/dashboard/pages/Dashboard";

const MainRoutes = (
  <>
    {/* Default inside /app */}
    <Route index element={<Dashboard />} />

    {/* Later you add more like this */}
    {/* <Route path="products" element={<ProductList />} /> */}
  </>
);

export default MainRoutes;