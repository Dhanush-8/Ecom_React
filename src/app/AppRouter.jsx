import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import SignUp from "../features/auth/pages/SignUp";

import PrivateRoute from "../routes/PrivateRoute";
import MainRoutes from "../routes/MainRoutes";
import AppLayout from "../layouts/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/signup" />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected */}
      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<AppLayout />}>
          {MainRoutes}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;