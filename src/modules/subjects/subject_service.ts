// src/services/user_service.ts

//definim funcions a nivell de base de dades 
import Subject, { ISubject } from '../subjects/subject_models.js';
import User from '../users/user_models.js';

export const saveMethod = () => {
    return 'Hola';
};

//rep userdata que el posa a la iuser per crear l'usuari i el guarda a la bbdd
export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    try {
        const subjects = await Subject.find();
        return subjects;
    }
    catch (error) {
        throw new Error('Error getting subjects');
    }
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

export const getUsersBySubject = async (subjectId: string) => {
    /*try {
        const users = await User.find({ subjects: subjectId });
        return users;
    } catch (error) {
        throw new Error('Error getting users by subject');
    }*/
        try {
            // Buscar la materia por ID y obtener los alumnos
            const subject = await Subject.findById(subjectId).populate('alumni');
            if (!subject) {
                throw new Error('Subject not found');
            }
    
            return subject.alumni; // Ya está populado con los usuarios
        } catch (error) {
            throw new Error('Error getting users by subject');
        }
};
