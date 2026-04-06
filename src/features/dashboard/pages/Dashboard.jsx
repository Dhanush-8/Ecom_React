import { useEffect, useState } from "react";
import "./Dashboard.css";
import { getProjects } from "../services";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);



  const fetchStats = async () => {
    const res = await fetch("/api/dashboard/stats");
    const data = await res.json();
    setStats(data);
  };

  const fetchActivities = async () => {
    const res = await fetch("/api/dashboard/activities");
    const data = await res.json();
    setActivities(data);
  };


  const fetchNotifications = async () => {
    const res = await fetch("/api/notifications");
    const data = await res.json();
    setNotifications(data);
  };
  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };
  useEffect(() => {
    // 🔥 You will implement these APIs
    fetchStats();
    fetchActivities();
    fetchProjects();
    fetchNotifications();
  }, []);



  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* 🔥 Stats */}
      <div className="stats">
        {stats ? (
          <>
            <div className="card">
              <h3>Users</h3>
              <p>{stats.users}</p>
            </div>
            <div className="card">
              <h3>Projects</h3>
              <p>{stats.projects}</p>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p>₹{stats.revenue}</p>
            </div>
            <div className="card">
              <h3>Tasks</h3>
              <p>{stats.tasks}</p>
            </div>
          </>
        ) : (
          <p>Loading stats...</p>
        )}
      </div>

      <div className="grid">
        {/* 🔥 Activities */}
        <div className="panel">
          <h2>Recent Activities</h2>
          {activities.length ? (
            activities.map((item, i) => (
              <p key={i}>• {item}</p>
            ))
          ) : (
            <p>No activities</p>
          )}
        </div>

        {/* 🔥 Notifications */}
        <div className="panel">
          <h2>Notifications</h2>
          {notifications.length ? (
            notifications.map((n, i) => (
              <p key={i}>🔔 {n}</p>
            ))
          ) : (
            <p>No notifications</p>
          )}
        </div>
      </div>

      {/* 🔥 Projects Table */}
      <div className="table-section">
        <h2>Projects</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Owner</th>
            </tr>
          </thead>

          <tbody>
            {projects.length ? (
              projects.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.status}</td>
                  <td>{p.owner}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No projects</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;