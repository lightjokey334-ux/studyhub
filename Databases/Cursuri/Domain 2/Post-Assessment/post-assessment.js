/* ===================================================================
   Domain 2 — Post-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D2_POST = [
  {
    id: "d2_post_01",
    type: "single",
    question: "To change a view, with what keyword should CREATE in the CREATE VIEW command be replaced?",
    image: null,
    options: ["UPDATE", "ALTER", "CHANGE", "REPLACE"],
    correct: [1],
    explanation: "To alter a view, replace CREATE with ALTER in the CREATE VIEW command. (Create, Alter, and Drop Views)"
  },
  {
    id: "d2_post_02",
    type: "single",
    question: "What is the only way to make changes to a table structure after a table has been created?",
    image: null,
    options: [
      "Use the UPDATE command to make changes to the table",
      "Make the changes, then run the CREATE command again",
      "Create a new table to replace the old one",
      "Use the ALTER command to make changes to the table"
    ],
    correct: [3],
    explanation: "After a table is created, the only way to change its structure is to use the ALTER command. (Work with Tables)"
  },
  {
    id: "d2_post_03",
    type: "multi",
    question: "Which three pieces of information should be specified when creating a table?",
    image: null,
    options: [
      "The name of the table",
      "The rows to add to the table",
      "The data types for each row within the table",
      "The columns to add to the table",
      "The data types for each column within the table"
    ],
    correct: [0, 3, 4],
    explanation: "When creating a table, you must specify the table name, the columns to add, and the data type for each column. (Work with Tables)"
  },
  {
    id: "d2_post_04",
    type: "single",
    question: "Which best defines the purpose of an index?",
    image: null,
    options: [
      "Helps speed up queries within a table as long as the indexes are created with strategic purpose",
      "Ensures that fewer people are needed to manage a database",
      "Creates new tables automatically",
      "Stores SQL code within a database so it can be quickly accessed when creating new tables"
    ],
    correct: [0],
    explanation: "Indexes help speed up queries within a table, as long as they are created with a strategic purpose. (Clustered Indexes)"
  },
  {
    id: "d2_post_05",
    type: "single",
    question: "How should one change a column from not allowing null values to allowing null values?",
    image: null,
    options: [
      "Create a new table with the CREATE command",
      "Create a new column with the CREATE command",
      "Alter the column with the ALTER command",
      "Restore the column to its default settings with the DEFAULT command"
    ],
    correct: [2],
    explanation: "To change a column to allow nulls, you use the ALTER TABLE ... ALTER COLUMN command. (NULL and NOT NULL)"
  },
  {
    id: "d2_post_06",
    type: "single",
    question: "By default, _______ values are allowed in columns when tables are created.",
    image: null,
    options: ["date", "decimal", "not null", "null"],
    correct: [3],
    explanation: "By default, NULL values are allowed in columns when tables are created. (NULL and NOT NULL)"
  },
  {
    id: "d2_post_07",
    type: "single",
    question: "Refer to the image. What will happen when this code is executed?",
    image: "sql_code.png",
    options: [
      "The entire code will run",
      "The code will not run due to an error in the syntax",
      "The first SELECT statement will not run",
      "The second SELECT statement will not run"
    ],
    correct: [3],
    explanation: "The second SELECT statement is commented out with two dashes (--), so it will not run. (Create, Alter, and Drop Views)"
  },
  {
    id: "d2_post_08",
    type: "single",
    question: "Which piece of information goes in parentheses when creating a nonclustered index in SQL?",
    image: null,
    options: [
      "The NON-CLUSTERED keyword",
      "The table on which the index is being created",
      "The columns being indexed",
      "The number of total columns"
    ],
    correct: [2],
    explanation: "When creating a nonclustered index, the column(s) being indexed go in parentheses. (Nonclustered Indexes)"
  },
  {
    id: "d2_post_09",
    type: "single",
    question: "What type of parameter is used in apps to return a value that the app will use later?",
    image: null,
    options: ["Boolean", "Number", "Input", "Output"],
    correct: [3],
    explanation: "Output parameters are used in apps to return a value that the app will use later. (Input and Output Parameters)"
  },
  {
    id: "d2_post_10",
    type: "truefalse",
    question: "The main purpose of a view is that it can accept parameters.",
    image: null,
    options: [],
    statements: ["The main purpose of a view is that it can accept parameters."],
    labels: ["True", "False"],
    correct: [false],
    explanation: "Views cannot accept parameters; they are saved queries without parameters. (Create, Alter, and Drop Views)"
  },
  {
    id: "d2_post_11",
    type: "single",
    question: "What function must be included in a stored procedure to see the results of a function that runs inside of the stored procedure?",
    image: null,
    options: ["RETURN", "REVIEW", "VIEW", "RESULT"],
    correct: [0],
    explanation: "To see the results from a query inside a stored procedure, you must include a RETURN function. (Return Values)"
  },
  {
    id: "d2_post_12",
    type: "single",
    question: "What is one main security benefit of stored procedures being used within app code?",
    image: null,
    options: [
      "A stored procedure hides SQL keywords from being exposed in app code",
      "A stored procedure accepts parameters",
      "A stored procedure allows for filtering of data",
      "A stored procedure has permissions"
    ],
    correct: [0],
    explanation: "One main security benefit is that stored procedures hide SQL code (and database objects) from being exposed in app code. (Return Values)"
  }
];