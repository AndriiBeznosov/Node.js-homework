const { assert } = require("console");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function readDb() {
  const fileContent = await fs.readFile(contactsPath);
  const db = JSON.parse(fileContent);
  return db;
}

async function writeDb(db) {
  await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));
}

async function listContacts() {
  const db = await readDb();
  return db;
}

async function getContactById(contactId) {
  const db = await readDb();
  const contact = db.filter((item) => item.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const db = await readDb();
  const contactsList = db.filter((contact) => contact.id !== contactId);
  await writeDb(contactsList);
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const item = { name, email, phone, id };
  const db = await readDb();
  db.push(item);
  await writeDb(db);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
