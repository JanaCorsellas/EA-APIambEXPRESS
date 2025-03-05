"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const forum_controller_js_1 = require("./forum_controller.js");
const router = express_1.default.Router();
/**
 * @openapi
 * /api/forum:
 *   post:
 *     summary: Crea una nueva entrada en el foro
 *     description: Añade una nueva entrada al foro.
 *     tags:
 *       - Forum
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Entrada creada exitosamente
 */
router.post('/forum', forum_controller_js_1.createEntryHandler);
/**
 * @openapi
 * /api/forum:
 *   get:
 *     summary: Obtiene todas las entradas del foro
 *     description: Retorna una lista de todas las entradas del foro.
 *     tags:
 *       - Forum
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
 *                   name:
 *                     type: string
 *                   comment:
 *                     type: string
 */
router.get('/forum', forum_controller_js_1.getAllForumHandler);
/**
 * @openapi
 * /api/forum/{id}:
 *   get:
 *     summary: Obtiene una entrada del foro por ID
 *     description: Retorna los detalles de una entrada específica del foro.
 *     tags:
 *       - Forum
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
 *                 comment:
 *                   type: string
 *       404:
 *         description: Entrada no encontrada
 */
router.get('/forum/:id', forum_controller_js_1.getEntryByIdHandler);
/**
 * @openapi
 * /api/forum/{id}:
 *   put:
 *     summary: Actualiza una entrada del foro por ID
 *     description: Modifica los detalles de una entrada específica del foro.
 *     tags:
 *       - Forum
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
 *               name:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Entrada actualizada exitosamente
 *       404:
 *         description: Entrada no encontrada
 */
router.put('/forum/:id', forum_controller_js_1.updateEntryHandler);
/**
 * @openapi
 * /api/forum/{id}:
 *   delete:
 *     summary: Elimina una entrada del foro por ID
 *     description: Elimina una entrada específica del foro.
 *     tags:
 *       - Forum
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Entrada eliminada exitosamente
 *       404:
 *         description: Entrada no encontrada
 */
router.delete('/forum/:id', forum_controller_js_1.deleteEntryHandler);
exports.default = router;
