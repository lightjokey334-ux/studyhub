/* ===================================================================
   Domain 4 — Pre-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D4_PRE = [
  {
    id: "d4_pre_01",
    type: "single",
    question: "Before running a DELETE statement, it is always a good idea to run a(n) _______ statement on the table that is about to be changed.",
    image: null,
    options: ["DROP", "SELECT", "INSERT", "UPDATE"],
    correct: [1],
    explanation: "Always run a SELECT statement on the table you are about to change before running a DELETE statement to make sure it is the correct table. (Delete Data from a Single Table)"
  },
  {
    id: "d4_pre_02",
    type: "single",
    question: "What statement is used to copy records from an existing table to a new table?",
    image: null,
    options: ["SELECT", "SELECT INTO", "SELECT WITHIN", "INSERT INTO SELECT"],
    correct: [1],
    explanation: "SELECT INTO copies records from an existing table into a new table, creating the new table automatically. (INSERT INTO...SELECT)"
  },
  {
    id: "d4_pre_03",
    type: "single",
    question: "What clause should always be included in an UPDATE statement?",
    image: null,
    options: ["GROUP BY", "FROM", "WHERE", "HAVING"],
    correct: [2],
    explanation: "Always include a WHERE clause in an UPDATE statement to specify which records to update; otherwise, all records will be updated. (Update Data in a Single Table)"
  },
  {
    id: "d4_pre_04",
    type: "single",
    question: "What must be included in parentheses in an INSERT INTO...VALUES statement?",
    image: null,
    options: ["Required fields", "Column types", "Number of columns", "Null values"],
    correct: [0],
    explanation: "Required fields (the columns that will receive data) must be included in the parentheses of an INSERT INTO...VALUES statement. (INSERT INTO...VALUES)"
  }
];
