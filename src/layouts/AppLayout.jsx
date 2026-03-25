import Nav from "../shared/components/Nav";
import Footer from "../shared/components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Nav />
      
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default AppLayout;