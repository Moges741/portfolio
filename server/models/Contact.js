import db from "../DB/db.js";

export const createContact = (contact) => {
  const { name, email, message } = contact;

  return db
    .promise()
    .query(
      `INSERT INTO contacts (name, email, message)
       VALUES (?, ?, ?)`,
      [name, email, message]
    );
};
