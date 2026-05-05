import type {Request, Response} from 'express';
import {fetchProjects} from '../services/project.service.js';

export const getProjects = async (_req : Request, res : Response) => {
    try {
        const data = await fetchProjects();
        res.json(data);
    } catch (error) {
        res.status(500).json({error : "Failed to fetch the projects"})
    }
}

