/* ===================================================================
   Domain 1 — Pre-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D1_PRE = [
  {
    id: "d1_pre_01",
    type: "single",
    question: "What is a characteristic of one-to-one relationships?",
    image: null,
    options: [
      "They use non-primary keys from twos tables",
      "They use primary keys from two tables",
      "They use a primary key in one table and a non-primary key in another table",
      "They use primary keys from three tables"
    ],
    correct: [1]
  },
  {
    id: "d1_pre_02",
    type: "multi",
    question: "Which two data field types are text fields?",
    image: null,
    options: ["Varchar", "Int", "Nvarchar", "Money"],
    correct: [0, 2]
  },
  {
    id: "d1_pre_03",
    type: "single",
    question: "What is a primary key field?",
    image: null,
    options: [
      "A field that ensures every record in a table is the same",
      "A field that ensures every record in a table is unique",
      "A field that is unable to be altered",
      "A field that can only be altered by one person with specific credentials"
    ],
    correct: [1]
  },
  {
    id: "d1_pre_04",
    type: "single",
    question: "Which statement best defines normalization?",
    image: null,
    options: [
      "The process of creating primary keys",
      "The process of ensuring that all entities in a database have at least one primary key and one composite key",
      "The process of ensuring that all entities in a database has a solid design and that the data in the entity can work well with other entities",
      "The process of ensuring that all entities in a database have at least one primary key and one composite key"
    ],
    correct: [2]
  },
  {
    id: "d1_pre_05",
    type: "multi",
    question: "Which two statements about a smalldatetime field are true?",
    image: null,
    options: [
      "Has a date range from 1753 to 9999",
      "Has a date range from 1900 to 2079",
      "Time can be calculated to the second but no further",
      "Time can be calculated to 1/1000 of a second"
    ],
    correct: [1, 2]
  },
  {
    id: "d1_pre_06",
    type: "single",
    question: "In the database design and building process, when should an entity-relationship diagram (ERD) be created?",
    image: null,
    options: [
      "Before a database is built",
      "When a database is being built",
      "After a database has been built",
      "After a database has been in use for a significant period of time"
    ],
    correct: [0]
  },
  {
    id: "d1_pre_07",
    type: "single",
    question: "It is important to make sure a database is backed up regularly so that the data can be ______ if it is accidentally deleted or changed.",
    image: null,
    options: ["debugged", "replaced", "remade", "restored"],
    correct: [3]
  },
  {
    id: "d1_pre_08",
    type: "single",
    question: "What ensures that orphaned records do not occur?",
    image: null,
    options: ["Primary keys", "Composite keys", "Referential integrity", "Entity-relationship diagrams (ERDs)"],
    correct: [2]
  },
  {
    id: "d1_pre_09",
    type: "single",
    question: "Which data field type would be used to store a value of 0 or 1?",
    image: null,
    options: ["Varchar", "Bit", "Datetime", "Date"],
    correct: [1]
  },
  {
    id: "d1_pre_10",
    type: "single",
    question: "Within a database, what is data stored in?",
    image: null,
    options: ["Rows", "Columns", "Entities", "Graphs"],
    correct: [0]
  }
];