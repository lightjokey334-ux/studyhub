/* ===================================================================
   Domain 3 — Pre-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D3_PRE = [
  {
    id: "d3_pre_01",
    type: "single",
    question: "Where should a WHERE clause be used within the GROUP BY clause?",
    image: null,
    options: ["Before the GROUP BY clause", "After the GROUP BY clause", "With the GROUP BY clause", "The WHERE clause is not used with the GROUP BY clause"],
    correct: [0]
  },
  {
    id: "d3_pre_02",
    type: "multi",
    question: "When would one normally implement a full outer join? Choose two answers.",
    image: null,
    options: ["After combining two data sets into one", "Before combining two data sets into one", "Mismatched records from both tables in a join need to be visible", "Only matching records from both tables in a join need to be visible"],
    correct: [0, 2]
  },
  {
    id: "d3_pre_03",
    type: "single",
    question: "Which statement best defines an inner join?",
    image: null,
    options: ["A join in which records will only display if the value of the join field is in both tables", "A join in which records will be displayed from one table specified in the join field", "A join in which records are filtered from one table and displayed on the second table", "A join in which all records are displayed from one table, and only the value of the join field is displayed from the second table"],
    correct: [0]
  },
  {
    id: "d3_pre_04",
    type: "single",
    question: "The WHERE clause creates _______ on the data being queried.",
    image: null,
    options: ["tags", "notes", "filters", "lists"],
    correct: [2]
  },
  {
    id: "d3_pre_05",
    type: "single",
    question: "Which statement best defines a self join?",
    image: null,
    options: ["A join between two rows in the same table", "A join between two tables", "A join between two columns in the same table", "A join between two databases"],
    correct: [2]
  },
  {
    id: "d3_pre_06",
    type: "single",
    question: "Once a table alias is established, it has to be used throughout the _______.",
    image: null,
    options: ["row", "column", "query", "database"],
    correct: [2]
  },
  {
    id: "d3_pre_07",
    type: "single",
    question: "The percent symbol (%) is a _______ that allows any number of characters.",
    image: null,
    options: ["wildcard", "clause", "statement", "table"],
    correct: [0]
  },
  {
    id: "d3_pre_08",
    type: "single",
    question: "Rather than using a join, one may use a _______ to display fields from a corresponding table.",
    image: null,
    options: ["substitute query", "SELECT statement", "query", "subquery"],
    correct: [3]
  },
  {
    id: "d3_pre_09",
    type: "single",
    question: "What clause is used to sort information in a query?",
    image: null,
    options: ["SORT BY", "ORDER BY", "SORT", "ORDER FROM"],
    correct: [1]
  },
  {
    id: "d3_pre_10",
    type: "single",
    question: "Which comparison operator should one use to return records from before a given date?",
    image: null,
    options: [">", "<", ">=", "<="],
    correct: [1]
  }
];
