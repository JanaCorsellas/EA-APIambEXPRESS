import express from 'express';

import {
    saveMethodHandler,
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler
} from '../subjects/subject_controller.js';

const router = express.Router();

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
router.post('/subjects', createSubjectHandler);

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
router.get('/subjects', getAllSubjectsHandler);

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
router.get('/subjects/:id', getSubjectByIdHandler);

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
router.put('/subjects/:id', updateSubjectHandler);

export default router;