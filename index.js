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

// var assunto = db.model({
//     table: "fc_assunto"
// });

// assunto.query(fc_assunto.queries.countInativos, {
//     id: "1"
// }).then(res => {
//     console.log(`Querying table: [${fc_assunto.tablename}]\n`);
//     console.log(`Query: [${fc_assunto.queries.countInativos}]\n`);
//     console.log(`Result: ${JSON.stringify(res[0])}`);
// }).catch(err => {
//     console.log(err);
// });

// assunto.query(fc_assunto.queries.statusAtivos).then(res => {
//     console.log(`Querying table: [${fc_assunto.tablename}]\n`);
//     console.log(`Query: [${fc_assunto.queries.statusAtivos}]\n`);
//     console.log(`Result: ${JSON.stringify(res)}`);
// }).catch(err => {
//     console.log(err);
// });