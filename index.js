require('dotenv').config()
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import DAO from './dao/AbstractDAO';

import Assunto from './entities/Assunto';

var server = express();

server.use(bodyParser.json());
server.use(cors());

server.listen(process.env.PORT, () => {
    DAO.query(Assunto.tablename, Assunto.queries.countInativos);

    DAO.query(Assunto.tablename, Assunto.queries.statusAtivos, {
        ativo: "0"
    });
});