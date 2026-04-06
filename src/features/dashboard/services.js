// 🔥 Get Projects API
export const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/projects");

    const data = await res.json();

    return data.data || []; // 👈 important (because backend sends { data: [...] })
  } catch (error) {
    console.log("Error fetching projects:", error);
    return [];
  }
};