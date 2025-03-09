import express from 'express';

import {
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getUsersBySubjectHandler
} from '../subjects/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea un nou subject
 *     description: Afegeix els detalls d'un nou subject.
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
 *                 type: array
 *                 items: 
 *                   type: ObjectID
 *     responses:
 *       201:
 *         description: Subject creat exitosament
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obté tots els subjects
 *     description: Retorna una llista de tots els subjects.
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
 *                    type: array
 *                    items: 
 *                      type: ObjectID
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obté un subject per ID
 *     description: Retorna els detalls d'un subject específic.
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
 *                   type: array
 *                   items: 
 *                     type: ObjectID
 *       404:
 *         description: Subject no trobat
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualitza un subject per ID
 *     description: Modifica els detalls d'un subject específic.
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
 *                   type: array
 *                   items: 
 *                     type: ObjectID
 *     responses:
 *       200:
 *         description: Subject actualizat exitosament
 *       404:
 *         description: Subject no trobat
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina un subject per ID
 *     description: Elimina un subject específic de la base de dades.
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
 *         description: Subject eliminat exitosament
 *       404:
 *         description: Subject no trobat
 */
router.delete('/subjects/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}/users:
 *   get:
 *     summary: Obté tots els usuaris que estan cursant una subject
 *     description: Retorna una llista dels usuaris.
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
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   subjects:
 *                     type: array
 *                     items:
 *                       type: string
 *       404:
 *         description: Subject no trobat */
router.get('/subjects/:id/users', getUsersBySubjectHandler);

export default router;