/* ===================================================================
   Examen 2 — Databases
   Completează array-ul de mai jos cu întrebările testului (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext"
   =================================================================== */

var EXAM_TITLE = "Databases — Examen 2";
var EXAM_ID = "Databases_exam2"; // folosit pentru istoricul de progres
var EXAM_RANDOMIZE = false; // pune true dacă vrei amestecarea întrebărilor pentru acest test

var EXAM_QUESTIONS = [
  {
    id: "ex2_01",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true or No if the statement is false.",
    image: null,
    options: [],
    statements: [
      "The ALTER TABLE command can add a new column.",
      "The ALTER TABLE command can change the IDENTITY specification of an existing column.",
      "The ALTER TABLE command can drop multiple columns from a table.",
      "The ALTER TABLE command can modify the data type of an existing column."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true, true],
    sourceImage: "screenshot_0001"
  },
  {
    id: "ex2_02",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct. <br><br><u>MINUS</u> is a reserved keyword in SQL Server 2008 and therefore cannot be used as an object name or as a column name in a table, unless delimited.",
    image: null,
    options: ["ADD", "No change is needed", "PLUS", "SUBTRACT"],
    correct: [0],
    sourceImage: "screenshot_0002"
  },
  {
    id: "ex2_03",
    type: "dropdown",
    question: "Use the dropdown menus to select the answer choice that completes each statement. Use the image below as reference.",
    image: "er-diagram.png",
    options: [
      ["Choose One...", "many-to-many", "one-to-many", "one-to-one"],
      ["Choose One...", "foreign key", "index", "primary key", "union"],
      ["Choose One...", "Entity-relationship", "Entity-entity", "Schema"]
    ],
    statements: [
      "The relationship between the Transaction and Customer tables is a ________ relationship.",
      "AccountID on the Transaction table is a ________.",
      "The diagram being shown is a ________ diagram."
    ],
    correct: ["many-to-many", "foreign key", "Entity-relationship"],
    sourceImage: "screenshot_0003"
  },
  {
    id: "ex2_04",
    type: "single",
    question: "The first normal form requires that the database exclude which one of the following?",
    image: null,
    options: ["composite keys", "duplicate rows", "foreign keys", "repeating groups"],
    correct: [3],
    sourceImage: "screenshot_0004"
  },
  {
    id: "ex2_05",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct. A table is often implemented as an array of records, a linked list, or several arrays of different data types, all using a common <u>columns</u>.",
    image: null,
    options: ["indexing scheme", "No change is needed", "rows", "SQL statements"],
    correct: [0],
    sourceImage: "screenshot_0005"
  },
  {
    id: "ex2_06",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is not.",
    image: null,
    options: [],
    statements: [
      "Char(size) holds a fixed-length string.",
      "Text holds a fixed-length string.",
      "Varchar(size) can hold a string of differing lengths."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true],
    sourceImage: "screenshot_0006"
  },
  {
    id: "ex2_07",
    type: "single",
    question: "A view named potential_customers is no longer needed in a database named WaterWorks. Which SQL statement will remove the view from the database without removing any of the underlying data the view shows?",
    image: null,
    options: ["DELETE VIEW potential_customers", "DELETE potential_customers", "DROP potential_customers", "DROP VIEW potential_customers"],
    correct: [3],
    sourceImage: "screenshot_0007"
  },
  {
    id: "ex2_08",
    type: "dropdown",
    question: "Refer to the image below. Use the dropdown menus to select the answer choice that completes each statement.",
    image: "b-tree-index.png",
    options: [
      ["Choose One...", "B-tree index", "Hash index", "Heap"],
      ["Choose One...", "indexed", "linked", "unsorted"]
    ],
    statements: [
      "1. The diagram is an example of a ________.",
      "2. Pages and rows are ________."
    ],
    correct: ["B-tree index", "linked"],
    sourceImage: "screenshot_0008"
  },
  {
    id: "ex2_09",
    type: "single",
    question: "Which of the following could not be used as a primary key?",
    image: null,
    options: ["A table containing only one FOREIGN key", "Employee Number", "Serial number for an electronic component", "Social Security Number"],
    correct: [0],
    sourceImage: "screenshot_0009"
  },
  {
    id: "ex2_10",
    type: "single",
    question: "An analyst needs to know the highest amount of sales in a list of daily sales amounts. Which keyword should the analyst use to obtain that amount?",
    image: null,
    options: ["MAX", "HIGH", "MOST", "VALUES"],
    correct: [0],
    sourceImage: "screenshot_0010"
  },
  {
    id: "ex2_11",
    type: "dropdown",
    question: "An attack on your company server is being made using the following image:<br><br><code>......<br>COOKIE<br>COOKIE1982<br>COOKIE293C<br>COOKIE361<br>COOKIE75<br>COOKIEDOUGH<br>COOKIEMONSTER<br>COOKIES<br>COOKINGFRUITS<br>COOLBOY<br>COOLBOY123<br>COOLCLOWN8<br>COOLCOOL<br>COOLDOOL<br>COOLER<br>COOLGIRL<br>COOLGUYS33<br>COOL_13<br>......</code><br><br>Use the dropdown menus to complete each statement.",
    image: null,
    options: [
      ["Choose One...", "brute-force", "dictionary", "password cracking"],
      ["Choose One...", "account lockout", "multi-factor authentication", "password complexity"]
    ],
    statements: [
      "This is an example of a ________ attack.",
      "To prevent this type of attack from being successful, you should enable ________."
    ],
    correct: ["dictionary", "account lockout"],
    sourceImage: "screenshot_0011"
  },
  {
    id: "ex2_12",
    type: "single",
    question: "Consider a query of two tables. The result contains only the rows that have a match in both tables. What kind of Join was used?",
    image: null,
    options: ["Full Outer Join", "Inner Join", "Left Outer Join", "Right Outer Join"],
    correct: [1],
    sourceImage: "screenshot_0012"
  },
  {
    id: "ex2_13",
    type: "single",
    question: "How many levels of normal forms are there?",
    image: null,
    options: ["11", "3", "5", "7"],
    correct: [2],
    sourceImage: "screenshot_0013"
  },
  {
    id: "ex2_14",
    type: "single",
    question: "What will be the result of the following statement?<br><br><code>SELECT REPLACE('The best TTS solutions is provided by GMetrix', 's', 'z')</code>",
    image: null,
    options: ["The bestt TTSz szolutionsz isz provided by GMetrix", "A SQL Server Orthographic error", "The bezt TTz zolutzionz iz provided by GMetrix", "None of the above"],
    correct: [2],
    sourceImage: "screenshot_0014"
  },
  {
    id: "ex2_15",
    type: "multi",
    question: "Which three are T-SQL commands to handle privileges? (Choose three)",
    image: null,
    options: ["Deny", "Grant", "Permit", "Recind", "Refuse", "Revoke"],
    correct: [0, 1, 5],
    sourceImage: "screenshot_0015"
  },
  {
    id: "ex2_16",
    type: "truefalse",
    question: "Evaluate each SQL statement. Select Yes if the statement has a syntax error in it and No if there is no syntax error within the statement.",
    image: null,
    options: [],
    statements: [
      "SELECT * INTO Customers FROM CustomersNew",
      "INSERT * INTO Customers FROM CustomersNew",
      "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName from CustomersNew"
    ],
    labels: ["Yes", "No"],
    correct: [false, true, false],
    sourceImage: "screenshot_0016"
  },
  {
    id: "ex2_17",
    type: "single",
    question: "Which Transact-SQL command removes a table from the database?",
    image: null,
    options: ["DELETE TABLE", "DROP TABLE", "ERASE TABLE", "REMOVE TABLE"],
    correct: [1],
    sourceImage: "screenshot_0017"
  },
  {
    id: "ex2_18",
    type: "single",
    question: "Which of the following fixed server roles can shut down the SQL Server?",
    image: null,
    options: ["processadmin", "securityadmin", "serveradmin", "setupadmin"],
    correct: [2],
    sourceImage: "screenshot_0018"
  },
  {
    id: "ex2_19",
    type: "truefalse",
    question: "For each of the following statements regarding the use and purpose of views, select Yes if the statement is true and No if it is false.",
    image: null,
    options: [],
    statements: [
      "Views can help limit what people can see within a database.",
      "Views can be created from multiple tables.",
      "Views can be altered using an ADD COLUMN clause.",
      "Views can temporarily store copies of data from tables."
    ],
    labels: ["Yes", "No"],
    correct: [true, true, false, false],
    sourceImage: "screenshot_0019"
  },
  {
    id: "ex2_20",
    type: "dropdown",
    question: "A new database administrator wants to test a backup and restore for the sales database on a SQL server. Using the dropdown arrows, choose the correct code for both a full backup of the database to the backups folder on the E: drive, naming the backup sales.bak, and a restore of the database.",
    image: null,
    options: [
      ["Choose One...", "BACKUP DATABASE sales TO 'E:\\backups\\sales.bak'", "CREATE BACKUP TO DISK = 'E:\\backups\\sales.bak' FROM SALES", "BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'"],
      ["Choose One...", "CREATE RESTORE sales FROM 'E:\\backups\\sales.bak'", "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'", "RESTORE DATABASE sales FROM 'E:\\backups\\sales.bak'"]
    ],
    statements: [
      "What is the correct statement for backing up the database?",
      "What is the correct statement for restoring the database?"
    ],
    correct: ["BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'", "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'"],
    sourceImage: "screenshot_0020"
  },
  {
    id: "ex2_21",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct. <u>UPS</u> is the best method to prevent the loss of data.",
    image: null,
    options: ["Backup", "No change is needed", "RAID", "Redundant NICs"],
    correct: [0],
    sourceImage: "screenshot_0021"
  },
  {
    id: "ex2_22",
    type: "dropdown",
    question: "Use the dropdown menus to select the answer choice that completes each statement. Use the image below as reference.",
    image: "er-diagram.png",
    options: [
      ["Choose One...", "many-to-many", "one-to-many", "one-to-one"],
      ["Choose One...", "foreign key", "index", "primary key", "union"],
      ["Choose One...", "Entity-relationship", "Entity-entity", "Schema"]
    ],
    statements: [
      "The relationship between the Transaction and Customer tables is a ________ relationship.",
      "AccountID on the Transaction table is a ________.",
      "The diagram being shown is a ________ diagram."
    ],
    correct: ["many-to-many", "foreign key", "Entity-relationship"],
    sourceImage: "screenshot_0022"
  },
  {
    id: "ex2_23",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct. <u>Bulkadmin</u> can perform bulk insert operations.",
    image: null,
    options: ["Diskadmin", "Dbcreator", "No change is needed", "Setupadmin"],
    correct: [2],
    sourceImage: "screenshot_0023"
  },
  {
    id: "ex2_24",
    type: "dropdown",
    question: "Use the dropdown menus to select the answer choice that completes each statement. Use the image below as reference.",
    image: "er-diagram.png",
    options: [
      ["Choose One...", "many-to-many", "one-to-many", "one-to-one"],
      ["Choose One...", "foreign key", "index", "primary key", "union"],
      ["Choose One...", "Entity-relationship", "Entity-entity", "Schema"]
    ],
    statements: [
      "The relationship between the Transaction and Customer tables is a ________ relationship.",
      "AccountID on the Transaction table is a ________.",
      "The diagram being shown is a ________ diagram."
    ],
    correct: ["many-to-many", "foreign key", "Entity-relationship"],
    sourceImage: "screenshot_0024"
  },
  {
    id: "ex2_25",
    type: "single",
    question: "Which Transact-SQL command removes all rows from a table without logging the individual row deletions?",
    image: null,
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
    correct: [3],
    sourceImage: "screenshot_0025"
  },
  {
    id: "ex2_26",
    type: "single",
    question: "What is collation?",
    image: null,
    options: ["It is a concept in SQL Server by which we can add other SQL Server to a group and query both the SQL Servers dbs using T-SQL statements.", "It is a data design and organization process applied to data structures, based on rules that help build relational databases.", "It means that the data in the db is organized so that all the data elements relating to the same real-world event or object are linked together.", "It refers to a set of rules that determine how data is sorted and compared."],
    correct: [3],
    sourceImage: "screenshot_0026"
  },
  {
    id: "ex2_27",
    type: "dragtext",
    question: "A quality control specialist wants to see an orderID after inputting an orderdetailID. Using drag and drop, create the stored procedure necessary to fulfill this request. Not every step will be used.",
    image: null,
    options: [
      "@orderdetailID int, @orderID int OUTPUT",
      "WHERE orderdetailid = @orderdetailid",
      "AS BEGIN",
      "CREATE PROCEDURE uspGetOrderID",
      "SELECT @orderid = orderid from orderdetails",
      "END",
      "RETURN @orderID"
    ],
    correct: ["CREATE PROCEDURE uspGetOrderID", "@orderdetailID int, @orderID int OUTPUT", "AS BEGIN", "SELECT @orderid = orderid from orderdetails", "WHERE orderdetailid = @orderdetailid", "END"],
    sourceImage: "screenshot_0027"
  },
  {
    id: "ex2_28",
    type: "dropdown",
    question: "Refer to the table below to evaluate the statements. Use the dropdown menus to select the answer choice that completes each statement.<table><tr><th>Student ID</th><th>Lastname</th><th>Firstname</th><th>Address</th><th>City</th><th>State</th><th>Postal Code</th></tr><tr><td>Char(7)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(2)</td><td>Vchar(10)</td></tr></table>",
    image: null,
    options: [
      ["Choose One...", "Address", "Lastname", "Student ID"],
      ["Choose One...", "12345abc", "1234567", "1234567890"]
    ],
    statements: [
      "The primary key in this table should be ________",
      "The best example of valid data for the first field would be ________"
    ],
    correct: ["Student ID", "1234567"],
    sourceImage: "screenshot_0028"
  },
  {
    id: "ex2_29",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
    image: null,
    options: [],
    statements: [
      "Membership in a Windows user group can identify a user's Server Level security.",
      "Root login can identify a user's Server Level security.",
      "SQL Server Login can identify a user's Server Level security.",
      "Windows login can identify a user's Server Level security."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true, true],
    sourceImage: "screenshot_0029"
  },
  {
    id: "ex2_30",
    type: "dropdown",
    question: "Refer to the table below to evaluate the statements. Use the dropdown menus to select the answer choice that completes each statement.<table><tr><th>Student ID</th><th>Lastname</th><th>Firstname</th><th>Address</th><th>City</th><th>State</th><th>Postal Code</th></tr><tr><td>Char(7)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(20)</td><td>Vchar(2)</td><td>Vchar(10)</td></tr></table>",
    image: null,
    options: [
      ["Choose One...", "Address", "Lastname", "Student ID"],
      ["Choose One...", "12345abc", "1234567", "1234567890"]
    ],
    statements: [
      "The primary key in this table should be ________",
      "The best example of valid data for the first field would be ________"
    ],
    correct: ["Student ID", "1234567"],
    sourceImage: "screenshot_0030"
  },
  {
    id: "ex2_31",
    type: "single",
    question: "Which of the following range conditions would generate a syntax error?",
    image: null,
    options: ["salary <= 50000 AND salary >= 10000", "salary >= 10000 AND salary <= 50000", "salary between (10000 AND 50000) AND (60000 and 90000)", "salary BETWEEN 10000 AND 50000"],
    correct: [2],
    sourceImage: "screenshot_0031"
  },
  {
    id: "ex2_32",
    type: "single",
    question: "________ removes a SQL Server login account.",
    image: null,
    options: ["Delete Login", "Delete User", "Drop Login", "Drop User"],
    correct: [2],
    sourceImage: "screenshot_0032"
  },
  {
    id: "ex2_33",
    type: "single",
    question: "You have a column that will only contain values from 0 to 1024. What is the most economical data type to use for the column?",
    image: null,
    options: ["DECIMAL(3)", "INT", "SMALLINT", "TINYINT"],
    correct: [2],
    sourceImage: "screenshot_0033"
  },
  {
    id: "ex2_34",
    type: "single",
    question: "A sales manager wants to see a list of customers that are not in Los Angeles nor the states of Washington and Oregon. Which SQL statement fulfills this request?",
    image: null,
    options: [
      "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE city <> 'Los Angeles' AND state NOT IN ('Oregon', 'Washington')</code>",
      "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE city <> 'Los Angeles' AND state <> ('Oregon', 'Washington')</code>",
      "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE city != 'Los Angeles' AND state NOT IN ('Oregon', 'Washington')</code>",
      "<code>SELECT lastname, firstname<br>FROM customers<br>WHERE city != 'Los Angeles' AND state != ('Oregon', 'Washington')</code>"
    ],
    correct: [0],
    sourceImage: "screenshot_0034"
  },
  {
    id: "ex2_35",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct. A(n) <u>index</u> can restrict a user to specific rows or specific columns in a table.",
    image: null,
    options: ["No change is needed", "Primary key", "Relationship", "View"],
    correct: [3],
    sourceImage: "screenshot_0035"
  },
  {
    id: "ex2_36",
    type: "single",
    question: "What is the statement to use to suppress the '(1 row(s) affected)' after executing query statements?",
    image: null,
    options: ["SET NO COUNT", "SET NO COUNTING", "SET NO COUNTING ON", "SET NOCOUNT ON"],
    correct: [3],
    sourceImage: "screenshot_0036"
  },
  {
    id: "ex2_37",
    type: "single",
    question: "In an RDMS, a group of rows and columns is called a what?",
    image: null,
    options: ["Field", "Relation", "Table", "Variable"],
    correct: [2],
    sourceImage: "screenshot_0037"
  },
  {
    id: "ex2_38",
    type: "single",
    question: "SQL code injection is ________",
    image: null,
    options: ["A technique that exploits security vulnerabilities in the db layer of an application.", "An insert statement.", "The execution of a store procedure.", "The use of SQL statements in high level languages."],
    correct: [0],
    sourceImage: "screenshot_0038"
  },
  {
    id: "ex2_39",
    type: "single",
    question: "Evaluate the following SQL Statement:<br><br><code>DELETE view UtahCustomers;</code><br><br>A developer runs the statement and gets an error message that this is unable to be deleted. What is the most likely cause of the error?",
    image: null,
    options: ["The DROP keyword should be used instead of DELETE.", "The TRUNCATE keyword should be used instead of DELETE.", "The REVOKE keyword should be used instead of DELETE.", "The developer has insufficient permissions to delete the view."],
    correct: [0],
    sourceImage: "screenshot_0039"
  },
  {
    id: "ex2_40",
    type: "match",
    question: "Match the description to the database normal form. Instructions: To answer, drag the appropriate description from the column on the left to the database normal form on the right. Each description may be used once, more than once, or not at all.",
    image: null,
    pairs: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Fourth Normal Form (4NF)", "Fifth Normal Form (5NF)"],
    options: ["Table has no repeating groups", "Every non-trivial join dependency in the table is implied by the superkeys of the table", "Every non-trivial multivalued dependency in the table is a dependency on a superkey", "No non-prime attribute in the table is functionally dependent on a proper subset of a candidate key", "Every non-prime attribute is non-transitively dependent on every candidate key in the table"],
    correct: ["Table has no repeating groups", "No non-prime attribute in the table is functionally dependent on a proper subset of a candidate key", "Every non-prime attribute is non-transitively dependent on every candidate key in the table", "Every non-trivial multivalued dependency in the table is a dependency on a superkey", "Every non-trivial join dependency in the table is implied by the superkeys of the table"],
    sourceImage: "screenshot_0040"
  },
  {
    id: "ex2_41",
    type: "single",
    question: "Which is a major difference between a stored procedure and a function?",
    image: null,
    options: ["A Function can have both input/output parameters, but a Stored Procedure can only have input parameters.", "A Stored Procedure must be compiled every time it is called.", "A Function must be compiled every time it is called.", "Functions cannot be called from a Stored Procedure, but a Stored Procedure can be called from a Function."],
    correct: [0],
    sourceImage: "screenshot_0041"
  },
  {
    id: "ex2_42",
    type: "single",
    question: "A database designer wants to ensure that locations in a sales territory table exist in a related locations table. The designer writes the following SQL statement to adjust the sales territory table:<br><br><code>ALTER TABLE salesterritory<br>ADD CONSTRAINT fk_location<br>FOREIGN KEY (locationID) REFERENCES locations(locationID)</code><br><br>What is being enforced using this SQL statement?",
    image: null,
    options: ["Primary key", "Foreign key", "Referential integrity", "Compound key"],
    correct: [2],
    sourceImage: "screenshot_0042"
  },
  {
    id: "ex2_43",
    type: "single",
    question: "The WHERE clause allows you to ________.",
    image: null,
    options: ["Obtain a subset of rows.", "Order a subset of rows.", "Update the values inside a record or groups of records.", "View a subset of columns."],
    correct: [0],
    sourceImage: "screenshot_0043"
  }
];