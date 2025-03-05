// src/controllers/user_controller.ts

//funcions que s'executen
import { saveMethod, createUser, getAllUsers, getUserById, updateUser, deleteUser, login } from '../users/user_service.js';

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
export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await createUser(req.body); //com que en el request ha de venir el body, s'ha de passar com a paràmetre
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllUsersHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getUserById(req.params.id); //tot el que hi ha a la url després de /users/ es guarda a req.params.id
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateUser(req.params.id, req.body); //actualitza el que hi ha a la url després de /users/ amb el que hi ha al body
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteUser(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await login(req.body.name, req.body.password);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
