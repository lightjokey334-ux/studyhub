/* ===================================================================
   Domain 4 — Post-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D4_POST = [
  {
    id: "d4_post_01",
    type: "single",
    question: "What keyword removes records from a table?",
    image: null,
    options: ["DELETE", "DROP", "REMOVE", "CANCEL"],
    correct: [0]
  },
  {
    id: "d4_post_02",
    type: "single",
    question: "What is the difference between a DELETE statement and a TRUNCATE TABLE statement?",
    image: null,
    options: ["One can identify specific records that are being deleted with a DELETE statement, while a TRUNCATE TABLE statement deletes all data in a table", "One can identify specific records that are being deleted with a TRUNCATE TABLE statement, while a DELETE statement deletes all data in a table", "One can identify specific records that are being deleted with a DELETE statement, while a TRUNCATE TABLE statement allows one to delete specific characters in a record", "One can identify specific records that are being deleted with a TRUNCATE TABLE statement, while a DELETE statement allows one to delete specific characters in a record"],
    correct: [0]
  },
  {
    id: "d4_post_03",
    type: "single",
    question: "What statement is used to copy records from one table into an existing table?",
    image: null,
    options: ["SELECT", "SELECT INTO", "SELECT WITHIN", "INSERT INTO...SELECT"],
    correct: [3]
  },
  {
    id: "d4_post_04",
    type: "single",
    question: "What statement is used to change existing data?",
    image: null,
    options: ["NEW", "CHANGE", "MODIFY", "UPDATE"],
    correct: [3]
  },
  {
    id: "d4_post_05",
    type: "single",
    question: "What statement is used to insert values into a table?",
    image: null,
    options: ["ADD VALUES", "INSERT INTO...VALUES", "INSERT VALUES...INTO", "ADD INTO...VALUES"],
    correct: [1]
  }
];
