import { getProjectsModel } from "../models/project.model.js"

export const fetchProjects = async () => {
    return await getProjectsModel();
}