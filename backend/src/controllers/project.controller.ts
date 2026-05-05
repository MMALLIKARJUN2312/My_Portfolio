import type {Request, Response} from 'express';
import {fetchProjects} from '../services/project.service.js';

export const getProjects = async (_req : Request, res : Response) => {
    const data = await fetchProjects();
    res.json(data);
}

