import mysql from "mysql2";

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
const db = mysql.createPool({
    host: 'localhost',
    user: 'mogesUser',
    password: '_Qf89VmRhzhEEmM5',
    database: 'portifolio',
    port: 3306,
}); 


export default db;
