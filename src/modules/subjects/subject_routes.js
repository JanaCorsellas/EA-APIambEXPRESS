"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subject_controller_js_1 = require("../subjects/subject_controller.js");
const router = express_1.default.Router();
/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea un nuevo subject
 *     description: Añade los detalles de un nuevo subject.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: Schema.Types.ObjectId
 *
 *     responses:
 *       201:
 *         description: Subject creado exitosamente
 */
router.post('/subjects', subject_controller_js_1.createSubjectHandler);
/**
 * @openapi
 * /api/subjets:
 *   get:
 *     summary: Obtiene todos los subjects
 *     description: Retorna una lista de todos los subjects.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  name:
 *                     type: string
 *                  teacher:
 *                    type: string
 *                  alumni:
 *                     type: Schema.Types.ObjectId
 */
router.get('/subjects', subject_controller_js_1.getAllSubjectsHandler);
/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene un subject por ID
 *     description: Retorna los detalles de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                    type: Schema.Types.ObjectId
 *       404:
 *         description: Subject no encontrado
 */
router.get('/subjects/:id', subject_controller_js_1.getSubjectByIdHandler);
/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza un subject por ID
 *     description: Modifica los detalles de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                    type: Schema.Types.ObjectId
 *     responses:
 *       200:
 *         description: Subject actualizado exitosamente
 *       404:
 *         description: Subject no encontrado
 */
router.put('/subjects/:id', subject_controller_js_1.updateSubjectHandler);
exports.default = router;
