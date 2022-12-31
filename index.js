const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await listContacts();
      console.table(list);
      break;

    case "get":
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      await addContact(name, email, phone);
      console.log(
        `New contact added to list! name: ${name}, email: ${email}, phone: ${phone}`,
      );
      const listContact = await listContacts();
      console.table(listContact);

      break;

    case "remove":
      await removeContact(id);
      console.log(`Deleted contact with ${id}`);
      const newListContact = await listContacts();
      console.table(newListContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
