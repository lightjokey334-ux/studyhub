/* ===================================================================
   Domain 2 — Pre-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D2_PRE = [
  {
    id: "d2_pre_01",
    type: "single",
    question: "While a clustered index is based on a ______, a nonclustered index can be based on any other field.",
    image: null,
    options: [
      "foreign key field",
      "primary key field",
      "column",
      "row"
    ],
    correct: [1],
    explanation: "A clustered index is based on a primary key field, while a nonclustered index can be based on any other field. (Clustered Indexes)"
  },
  {
    id: "d2_pre_02",
    type: "single",
    question: "Which statement best defines a view?",
    image: null,
    options: [
      "A stored statement that leads one to specific information",
      "A location within a database that stores specific information",
      "A stored statement that leads one to general information",
      "A location within a database that stores general information"
    ],
    correct: [0],
    explanation: "A view is a saved query that leads to getting specific information; it does not store data itself. (Create, Alter, and Drop Views)"
  },
  {
    id: "d2_pre_03",
    type: "single",
    question: "What type of parameter must be specified when creating a stored procedure?",
    image: null,
    options: [
      "Boolean",
      "Number",
      "Input",
      "Output"
    ],
    correct: [3],
    explanation: "Output parameters must be explicitly specified (using the OUTPUT keyword) when creating a stored procedure. (Input and Output Parameters)"
  },
  {
    id: "d2_pre_04",
    type: "single",
    question: "What is not allowed in object names in SQL?",
    image: null,
    options: [
      "Symbols",
      "Numbers",
      "Spaces",
      "Special characters"
    ],
    correct: [2],
    explanation: "Spaces are not allowed in object names in SQL unless the object name is enclosed in square brackets. (Work with Tables)"
  },
  {
    id: "d2_pre_05",
    type: "single",
    question: "Which command removes a table from a database?",
    image: null,
    options: [
      "CLEAR TABLE",
      "DROP TABLE",
      "ELIMINATE TABLE",
      "DELETE TABLE"
    ],
    correct: [1],
    explanation: "The DROP TABLE command removes a table from a database. (Work with Tables)"
  }
];