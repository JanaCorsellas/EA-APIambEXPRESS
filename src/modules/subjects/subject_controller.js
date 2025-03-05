"use strict";
// src/controllers/subject_controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubjectHandler = exports.updateSubjectHandler = exports.getSubjectByIdHandler = exports.getAllSubjectsHandler = exports.createSubjectHandler = exports.saveMethodHandler = void 0;
//funcions que s'executen
const subject_service_js_1 = require("../subjects/subject_service.js");
//funció genèrica
const saveMethodHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (0, subject_service_js_1.saveMethod)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.saveMethodHandler = saveMethodHandler;
const createSubjectHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, subject_service_js_1.createSubject)(req.body); //com que en el request ha de venir el body, s'ha de passar com a paràmetre
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createSubjectHandler = createSubjectHandler;
const getAllSubjectsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, subject_service_js_1.getAllSubjects)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllSubjectsHandler = getAllSubjectsHandler;
const getSubjectByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, subject_service_js_1.getSubjectById)(req.params.id); //tot el que hi ha a la url després de /users/ es guarda a req.params.id
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSubjectByIdHandler = getSubjectByIdHandler;
const updateSubjectHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, subject_service_js_1.updateSubject)(req.params.id, req.body); //actualitza el que hi ha a la url després de /users/ amb el que hi ha al body
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateSubjectHandler = updateSubjectHandler;
const deleteSubjectHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, subject_service_js_1.deleteSubject)(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteSubjectHandler = deleteSubjectHandler;
