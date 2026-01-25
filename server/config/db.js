// config/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql8.freesqldatabase.com',
  user: 'sql8815241',  // Your FreeMySQL username
  password: '178CzdSPGA',  // Your FreeMySQL password
  database: 'sql8815241',  // Your FreeMySQL database name
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
});



// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'mogesUser',
//     password: '_Qf89VmRhzhEEmM5',
//     database: 'portifolio',
//     port: 3306,
// }); 


export default pool;
