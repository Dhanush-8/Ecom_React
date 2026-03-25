import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  // 🧠 Check if user logged in
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user
    navigate("/login"); // redirect
  };

  return (
    <div className="nav">
      <h2>MyApp 🚀</h2>

      <ul className="nav-links">
        {user ? (
          <>
            {/* Logged-in user */}
            <li>
              <Link to="/app">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            {/* Not logged-in */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;