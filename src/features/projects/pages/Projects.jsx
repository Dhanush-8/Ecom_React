import React, { useEffect, useState } from "react";
import { getProjects, createProject } from "../services";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    status: "",
    owner: "",
  });

  // 🔥 Fetch projects on load
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getProjects();
    setProjects(res.data || []);
  };

  // 🔥 Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProject(form);

    setForm({ name: "", status: "", owner: "" });

    fetchProjects(); // refresh list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>

      {/* 🔥 Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
        />

        <input
          type="text"
          name="owner"
          placeholder="Owner"
          value={form.owner}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>

      {/* 🔥 Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Owner</th>
          </tr>
        </thead>

        <tbody>
          {projects.length > 0 ? (
            projects.map((proj) => (
              <tr key={proj._id}>
                <td>{proj.name}</td>
                <td>{proj.status}</td>
                <td>{proj.owner}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Projects Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;