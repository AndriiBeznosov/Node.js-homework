# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list<br/>
https://monosnap.com/file/FqO2sf2FZ5ZCJ7jjlHfy4Iq3w0bQG8

# Получаем контакт по id

node index.js --action get --id 5<br/>
https://monosnap.com/file/gpwGpum5TEjdtGVy9bk6Az5EmpwHmj

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/7R14lBP5z89dmYRStx3PF2slR6hfnD

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/bItgKIPxcWcZ4YvzfHlogivVBRxMSS
==============================================================
✅ Шаг 1<br/>
Инициализируй npm в проекте <br/>
В корне проекта создай файл index.js <br/>
Поставь пакет nodemon как зависимость разработки (devDependencies) <br/>
В файле package.json добавь "скрипты" для запуска index.js <br/>
Скрипт start который запускает index.js с помощью node <br/>
Скрипт start:dev который запускает index.js с помощью nodemon <br/>

✅ Шаг 2<br/>
В корне проекта создай папку db. Для хранения контактов скачай и используй файл contacts.json, положив его в папку db.<br/>

В корне проекта создай файл contacts.js.<br/>

Сделай импорт модулей fs и path для работы с файловой системой<br/>
Создай переменную contactsPath и запиши в нее путь к файлу contacts.json. Для составления пути используй методы модуля path.<br/>
Добавь функции для работы с коллекцией контактов. В функциях используй модуль fs и его методы readFile() и writeFile()<br/>
Сделай экспорт созданных функций через module.exports<br/>
contacts.js<br/>
/\*

- Раскомментируй и запиши значение
- const contactsPath = ;
  \*/

// TODO: задокументировать каждую функцию <br/>
function listContacts() {
// ...твой код
}

function getContactById(contactId) {
// ...твой код
}

function removeContact(contactId) {
// ...твой код
}

function addContact(name, email, phone) {
// ...твой код
} <br/>

✅ Шаг 3 <br/>
Сделай импорт модуля contacts.js в файле index.js и проверь работоспособность функций для работы с контактами. <br/>

✅ Шаг 4<br/>
В файле index.js импортируется пакет yargs для удобного парса аргументов командной строки. Используй готовую функцию invokeAction() которая получает тип выполняемого действия и необходимые аргументы. Функция вызывает соответствующий метод из файла contacts.js передавая ему необходимые аргументы.

index.js<br/>
const argv = require("yargs").argv;<br/>

// TODO: рефакторить<br/>
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case "list":
// ...
break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");

}
}

invokeAction(argv); <br/>
Так же, вы можете использовать модуль commander для парсинга аргументов командной строки. Это более популярная альтернатива модуля yargs <br/>

const { Command } = require("commander"); <br/>
const program = new Command();<br/>
program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone");

program.parse(process.argv);<br/>

const argv = program.opts();<br/>

// TODO: рефакторить<br/>
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case "list":
// ...
break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");

}
}

invokeAction(argv); <br/>

✅ Шаг 5<br/>
Запусти команды в терминале и сделай отдельный скриншот результата выполнения каждой команды.<br/>

# Получаем и выводим весь список контактов в виде таблицы (console.table) <br/>

node index.js --action list

# Получаем контакт по id<br/>

node index.js --action get --id 5

# Добавялем контакт<br/>

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Удаляем контакт<br/>

node index.js --action remove --id=3 <br/>

✅ Шаг 6 - Сдача домашнего задания <br/>
Скриншоты выполнения команд, можно залить на любой бесплатный облачный сервис хранения картинок (Пример: monosnap, imgbb.com) и соответствующие ссылки необходимо добавить в файл README.md. Создайте этот файл в корне проекта.<br/>
