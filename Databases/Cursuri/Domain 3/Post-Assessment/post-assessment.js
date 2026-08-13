/* ===================================================================
   Domain 3 — Post-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D3_POST = [
  {
    id: "d3_post_01",
    type: "single",
    question: "Refer to the image. What will the results of this query show?",
    image: "sql_query_where_results.png",
    options: ["People living in Los Angeles with the last name Cox", "People living in Los Angeles with the last name Cox and people living in Long Beach with the last name Cox", "People living in Long Beach with the last name Cox and people living in Los Angeles", "People living in Los Angeles with the last name Cox and people living in Long Beach"],
    correct: [1]
  },
  {
    id: "d3_post_02",
    type: "single",
    question: "Refer to the image. What should the first line of the SELECT statement read to limit results to the first 100 records in the table?",
    image: "sql_select_limit_clause.png",
    options: ["SELECT FirstName, TOP 100", "TOP 100 SELECT FirstName,", "SELECT TOP 100 FirstName,", "SELECT FirstName TOP 100,"],
    correct: [2]
  },
  {
    id: "d3_post_03",
    type: "single",
    question: "What function can be added to a computed column to show the results as dollar amounts?",
    image: null,
    options: ["Currency function (cur)", "Decimal function (dec)", "Dollar function (dol)", "String function (str)"],
    correct: [3]
  },
  {
    id: "d3_post_04",
    type: "single",
    question: "What keyword or key phrase shows records with fields that are not empty?",
    image: null,
    options: ["OCCUPIED", "FULL", "NULL", "NOT NULL"],
    correct: [3]
  },
  {
    id: "d3_post_05",
    type: "single",
    question: "What keyword or key phrase shows records with empty fields?",
    image: null,
    options: ["VACANT", "EMPTY", "NULL", "NOT NULL"],
    correct: [2]
  },
  {
    id: "d3_post_06",
    type: "single",
    question: "Refer to the image. What will happen when this self join is executed?",
    image: "sql_self_join_employees.png",
    options: ["The result will display the employees with a manager but omit the employee without a manager", "The result will display all employees", "The result will display the employee without a manager but omit the employees with a manager", "An error will occur"],
    correct: [0]
  },
  {
    id: "d3_post_07",
    type: "single",
    question: "Which aggregate is used to show the lowest value in a numeric field within a group?",
    image: null,
    options: ["LOW", "MIN", "HIGH", "MAX"],
    correct: [1]
  },
  {
    id: "d3_post_08",
    type: "single",
    question: "What keyword or key phrase can be used with a WHERE clause to return records matching multiple criteria?",
    image: null,
    options: ["INCLUDE", "NOT IN", "IN", "ON"],
    correct: [2]
  },
  {
    id: "d3_post_09",
    type: "single",
    question: "Which comparison operator returns records on or after a given date?",
    image: null,
    options: [">", "<", ">=", "<="],
    correct: [2]
  },
  {
    id: "d3_post_10",
    type: "single",
    question: "What purpose does a DISTINCT keyword after a SELECT statement serve?",
    image: null,
    options: ["It distinguishes between two different types of tables", "It prevents duplicate tables from showing in a result", "It prevents duplicate rows from showing in a result", "It prevents duplicate columns from showing in a result"],
    correct: [2]
  },
  {
    id: "d3_post_11",
    type: "single",
    question: "Which comparison operator returns records on or before a given date?",
    image: null,
    options: [">", "<", ">=", "<="],
    correct: [3]
  },
  {
    id: "d3_post_12",
    type: "single",
    question: "What keyword can be used with a WHERE clause to filter information within a range?",
    image: null,
    options: ["FROM", "MIDDLE", "BETWEEN", "RANGE"],
    correct: [2]
  },
  {
    id: "d3_post_13",
    type: "single",
    question: "Which comparison operator returns records after a given date?",
    image: null,
    options: [">", "<", ">=", "<="],
    correct: [0]
  },
  {
    id: "d3_post_14",
    type: "single",
    question: "Which aggregate is used to show the number of records for each item in a group?",
    image: null,
    options: ["NUM", "COUNT", "TOTAL", "AVG"],
    correct: [1]
  },
  {
    id: "d3_post_15",
    type: "single",
    question: "A user wants to see all records from the Sales.Customer table and only records with an entry in the CustomerID column from the Sales.SalesOrderHeader table. The Sales.Customer table is listed first in the SQL Query Window. What type of join should the user implement?",
    image: null,
    options: ["Inner join", "Left outer join", "Right outer join", "Full outer join"],
    correct: [1]
  },
  {
    id: "d3_post_16",
    type: "single",
    question: "What keyword or key phrase is used to filter records from an aggregate?",
    image: null,
    options: ["FILTER", "AGG FILTER", "INCLUDING", "HAVING"],
    correct: [3]
  },
  {
    id: "d3_post_17",
    type: "single",
    question: "Refer to the image. A new column is being added to the table. What information will the new column show?",
    image: "sql_computed_column.png",
    options: ["The list price", "The list price with 10% taken off", "The list price with 90% taken off", "ProductID"],
    correct: [1]
  },
  {
    id: "d3_post_18",
    type: "single",
    question: "Which statement best defines a cartesian product, also known as a cross join?",
    image: null,
    options: ["No records from either table in a join are related to one another", "Specified records in one table are related to specified records in another", "Specified records in one table are related to every record in another", "Every record in one table is related to every record in another"],
    correct: [3]
  },
  {
    id: "d3_post_19",
    type: "single",
    question: "What keyword or key phrase can be used to return only records that do not match multiple criteria?",
    image: null,
    options: ["INCLUDE", "NOT IN", "IN", "ON"],
    correct: [1]
  },
  {
    id: "d3_post_20",
    type: "single",
    question: "What keyword can be used between two criteria when using a WHERE clause to narrow results further?",
    image: null,
    options: ["BUT", "NARROW", "RESTRICT", "AND"],
    correct: [3]
  },
  {
    id: "d3_post_21",
    type: "single",
    question: "What keyword should one use between two SELECT statements to show records that are alike in two tables?",
    image: null,
    options: ["UNION", "MATCH", "MERGE", "INTERSECT"],
    correct: [3]
  },
  {
    id: "d3_post_22",
    type: "single",
    question: "What clause is used for columns that are not being used in an aggregate?",
    image: null,
    options: ["GROUP BY", "COLLECT BY", "SUM", "EXCLUDE BY"],
    correct: [0]
  },
  {
    id: "d3_post_23",
    type: "single",
    question: "In a query involving a table, where does the WHERE clause belong?",
    image: null,
    options: ["Before the table", "After the table", "Within the table", "Outside the table"],
    correct: [1]
  },
  {
    id: "d3_post_24",
    type: "single",
    question: "Which aggregate is used to show the average of a numerical field?",
    image: null,
    options: ["MID", "MEAN", "AVG", "AVE"],
    correct: [2]
  },
  {
    id: "d3_post_25",
    type: "single",
    question: "What keyword shows all records with at least one match in a subquery?",
    image: null,
    options: ["ANY", "ALL", "FULL", "SUB"],
    correct: [0]
  },
  {
    id: "d3_post_26",
    type: "single",
    question: "Which aggregate is used to show the highest value in a numeric field within a group?",
    image: null,
    options: ["LOW", "MIN", "HIGH", "MAX"],
    correct: [3]
  },
  {
    id: "d3_post_27",
    type: "single",
    question: "What letters can be added to the end of a column to show the column in reverse order?",
    image: null,
    options: ["DESC", "REV", "BACK", "DOWN"],
    correct: [0]
  },
  {
    id: "d3_post_28",
    type: "single",
    question: "Which aggregate totals the values of a field?",
    image: null,
    options: ["GROUP BY", "ADD", "SUM", "TOTAL"],
    correct: [2]
  },
  {
    id: "d3_post_29",
    type: "single",
    question: "Refer to the image. What is the column alias?",
    image: "sql_column_alias.png",
    options: ["Sales.SalesOrderHeader", "Order Number", "LineTotal", "Sales.SalesOrderDetail"],
    correct: [1]
  },
  {
    id: "d3_post_30",
    type: "single",
    question: "What keyword should one use between two SELECT statements to combine two datasets into one?",
    image: null,
    options: ["UNION", "MATCH", "MERGE", "INTERSECT"],
    correct: [0]
  },
  {
    id: "d3_post_31",
    type: "single",
    question: "Refer to the image. Which WHERE clause will show every person except for those living in Los Angeles in the results?",
    image: "sql_not_equal_where.png",
    options: ["WHERE NOT City = 'Los Angeles'", "NOT WHERE City = 'Los Angeles'", "WHERE City = NOT 'Los Angeles'", "WHERE City = 'NOT Los Angeles'"],
    correct: [0]
  },
  {
    id: "d3_post_32",
    type: "single",
    question: "Refer to the image. What type of join is shown?",
    image: "sql_inner_join_example.png",
    options: ["Inner join", "Left outer join", "Right outer join", "Full outer join"],
    correct: [0]
  },
  {
    id: "d3_post_33",
    type: "single",
    question: "What keyword shows every record that matches the same criteria?",
    image: null,
    options: ["ANY", "ALL", "FULL", "SAME"],
    correct: [1]
  },
  {
    id: "d3_post_34",
    type: "single",
    question: "What clause should be used to get an approximate match to a search rather than an exact match?",
    image: null,
    options: ["APPROXIMATE clause", "SIMILAR clause", "RELEVANT clause", "LIKE clause"],
    correct: [3]
  }
];
