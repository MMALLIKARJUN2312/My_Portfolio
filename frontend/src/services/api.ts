const BASE_URL = "http://localhost:5000/api";

export const getProjects = async () => {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error("Failed to fetch the projects");
    return res.json();
}