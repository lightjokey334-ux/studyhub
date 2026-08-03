/* ===================================================================
   Examen 1 — Databases
   Completează array-ul de mai jos cu întrebările testului (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext"
   =================================================================== */

var EXAM_TITLE = "Databases — Examen 1";
var EXAM_ID = "Databases_exam1"; // folosit pentru istoricul de progres

var EXAM_QUESTIONS = [
  {
    id: "ex1_01",
    type: "dropdown",
    question: "A database administrator needs to give the following permissions on the following objects: Execute permissions on the sp_current_sales stored procedure to the inside_sales group. The ability to run the vw_sales_today view to the sales_manager role and allow the manager to allow others to see the view as well. Using the dropdown lists, choose the correct syntax for each statement.",
    statements: [
      "What statement gives the inside_sales team the ability to execute the sp_current_sales stored procedure?",
      "Which statement allows the sales_manager role to run the vw_sales_today view and allow the manager to give others the same permission?"
    ],
    options: [
      ["Choose One...", "GRANT EXECUTE ON sp_current_sales TO inside_sales", "GRANT EXECUTE ON sp_current_sales TO GROUP inside_sales", "GRANT EXECUTE ON sp_current_sales TO inside_sales WITH GRANT OPTION"],
      ["Choose One...", "GRANT SELECT ON vw_sales_today TO sales_manager WITH GRANT OPTION", "GRANT SELECT ON vw_sales_today TO ROLE sales_manager WITH GRANT OPTION", "GRANT OPTION SELECT ON vw_sales_today TO sales_manager"]
    ],
    correct: ["GRANT EXECUTE ON sp_current_sales TO inside_sales", "GRANT SELECT ON vw_sales_today TO sales_manager WITH GRANT OPTION"],
    image: null,
    pairs: [],
    labels: []
  },
  {
    id: "ex1_02",
    type: "single",
    question: "Analyze the following statement: SELECT COUNT(*) from employees What will display for results from that statement?",
    options: ["The number of columns in the employees table.", "All the records of the table employees.", "All the records that contains the character *.", "The number of records in the employees table."],
    correct: [3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_03",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is not.",
    statements: ["Char(size) holds a fixed-length string.", "text holds a fixed-length string.", "Varchar(size) can hold a string of differing lengths."],
    correct: [true, false, true],
    labels: ["Yes", "No"],
    options: [],
    image: null,
    pairs: []
  },
  {
    id: "ex1_04",
    type: "match",
    question: "You want to create a phone directory for your organization using a database table. Each record must be uniquely identified with a numeric value. The phone directory will contain the following information for each member: First name Last name Date of birth Phone number Photo How should the SQL query be ordered to create the table? Match the Structured Query Language (SQL) statements to the SQL query. To answer, drag the appropriate SQL statement from the column on the left to its place in the SQL query on the right. Each data type may be used once, more than once, or not at all.",
    pairs: ["[Id]", "[LastName]", "[DateOfBirth]", "[Photo]"],
    options: ["INT NOT NULL FOREIGN KEY", "DATE NULL", "INT NOT NULL PRIMARY KEY", "TIMESTAMP NULL", "IMAGE NULL", "NCHAR(255) NULL"],
    correct: ["INT NOT NULL PRIMARY KEY", "NCHAR(255) NULL", "DATE NULL", "IMAGE NULL"],
    image: null,
    statements: [],
    labels: []
  },
  {
    id: "ex1_05",
    type: "single",
    question: "A junior administrator discovers the roles area on a SQL server and wants to know what the roles represent. What is the main purpose of roles in a database?",
    options: ["Roles are keywords, such as GRANT or REVOKE.", "Roles are objects within a database.", "Roles contain sets of permissions that can be granted to users and groups in a database.", "Roles are states of a database."],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_06",
    type: "single",
    question: "A view named potential_customers is no longer needed in a database named WaterWorks. Which SQL statement will remove the view from the database without removing any of the underlying data the view shows?",
    options: ["DELETE VIEW potential_customers", "DELETE potential_customers", "DROP potential_customers", "DROP VIEW potential_customers"],
    correct: [3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_07",
    type: "dropdown",
    question: "Use the dropdown arrows to choose whether each index characteristic is part of a clustered index or a non-clustered index.",
    statements: ["This type of index sorts data on the column with a clustered index.", "The type of index stored data in a separate structure from the table being indexed."],
    options: [["Choose One...", "Clustered", "Non-Clustered"], ["Choose One...", "Clustered", "Non-Clustered"]],
    correct: ["Clustered", "Non-Clustered"],
    image: null,
    pairs: [],
    labels: []
  },
  {
    id: "ex1_08",
    type: "single",
    question: "A sales manager wants to see all customers with sales of at least 50000 who either reside in Los Angeles, California, or in the states of Nevada or Arizona. Which SQL statement will satisfy the request?",
    options: [
      "SELECT lastname, firstname FROM customers WHERE sales >= 50000 AND ((city='Los Angeles' AND state='California') OR state IN ('Nevada','Arizona'))",
      "SELECT lastname, firstname FROM customers WHERE sales >= 50000 AND (city='Los Angeles' AND state='California') OR state IN ('Nevada','Arizona')",
      "SELECT lastname, firstname FROM customers WHERE sales >= 50000 OR ((city='Los Angeles' AND state='California') OR state IN ('Nevada','Arizona'))",
      "SELECT lastname, firstname FROM customers WHERE sales >= 50000 OR ((city='Los Angeles' AND state='California') AND state IN ('Nevada','Arizona'))"
    ],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_09",
    type: "dragtext",
    question: "You need to create a query that will display all records from the clients table that have the state New Mexico and the city of Roswell. To answer, drag the appropriate SQL statement from the column on the left to its place in the SQL query on the right. SELECT * {{1}} {{2}} {{3}}",
    options: ["SELECT *", "FROM", "SELECT ALL", "FROM clients", "SELECT FROM CLIENTS", "WHERE state = 'New Mexico' OR city= 'Roswell'"],
    correct: ["SELECT *", "FROM clients", "WHERE state = 'New Mexico' OR city= 'Roswell'"],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_10",
    type: "single",
    question: "The alpha team no longer needs permissions to update the employees table in a database. Which SQL statement will remove those permissions?",
    options: ["REVOKE UPDATE ON OBJECT :: employees FROM alpha", "DELETE UPDATE ON OBJECT :: employees FROM alpha", "REVOKE UPDATE FROM USER: alpha ON employees", "DELETE UPDATE FROM USER :: alpha ON employees"],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_11",
    type: "single",
    question: "A flower shop wants to see every flower ordered, but each flower should only show once. Which SQL statement will fulfill that need?",
    options: ["SELECT flowername FROM flowers DISTINCT", "SELECT UNIQUE flowername FROM flowers", "SELECT TOP 1 flowername FROM flowers", "SELECT DISTINCT flowername FROM flowers"],
    correct: [3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_12",
    type: "single",
    question: "Evaluate the following SQL statement: UPDATE Customers SET Status = 'Gold' IF TotalAmount > 10000 What would cause a runtime error in this statement?",
    options: ["The IF clause needs to be at the beginning of the statement", "The IF clause needs to be a WHERE clause", "The statement needs semicolons", "The object type needs to be specified within the UPDATE statement"],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_13",
    type: "single",
    question: "A sales analyst needs to see who placed orders, the order ID of the order, its subtotal, and a sales tax, which is 5% of the subtotal. The sales tax column does not exists. Only customers who placed orders should be seen. Which SQL statement satisfies all the requirements for the sales analyst?",
    options: [
      "SELECT firstname, lastname, subtotal, subtotal * .05 as sales_tax FROM customers LEFT OUTER JOIN orders on customers.customerid = orders.customerid",
      "SELECT firstname, lastname, subtotal, subtotal * 1.05 as sales_tax FROM customers INNER JOIN orders on customers.customerid = orders.customerid",
      "SELECT firstname, lastname, subtotal, subtotal * .05 as sales_tax FROM customers LEFT OUTER JOIN orders on customers.customerid = orders.customerid",
      "SELECT firstname, lastname, subtotal, subtotal * .05 as sales_tax FROM customers INNER JOIN orders on customers.customerid = orders.customerid"
    ],
    correct: [3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_14",
    type: "multi",
    question: "Which SQL statements, as part of creating a column in a table, will format the orderdate field in YYYY-MM-DD HH:MI:SS format? (Choose two)",
    options: ["orderdate TIMESTAMP", "orderdate DATE", "orderdate DATETIME", "orderdate SMALLDATETIME"],
    correct: [2, 3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_15",
    type: "single",
    question: "An organization storing climate data needs to have its database tables be in third normal form. Which statement best defines a table in third normal form?",
    options: ["Every non-prime attribute is non-transitively dependent on every candidate key in the table.", "Every non-trivial join dependency in the table is implied by the superkeys of the table", "No non-prime attribute in the table is functionally dependent on a proper subset of a candidate key.", "The table faithfully represents a relation and has no repeating groups."],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_16",
    type: "single",
    question: "An IT manager needs to determine which day within a monthly call log had the lowest number of calls. The result must display both the date and the number of calls for that day. Which SQL statement correctly fulfills this requirement?",
    options: ["SELECT log_date, MIN(calls) FROM call_log;", "SELECT log_date, calls FROM call_log WHERE calls = (SELECT MIN(calls) FROM call_log);", "SELECT MIN(calls) FROM call_log;", "SELECT log_date, calls FROM call_log GROUP BY log_date;"],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_17",
    type: "single",
    question: "A view named vw_customers exists with a firstname and lastname column from the customers table. The customerid field needs to be added to the view and should be the first field in the view. Which SQL statement makes the needed change to the view?",
    options: ["CREATE VIEW vw_customers AS SELECT customerid, firstname, lastname FROM customers", "DROP VIEW vw_customers CREATE VIEW vw_customers AS SELECT customerid, firstname, lastname FROM customers", "ALTER VIEW vw_customers AS SELECT customerid, firstname, lastname FROM customers", "The result of the execution of a query."],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_18",
    type: "truefalse",
    question: "For each of the following statements regarding primary keys, select Yes if the statement is true and No if the statement is false.",
    statements: ["A 'unique constraint' is the same as a primary key.", "An example of a primary key would be a user ID.", "Relationships between tables are stored as foreign key constraints."],
    correct: [false, true, true],
    labels: ["Yes", "No"],
    options: [],
    image: null,
    pairs: []
  },
  {
    id: "ex1_19",
    type: "match",
    question: "Match each JOIN type to its function. To answer, drag the JOIN type from the column on the left to its correct function on the right. Each JOIN type may be used once, more than once, or not at all.",
    pairs: ["Returns all rows from the left table, even if there are no matches in the right table.", "Returns all rows from the right table, even if there are no matches in the left table.", "Returns rows when there is a match in one of the tables.", "Returns rows when there is at least one match in both tables."],
    options: ["INNER JOIN", "RIGHT OUTER JOIN", "LEFT OUTER JOIN", "FULL OUTER JOIN"],
    correct: ["LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN", "INNER JOIN"],
    image: null,
    statements: [],
    labels: []
  },
  {
    id: "ex1_20",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true or No if the statement is false.",
    statements: ["The ALTER TABLE command can add a new column.", "The ALTER TABLE command can change the IDENTITY specification of an existing column.", "The ALTER TABLE command can drop multiple columns from a table.", "The ALTER TABLE command can modify the data type of an existing column."],
    correct: [true, false, true, true],
    labels: ["Yes", "No"],
    options: [],
    image: null,
    pairs: []
  },
  {
    id: "ex1_21",
    type: "single",
    question: "A database designer wants to ensure that locations in a sales territory table exist in a related locations table. The designer writes the following SQL statement to adjust the sales territory table: ALTER TABLE salesterritory ADD CONSTRAINT fk_location FOREIGN KEY (locationID) REFERENCES locations(locationID) What is being enforced using this SQL statement?",
    options: ["Primary key", "Foreign key", "Referential integrity", "Compound key"],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_22",
    type: "single",
    question: "Which statement will insert multiple rows?",
    options: [
      "INSERT INTO table_name (column1, column2, column3,...) VALUES (value1, value2, value3,...)",
      "INSERT INTO table_name (column1, column2) VALUES (value1a, value2b), (value2a, value2b)",
      "INSERT INTO table_name SELECT (column1, column2, column3)",
      "INSERT INTO table_name VALUES (value1, value2, value3,...)"
    ],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_23",
    type: "truefalse",
    question: "Evaluate each statement regarding aggregates in queries. Select Yes if the statement is true and No if the statement is false.",
    statements: ["A GROUP BY clause must be paired with a HAVING clause.", "A GROUP BY clause must contain all non-aggregated fields in a query.", "A GROUP BY clause must be paired with a WHERE clause."],
    correct: [false, true, false],
    labels: ["Yes", "No"],
    options: [],
    image: null,
    pairs: []
  },
  {
    id: "ex1_24",
    type: "single",
    question: "You are the assistant database manager at a local amusement park. Amusement park ticket prices are being raised this season by 10%, and you have been tasked to update the database Park table. Which would be the correct statement to raise Ticket prices 10% in the Park table?",
    options: ["UPDATE Park SET Ticket = .10", "UPDATE Park SET Ticket = Ticket + .10", "UPDATE Park SET Ticket = Ticket * 1.1", "UPDATE Ticket SET Park = Ticket * 1.1"],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_25",
    type: "dragtext",
    question: "Using drag and drop, complete the query below. The goal of the query is to display a list of customers from Utah, sorted by last name. SELECT lastname, firstname FROM customers {{1}} state = 'UT' {{2}} lastname",
    options: ["SORT BY", "WHERE", "WHEN", "ORDER BY", "HAVING"],
    correct: ["WHERE", "ORDER BY"],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_26",
    type: "single",
    question: "Evaluate the following SQL code: SELECT LastName, FirstName, COUNT(OrderID) FROM Customers GROUP BY LastName HAVING COUNT(OrderID) >5 What would cause this statement to have a runtime error?",
    options: ["The GROUP BY clause is incomplete.", "A WHERE clause is required due to the presence of the HAVING clause.", "Semicolons are needed.", "A schema is missing."],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_27",
    type: "single",
    question: "An orders table is used as a lookup to an orderdetails table with the orderID column from an orders table as the column used to establish the relationship between the two tables. Which type of deletion will cause a cascading delete between the two tables?",
    options: ["Deleting an order detail for an order deletes all order details for that order.", "Deleting an order deletes all the details of the order.", "Deleting all the details for an order deletes the order.", "Deleting an order deletes the first detail of that order."],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_28",
    type: "multi",
    question: "Which are the reasons for normalizing data within a database? (Choose two)",
    options: ["Reduces dependencies on data.", "Reduces redundancies of data.", "Reduce the number of tables in a database.", "Reduces the size of a database."],
    correct: [0, 1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_29",
    type: "single",
    question: "Evaluate the following table of data: <table><tr><th>ID</th><th>LastName</th><th>Salary</th></tr><tr><td>1</td><td>Gomez</td><td>83000</td></tr><tr><td>2</td><td>Parker</td><td>38000</td></tr><tr><td>3</td><td>Smith</td><td>70000</td></tr><tr><td>4</td><td>Tang</td><td>68000</td></tr></table> What is the result of the following query: SELECT MAX(Salary) from employee.",
    options: ["38000", "83000", "1", "Gomez"],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_30",
    type: "single",
    question: "Which SQL statement will delete a table named testtable from a database?",
    options: ["DROP TABLE testtable", "DELETE TABLE testtable", "REVOKE TABLE testtable", "TRUNCATE TABLE testtable"],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_31",
    type: "order",
    question: "A quality control specialist wants to see an orderID after inputting an orderdetailID. Using drag and drop, create the stored procedure necessary to fulfill this request. Not every step will be used.",
    options: ["CREATE PROCEDURE uspGetOrderID", "@orderdetailID int, @orderID int OUTPUT", "AS BEGIN", "SELECT @orderid = orderid from orderdetails", "WHERE orderdetailid = @orderdetailid", "END"],
    correct: [0, 1, 2, 3, 4, 5],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_32",
    type: "single",
    question: "A school database needs a table that holds the student who signed up for a class, the class the student signed up for, and the signup date. The studentID and classID fields are to be used as a composite key for the table. Which statement accurately creates the table and fulfills the requirements for making each record unique?",
    options: [
      "CREATE TABLE Signups ( studentID varchar(5) UNIQUE NOT NULL classID varchar(5) UNIQUE NOT NULL signupdate DATETIME primary key (studentID, classID) )",
      "CREATE TABLE Signups ( studentID varchar(5) UNIQUE NOT NULL classID varchar(5) UNIQUE NOT NULL signupdate DATETIME primary keys (studentID, classID) )",
      "CREATE TABLE Signups ( studentID varchar(5) UNIQUE NOT NULL classID varchar(5) UNIQUE NOT NULL signupdate DATETIME primary key studentID primary key classID )",
      "CREATE TABLE Signups ( studentID varchar(5) UNIQUE NOT NULL classID varchar(5) UNIQUE NOT NULL signupdate DATETIME composite key (studentID, classID) )"
    ],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_33",
    type: "single",
    question: "Evaluate the following query: SELECT LastName, FirstName FROM Employees WHERE EmployeeID = ALL (SELECT EmployeeID from Sales WHERE Amount > 50000); There are five employees who sold over 50000, but none are showing in the results. What keyword needs to change to allow for the five employees to be returned?",
    options: ["Change ALL to ANY", "Change ALL to JOIN", "Change ALL to WHERE", "Change ALL to IN"],
    correct: [3],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_34",
    type: "match",
    question: "Match each database component to its function. Instructions: To answer, drag the database component from the column on the left to its correct function on the right. Each database component may be used once, more than once, or not at all.",
    pairs: ["A group of database items listed left to right (horizontally)", "A group of items listed up and down (vertically)", "A location in a record in which a particular type of data is stored.", "A table of rows and columns. Used to store and organize data."],
    options: ["Row", "Entity", "Column", "Field"],
    correct: ["Row", "Column", "Field", "Entity"],
    image: null,
    statements: [],
    labels: []
  },
  {
    id: "ex1_35",
    type: "single",
    question: "A sales manager needs to see orders that have been both completed and the order type is not a pre-order. Specifically, the orderID, orderdate, and customerID are needed. Which SQL statement fulfills that need?",
    options: [
      "SELECT orderid, ordertype, orderdate, customerid FROM orders WHERE orderdate IS NOT NULL OR ordertype = 'pre-order'",
      "SELECT orderid, ordertype, orderdate, customerid FROM orders WHERE orderdate IS EMPTY AND NOT ordertype = 'pre-order'",
      "SELECT orderid, ordertype, orderdate, customerid FROM orders WHERE orderdate IS NOT NULL AND NOT ordertype = 'pre-order'",
      "SELECT orderid, ordertype, orderdate, customerid FROM orders WHERE orderdate <> NULL AND NOT ordertype = 'pre-order'"
    ],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_36",
    type: "single",
    question: "A developer looking to create an inventory sheet wants every inventory item listed with every location. Which query will produce the desired results?",
    options: ["SELECT product from products CROSS JOIN location from locations", "SELECT product from products INNER JOIN location from locations ON products.product = locations.location", "SELECT product from products FULL OUTER JOIN location from locations ON products.product = locations.location", "SELECT product from products LEFT OUTER JOIN location from locations ON products.product = locations.location"],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_37",
    type: "single",
    question: "What will be the result of the following statement? CREATE VIEW cambridge_data AS SELECT NoControl_FullName FROM cambridge ORDER BY FullName",
    options: ["A SQL Server Database Error because the create view statement is not within a BEGIN/END block.", "A SQL Server Database Error because the ORDER BY clause is not valid in the creation of a view.", "A SQL Server Database Error because the same column cannot be used multiple times in the statement.", "The creation of a view called cambridge_data with the data ordered by the field FullName."],
    correct: [1],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_38",
    type: "dragtext",
    question: "You have the following table definition: CREATE TABLE Cookies (CookieID INTEGER, Name VARCHAR(20)) You need to insert a new product. The cookie name is Snickerdoodle and the cookie ID is 77. Which SQL should you use? To answer, drag the appropriate SQL statement from the column on the left to its place in the SQL query on the right. Each data type may be used once, more than once, or not at all. {{1}} {{2}}",
    options: ["INSERT 77,'Snickerdoodle'", "INTO Cookies", "INSERT NEW CookieID = 77, Name = 'Snickerdoodle'", "INSERT INTO Cookies", "INTO Snickerdoodle", "VALUES (CookieID = 77,'Snickerdoodle') Name = &", "INSERT INTO Cookies (Name, CookieID)", "VALUES ( 'Snickerdoodle', 77)"],
    correct: ["INSERT INTO Cookies (Name, CookieID)", "VALUES ( 'Snickerdoodle', 77)"],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_39",
    type: "single",
    question: "A database of students contains more than one record containing the lastname 'Smith' and firstname 'David'. If these records are not duplicates, how are they differentiated within the database?",
    options: ["Schema", "Foreign key", "Primary key", "Referential integrity"],
    correct: [2],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_40",
    type: "single",
    question: "You have been tasked to delete a row from a database table. You execute the following SQL statement without a WHERE clause: DELETE FROM table_name What will be the result of executing the statement above without a WHERE clause?",
    options: ["All records will be deleted.", "An error message will be returned.", "No records will be deleted.", "The first record will be deleted by default."],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_41",
    type: "single",
    question: "A database builder wants to allow only two values in an Active field in a Customers table, with the possible values set to 0 or 1 to represent inactive or active. Which statement, as part of a CREATE TABLE statement, should be used to set the data type to only allows these two values for the field?",
    options: ["Active BIT", "Active VARCHAR(1)", "Active CHECK", "Active INT"],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_42",
    type: "dragtext",
    question: "You have created a list of students who are helping at a Science Fair. The list is contained in a database table named Students that has the following columns and rows: Id FirstName 1 Shannon 2 Juan 3 Benjamin 4 Tiffany You have learned that Benjamin will not be attending the Science Fair and Kayden will be replacing him. What SQL query will replace Benjamin with Kayden in the table? Instructions: To answer, drag the appropriate SQL statement from the column on the left to its place in the SQL query on the right. Each data type may be used once, more than once, or not at all. {{1}} {{2}} {{3}}",
    options: ["FROM Students", "UPDATE FirstName =", "SET Students", "TO FirstName =", "WHERE FirstName = 'Benjamin'", "UPDATE Students", "SET FirstName = 'Kayden'"],
    correct: ["UPDATE Students", "SET FirstName = 'Kayden'", "WHERE FirstName = 'Benjamin'"],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  },
  {
    id: "ex1_43",
    type: "single",
    question: "Which is a major difference between a stored procedure and a function?",
    options: ["A Function can have both input/output parameters, but a Stored Procedure can only have input parameters.", "A Stored Procedure must be compiled every time it is called.", "A Function must be compiled every time it is called.", "Functions cannot be called from a Stored Procedure, but a Stored Procedure can be called from a Function."],
    correct: [0],
    image: null,
    pairs: [],
    statements: [],
    labels: []
  }
];
