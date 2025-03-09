// src/controllers/subject_controller.ts

//funcions que s'executen
import { saveMethod, createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getUsersBySubject } from '../subjects/subject_service.js';

import express, { Request, Response } from 'express';

//funció genèrica
export const saveMethodHandler = async (req: Request, res: Response) => {
    try {
        const data = saveMethod();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await createSubject(req.body); //com que en el request ha de venir el body, s'ha de passar com a paràmetre
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.id); 
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.id, req.body); //actualitza el que hi ha a la url després de /users/ amb el que hi ha al body
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getUsersBySubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await getUsersBySubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
