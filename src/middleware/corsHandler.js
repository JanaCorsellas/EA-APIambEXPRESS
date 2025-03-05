"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = corsHandler;
function corsHandler(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.header('origin') || '*'); //en lloc de * haurem de posar la url del front com per exemple http://localhost:3000
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
}
//podem instalar llibreria CORS: npm i cors     i editar el packet json per a que s'executi amb el servidor
//import cors from 'cors';
