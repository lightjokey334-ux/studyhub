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
    correct: [1]
  },
  {
    id: "d5_post_02",
    type: "single",
    question: "Refer to the image. What type of error is shown in the query?",
    image: "sql_error_duplicate_column.png",
    options: ["Command error", "Syntax error", "Runtime error", "Operator error"],
    correct: [2]
  },
  {
    id: "d5_post_03",
    type: "single",
    question: "Refer to the image. What is the runtime error in the query?",
    image: "sql_error_invalid_object.png",
    options: ["The Sales.Customer table has not been created yet", "The query is being run against the wrong database", "There are too many columns from which data is being taken", "The wrong type of join is used"],
    correct: [0]
  },
  {
    id: "d5_post_04",
    type: "single",
    question: "Refer to the image. What is the syntax error in the query?",
    image: "sql_error_missing_values.png",
    options: ["The ADD keyword is missing", "The HAVING clause is missing", "The VALUES keyword is missing", "There should not be a comma after the first record that is being added"],
    correct: [2]
  },
  {
    id: "d5_post_05",
    type: "single",
    question: "Refer to the image. What is the runtime error in the query?",
    image: "sql_error_primary_key_duplicate.png",
    options: ["The primary key entry is being duplicated", "There are too many values being added at once", "The INSERT statement should be a SELECT statement", "The values are being added to the wrong database"],
    correct: [0]
  },
  {
    id: "d5_post_06",
    type: "single",
    question: "Refer to the image. What is the syntax error in the query?",
    image: "sql_error_trailing_comma.png",
    options: ["The Sales.Customer table is not the correct table", "The SELECT statement should be a SELECT INTO statement", "There is a comma after the first column listed in the query", "There is a comma after the last column listed in the query"],
    correct: [3]
  }
];