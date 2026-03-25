import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");

  // 🧠 If user exists → allow
return user ? <Outlet /> : <Navigate to="/signup" />;};

export default PrivateRoute;