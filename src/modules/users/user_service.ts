// src/services/user_service.ts

//definim funcions a nivell de base de dades 
import User, { IUser } from '../users/user_models.js';

export const saveMethod = () => {
    return 'Hola';
};

//rep userdata que el posa a la iuser per crear l'usuari i el guarda a la bbdd
export const createUser = async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
};

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
    return await User.updateOne({ _id: id }, { $set: updateData });
};

export const deleteUser = async (id: string) => {
    return await User.deleteOne({ _id: id });
};

export const login = async (name: string, password: string) => {
    return await User.findOne({name: name, password: password});
    //aquí hem de fer tot el tractament de les dades
}

