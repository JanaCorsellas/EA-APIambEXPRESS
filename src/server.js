"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_js_1 = __importDefault(require("./modules/users/user_routes.js")); // Nota el .js al final
const forum_routes_js_1 = __importDefault(require("./modules/forum/forum_routes.js")); // Nota el .js al final
const subject_routes_js_1 = __importDefault(require("./modules/subjects/subject_routes.js")); // Nota el .js al final
const corsHandler_js_1 = require("./middleware/corsHandler.js");
const loggingHandler_js_1 = require("./middleware/loggingHandler.js");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
dotenv_1.default.config(); // Cargamos las variables de entorno desde el archivo .env
const app = (0, express_1.default)();
const LOCAL_PORT = process.env.SERVER_PORT || 9000;
// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API de Usuarios'
        },
        tags: [
            {
                name: 'Users',
                description: 'Rutas relacionadas con la gestión de usuarios',
            },
            {
                name: 'Forum',
                description: 'Rutas relacionadas con el forum',
            },
            {
                name: 'Subjects',
                description: 'Rutas relacionadas con las asignaturas',
            },
            {
                name: 'Main',
                description: 'Rutas principales de la API',
            }
        ],
        servers: [
            {
                url: `http://localhost:${LOCAL_PORT}`
            }
        ]
    },
    apis: ['./modules/users/*.js', './modules/forum/*.js', './modules/subjects/*.js'] // Asegúrate de que esta ruta apunta a tus rutas
};
//per crear les especificacions del protocol del swagger
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// Middleware
app.use(express_1.default.json());
app.use(loggingHandler_js_1.loggingHandler);
app.use(corsHandler_js_1.corsHandler);
//rutas
app.use('/api', user_routes_js_1.default);
app.use('/api', forum_routes_js_1.default);
app.use('/api', subject_routes_js_1.default);
// Rutes de prova
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});
// Conexión a MongoDB
//mongoose;
mongoose_1.default
    .connect(process.env.MONGODB_URI || 'mongodb+srv://joan:1234@cluster0.3owhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.error('DB Connection Error:', error));
// Iniciar el servidor
app.listen(LOCAL_PORT, () => {
    console.log('Server listening on port: ' + LOCAL_PORT);
    console.log(`Swagger disponible a http://localhost:${LOCAL_PORT}/api-docs`);
});
