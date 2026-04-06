import React, { useEffect, useState } from "react";
import { getProjects, createProject, updateProject, deleteProject } from "../services";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// ✅ MUI imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    status: "",
    owner: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getProjects();
    setProjects(res.data || []);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateProject(editId, form); // 🔥 update
    } else {
      await createProject(form); // 🔥 create
    }

    setForm({ name: "", status: "", owner: "" });
    setEditId(null);

    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      name: project.name,
      status: project.status,
      owner: project.owner,
    });

    setEditId(project._id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;

    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Projects
      </Typography>

      {/* ✅ Form using MUI */}
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} mb={3}>
          <TextField
            label="Project Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            size="small"
          />

          <TextField
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            size="small"
          />

          <TextField
            label="Owner"
            name="owner"
            value={form.owner}
            onChange={handleChange}
            size="small"
          />

          <Button type="submit" variant="contained">
            {editId ? "Update Project" : "Add Project"}
          </Button>
        </Stack>
      </form>

      {/* ✅ MUI Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Owner</b></TableCell>
              <TableCell><b>Edit</b></TableCell>
              <TableCell><b>Delete</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.length > 0 ? (
              projects.map((proj) => (
                <TableRow key={proj._id}>
                  <TableCell>{proj.name}</TableCell>
                  <TableCell>{proj.status}</TableCell>
                  <TableCell>{proj.owner}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(proj)}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(proj._id)}>
                      <DeleteOutlineIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No Projects Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Projects;