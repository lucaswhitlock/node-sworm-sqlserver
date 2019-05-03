require('dotenv').config()
import sworm from 'sworm';

var db = sworm.db();

db.connect({
    driver: 'mssql',
    config: {
        user: process.env.DB_USER,
        password: process.env.DB_PSWD,
        server: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)
    }
});

export default {
    query(table, query) {
        table = db.model({
            table: table
        });
        table.query(query).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    },

    query(table, query, _params) {
        table = db.model({
            table: table
        });
        table.query(query, _params).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
};