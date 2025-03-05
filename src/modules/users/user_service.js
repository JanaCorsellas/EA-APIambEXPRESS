"use strict";
// src/services/user_service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = exports.saveMethod = void 0;
//definim funcions a nivell de base de dades 
const user_models_js_1 = __importDefault(require("../users/user_models.js"));
const saveMethod = () => {
    return 'Hola';
};
exports.saveMethod = saveMethod;
//rep userdata que el posa a la iuser per crear l'usuari i el guarda a la bbdd
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_models_js_1.default(userData);
    return yield user.save();
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_js_1.default.find();
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_js_1.default.findById(id);
});
exports.getUserById = getUserById;
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_js_1.default.updateOne({ _id: id }, { $set: updateData });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_js_1.default.deleteOne({ _id: id });
});
exports.deleteUser = deleteUser;
const login = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_js_1.default.findOne({ name: name, password: password });
    //aquí hem de fer tot el tractament de les dades
});
exports.login = login;
