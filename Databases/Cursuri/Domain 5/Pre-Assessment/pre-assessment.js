/* ===================================================================
   Domain 5 — Pre-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D5_PRE = [
  {
    id: "d5_pre_01",
    type: "single",
    question: "One error that may occur when manipulating data is a missing _______.",
    image: null,
    options: ["column", "query", "table", "keyword"],
    correct: [3],
    explanation: "A missing keyword (such as VALUES) is a common syntax error when manipulating data. (Data Manipulation Errors)"
  },
  {
    id: "d5_pre_02",
    type: "single",
    question: "One error that may occur is attempting to retrieve data with a well-written query but against the wrong _______.",
    image: null,
    options: ["row", "database", "column", "table"],
    correct: [1],
    explanation: "A well-written query can fail if it is run against the wrong database. (Select Errors)"
  },
  {
    id: "d5_pre_03",
    type: "single",
    question: "Which statement best defines a syntax error?",
    image: null,
    options: [
      "Causes tables to not appear correctly within a database",
      "Prevents a table from being created",
      "Causes a statement not to run",
      "Prevents changes to a database from being completed"
    ],
    correct: [2],
    explanation: "A syntax error causes a statement not to run. (Object Management Errors)"
  }
];