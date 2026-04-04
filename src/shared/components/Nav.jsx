import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="nav">
      {/* Left */}
      <div className="nav-left">
        <h2 className="logo">🚀 MyApp</h2>
      </div>

      {/* Right */}
      <div className="nav-right">
        {user ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button onClick={() => navigate("/login")} className="nav-btn">
              Login
            </button>
            <button onClick={() => navigate("/signup")} className="nav-btn">
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;