export const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/projects");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching projects:", error);
    return { data: [] };
  }
};

export const createProject = async (payload) => {
  try {
    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error creating project:", error);
  }
};

export const updateProject = async (id, payload) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/projects/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    return await res.json();
  } catch (error) {
    console.log("Update error:", error);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/projects/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Delete error:", error);
  }
};