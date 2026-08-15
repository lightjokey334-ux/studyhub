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
    correct: [0],
    explanation: "The DELETE keyword removes records from a table. (Delete Data from a Single Table)"
  },
  {
    id: "d4_post_02",
    type: "single",
    question: "What is the difference between a DELETE statement and a TRUNCATE TABLE statement?",
    image: null,
    options: [
      "One can identify specific records that are being deleted with a DELETE statement, while a TRUNCATE TABLE statement deletes all data in a table",
      "One can identify specific records that are being deleted with a TRUNCATE TABLE statement, while a DELETE statement deletes all data in a table",
      "One can identify specific records that are being deleted with a DELETE statement, while a TRUNCATE TABLE statement allows one to delete specific characters in a record",
      "One can identify specific records that are being deleted with a TRUNCATE TABLE statement, while a DELETE statement allows one to delete specific characters in a record"
    ],
    correct: [0],
    explanation: "DELETE can identify specific records to delete (using criteria), while TRUNCATE TABLE empties the entire table without allowing any criteria. (Truncate Table)"
  },
  {
    id: "d4_post_03",
    type: "single",
    question: "What statement is used to copy records from one table into an existing table?",
    image: null,
    options: ["SELECT", "SELECT INTO", "SELECT WITHIN", "INSERT INTO...SELECT"],
    correct: [3],
    explanation: "INSERT INTO with a SELECT statement is used to copy records from one table into an existing table. (INSERT INTO...SELECT)"
  },
  {
    id: "d4_post_04",
    type: "single",
    question: "What statement is used to change existing data?",
    image: null,
    options: ["NEW", "CHANGE", "MODIFY", "UPDATE"],
    correct: [3],
    explanation: "The UPDATE statement is used to change existing data in a table. (Update Data in a Single Table)"
  },
  {
    id: "d4_post_05",
    type: "single",
    question: "What statement is used to insert values into a table?",
    image: null,
    options: ["ADD VALUES", "INSERT INTO...VALUES", "INSERT VALUES...INTO", "ADD INTO...VALUES"],
    correct: [1],
    explanation: "The INSERT INTO...VALUES statement is used to insert specific values into a table. (INSERT INTO...VALUES)"
  }
];