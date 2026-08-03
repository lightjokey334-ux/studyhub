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
    correct: [1]
  },
  {
    id: "d4_pre_02",
    type: "single",
    question: "What statement is used to copy records from an existing table to a new table?",
    image: null,
    options: ["SELECT", "SELECT INTO", "SELECT WITHIN", "INSERT INTO SELECT"],
    correct: [1]
  },
  {
    id: "d4_pre_03",
    type: "single",
    question: "What clause should always be included in an UPDATE statement?",
    image: null,
    options: ["GROUP BY", "FROM", "WHERE", "HAVING"],
    correct: [2]
  },
  {
    id: "d4_pre_04",
    type: "single",
    question: "What must be included in parentheses in an INSERT INTO...VALUES statement?",
    image: null,
    options: ["Required fields", "Column types", "Number of columns", "Null values"],
    correct: [0]
  }
];
