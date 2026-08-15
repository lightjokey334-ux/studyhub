/* ===================================================================
   Domain 5 — Post-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D5_POST = [
  {
    id: "d5_post_01",
    type: "single",
    question: "Refer to the image. What type of error is shown in the query?",
    image: "sql_alter_missing_table.png",
    options: ["Command error", "Syntax error", "Runtime error", "Operator error"],
    correct: [1],
    explanation: "The error indicates a syntax issue, such as missing keywords or incorrect syntax. (Object Management Errors)"
  },
  {
    id: "d5_post_02",
    type: "single",
    question: "Refer to the image. What type of error is shown in the query?",
    image: "sql_error_duplicate_column.png",
    options: ["Command error", "Syntax error", "Runtime error", "Operator error"],
    correct: [2],
    explanation: "A duplicate column error occurs at runtime when a well-written query attempts to do something that cannot be done, such as creating a column that already exists. (Data Manipulation Errors)"
  },
  {
    id: "d5_post_03",
    type: "single",
    question: "Refer to the image. What is the runtime error in the query?",
    image: "sql_error_invalid_object.png",
    options: [
      "The Sales.Customer table has not been created yet",
      "The query is being run against the wrong database",
      "There are too many columns from which data is being taken",
      "The wrong type of join is used"
    ],
    correct: [1],
    explanation: "A runtime error can occur when a query is well-written but is run against the wrong database. (Select Errors)"
  },
  {
    id: "d5_post_04",
    type: "single",
    question: "Refer to the image. What is the syntax error in the query?",
    image: "sql_error_missing_values.png",
    options: [
      "The ADD keyword is missing",
      "The HAVING clause is missing",
      "The VALUES keyword is missing",
      "There should not be a comma after the first record that is being added"
    ],
    correct: [2],
    explanation: "A missing VALUES keyword is a syntax error when inserting data. (Data Manipulation Errors)"
  },
  {
    id: "d5_post_05",
    type: "single",
    question: "Refer to the image. What is the runtime error in the query?",
    image: "sql_error_primary_key_duplicate.png",
    options: [
      "The primary key entry is being duplicated",
      "There are too many values being added at once",
      "The INSERT statement should be a SELECT statement",
      "The values are being added to the wrong database"
    ],
    correct: [0],
    explanation: "A duplicate primary key entry causes a runtime error when inserting data. (Data Manipulation Errors)"
  },
  {
    id: "d5_post_06",
    type: "single",
    question: "Refer to the image. What is the syntax error in the query?",
    image: "sql_error_trailing_comma.png",
    options: [
      "The Sales.Customer table is not the correct table",
      "The SELECT statement should be a SELECT INTO statement",
      "There is a comma after the first column listed in the query",
      "There is a comma after the last column listed in the query"
    ],
    correct: [3],
    explanation: "A trailing comma after the last column in a SELECT statement causes a syntax error. (Select Errors)"
  }
];