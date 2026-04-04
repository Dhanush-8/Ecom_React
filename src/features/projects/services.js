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