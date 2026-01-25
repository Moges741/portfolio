// import db from "../DB/db.js";

// export const createContact = (contact) => {
//   const { name, email, message } = contact;

//   return db
//     .promise()
//     .query(
//       `INSERT INTO contacts (name, email, message)
//        VALUES (?, ?, ?)`,
//       [name, email, message]
//     );
// };

import db from "../config/db.js"; // adjust path if needed

// Create a new contact message
export const createContact = async (contact) => {
  const { name, email, message } = contact;

  const [result] = await db.query(
    `INSERT INTO contacts (name, email, message)
     VALUES (?, ?, ?)`,
    [name, email, message]
  );

  return result; // returns insertId, affectedRows, etc.
};
