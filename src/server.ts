import path from 'path';

import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
// app.listen(3333);
app.listen(process.env.PORT || 3333)
// Rota    => conjunto
// Recurso => usúario

// Médoto HTTP => GET, POST, PUT, DELETE
// Parâmetros

// GET    => Busca uma informação (Lista, item)
// POST   => Criando uma informção
// PUT    => Editando uma infomação
// DELETE => Deletando uma informação

// Query Params: http://localhost:3333/users?search=page2
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)
