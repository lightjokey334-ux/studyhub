/* ===================================================================
   Examen 2 — Databases
   =================================================================== */

var EXAM_TITLE = "Databases — Examen 2";
var EXAM_ID = "Databases_exam2";
var EXAM_RANDOMIZE = false;

var EXAM_QUESTIONS = [
  {
    id: "ex2_01",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br><u>MINUS</u> is a reserved keyword in SQL Server 2008 and therefore cannot be used as an object name or as a column name in a table, unless delimited.",
    image: null,
    options: [
      "ADD",
      "No change is needed",
      "PLUS",
      "SUBTRACT"
    ],
    correct: [0],
    sourceImage: "screenshot_0001.png",
    explanation: "MINUS nu este un cuvânt rezervat în SQL Server (este în Oracle). ADD este un cuvânt rezervat valid, deci înlocuind MINUS cu ADD afirmația devine corectă. (Work with Tables - D2001)"
  },
  {
    id: "ex2_02",
    type: "dropdown",
    question: "Use the dropdown menus to select the answer choice that completes each statement. Use the image below as reference.",
    image: "screenshot_0002_img.png",
    statements: [
      "The relationship between the Transaction and Customer tables is a _______ relationship.",
      "AccountID on the Transaction table is a _______.",
      "The diagram being shown is a _______ diagram."
    ],
    options: [
      ["one-to-many", "many-to-many", "one-to-one"],
      ["foreign key", "index", "primary key", "union"],
      ["Entity-Relationship", "Entity-entity", "Schema"]
    ],
    correct: ["one-to-many", "foreign key", "Entity-Relationship"],
    sourceImage: [
      { label: "Întrebare", file: "screenshot_0002.png" },
      { label: "Imagine", file: "screenshot_0002_img.png" },
      { label: "Răspuns 1", file: "screenshot_0002_r1.png" },
      { label: "Răspuns 2", file: "screenshot_0002_r2.png" },
      { label: "Răspuns 3", file: "screenshot_0002_r3.png" }
    ],
    explanation: "Transaction → Customer este one-to-many. AccountID pe Transaction este cheie străină (foreign key). Diagrama este Entity-Relationship. (Establishing Relationships - D1009, Entity-Relationship Diagrams - D1010)"
  },
  {
    id: "ex2_03",
    type: "single",
    question: "The first normal form requires that the database exclude which one of the following?",
    image: null,
    options: [
      "composite keys",
      "duplicate rows",
      "foreign keys",
      "repeating groups"
    ],
    correct: [3],
    sourceImage: "screenshot_0003.png",
    explanation: "First normal form (1NF) elimină grupurile repetitive (repeating groups). (Reasons for Normalization - D1012)"
  },
  {
    id: "ex2_04",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br>A table is often implemented as an array of records, a linked list, or several arrays of different data types, all using a common <u>columns</u>.",
    image: null,
    options: [
      "indexing scheme",
      "No change is needed",
      "rows",
      "SQL statements"
    ],
    correct: [0],
    sourceImage: "screenshot_0004.png",
    explanation: "O tabelă este implementată folosind un index common (indexing scheme), nu coloane. (Clustered Indexes - D2006)"
  },
  {
    id: "ex2_05",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is not.",
    image: null,
    statements: [
      "Char(size) holds a fixed-length string.",
      "Text holds a fixed-length string.",
      "Varchar(size) can hold a string of differing lengths."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true],
    sourceImage: "screenshot_0005.png",
    explanation: "CHAR este fix, VARCHAR este variabil, TEXT (în SQL Server) este variabil, nu fix. (Data Types for Storing Text - D1008)"
  },
  {
    id: "ex2_06",
    type: "single",
    question: "A view named potential_customers is no longer needed in a database named WaterWorks. Which SQL statement will remove the view from the database without removing any of the underlying data the view shows?",
    image: null,
    options: [
      "DELETE VIEW potential_customers",
      "DELETE potential_customers",
      "DROP potential_customers",
      "DROP VIEW potential_customers"
    ],
    correct: [3],
    sourceImage: "screenshot_0006.png",
    explanation: "DROP VIEW elimină doar definiția view-ului, nu datele subiacente. (Create, Alter, and Drop Views - D2003)"
  },
  {
    id: "ex2_07",
    type: "dropdown",
    question: "Refer to the image below. Use the dropdown menus to select the answer choice that completes each statement.",
    image: "screenshot_0007_img.png",
    statements: [
      "The diagram is an example of a _______",
      "Pages and rows are _______"
    ],
    options: [
      ["Heap", "B-tree", "Index", "Table"],
      ["Leaf nodes", "Root nodes", "Intermediate level", "Index nodes"]
    ],
    correct: ["B-tree", "Leaf nodes"],
    sourceImage: [
      { label: "Întrebare", file: "screenshot_0007.png" },
      { label: "Imagine", file: "screenshot_0007_img.png" }
    ],
    explanation: "Structura B-tree este utilizată pentru indecși. Paginile și rândurile sunt noduri frunză (leaf nodes). (Clustered Indexes - D2006, Nonclustered Indexes - D2007)"
  },
  {
    id: "ex2_08",
    type: "single",
    question: "Which of the following could not be used as a primary key?",
    image: null,
    options: [
      "A table containing only one FOREIGN key",
      "Employee Number",
      "Serial number for an electronic component",
      "Social Security Number"
    ],
    correct: [0],
    sourceImage: "screenshot_0008.png",
    explanation: "O cheie primară trebuie să fie o coloană sau combinație de coloane care identifică unic fiecare rând. „A table containing only one FOREIGN key” nu este o cheie, ci o tabelă. (Primary Key - D1003)"
  },
  {
    id: "ex2_09",
    type: "single",
    question: "An analyst needs to know the highest amount of sales in a list of daily sales amounts. Which keyword should the analyst use to obtain that amount?",
    image: null,
    options: [
      "MAX",
      "HIGH",
      "MOST",
      "VALUES"
    ],
    correct: [0],
    sourceImage: "screenshot_0009.png",
    explanation: "MAX returnează valoarea maximă dintr-un set. (MIN and MAX - D3023)"
  },
  {
    id: "ex2_10",
    type: "dropdown",
    question: "An attack on your company server is being made using the following image:",
    image: "screenshot_0010_img.png",
    statements: [
      "This is an example of a ____ attack.",
      "To prevent this type of attack from being successful you should enable ____"
    ],
    options: [
      ["Brute Force", "Dictionary", "SQL Injection", "Man-in-the-middle"],
      ["IP restrictions", "Account lockout", "Firewalls", "Anti-virus"]
    ],
    correct: ["Dictionary", "Account lockout"],
    sourceImage: [
      { label: "Întrebare", file: "screenshot_0010.png" },
      { label: "Imagine", file: "screenshot_0010_img.png" }
    ],
    explanation: "Atac de dicționar (încearcă parole comune). Blocarea contului (Account lockout) previne acest atac."
  },
  {
    id: "ex2_11",
    type: "single",
    question: "Consider a query of two tables. The result contains only the rows that have a match in both tables. What kind of Join was used?",
    image: null,
    options: [
      "Full Outer Join",
      "Inner Join",
      "Left Outer Join",
      "Right Outer Join"
    ],
    correct: [1],
    sourceImage: "screenshot_0011.png",
    explanation: "INNER JOIN returnează doar rândurile care au potrivire în ambele tabele. (Join Types - D3001)"
  },
  {
    id: "ex2_12",
    type: "single",
    question: "How many levels of normal forms are there?",
    image: null,
    options: [
      "11",
      "3",
      "5",
      "7"
    ],
    correct: [1],
    sourceImage: "screenshot_0012.png",
    explanation: "În majoritatea cursurilor introductive sunt menționate trei forme normale (1NF, 2NF, 3NF). (Reasons for Normalization - D1012)"
  },
  {
    id: "ex2_13",
    type: "single",
    question: "What will be the result of the following statement?<br><br><code>SELECT REPLACE('The best TTS solutions is provided by GMetrix', 'S', 'z')</code>",
    image: null,
    options: [
      "The bezt TTSz szolutions iz provided by GMetrix",
      "A SQL Server Orthographic error",
      "The bezt TTz zolutions iz provided by GMetrix",
      "None of the above"
    ],
    correct: [2],
    sourceImage: "screenshot_0013.png",
    explanation: "REPLACE înlocuiește toate aparițiile 'S' (inclusiv 's' dacă collation-ul este case-insensitive) cu 'z'. Rezultatul este: The bezt TTz zolutions iz provided by GMetrix. (Data Manipulation)"
  },
  {
    id: "ex2_14",
    type: "multi",
    question: "Which three are T-SQL commands to handle privileges? (Choose three)",
    image: null,
    options: [
      "Deny",
      "Grant",
      "Permit",
      "Recind",
      "Refuse",
      "Revoke"
    ],
    correct: [0, 1, 5],
    sourceImage: "screenshot_0014.png",
    explanation: "În T-SQL, comenzile pentru privilegii sunt GRANT, DENY și REVOKE. (Permission Grants - D1016, Permission Revokes - D1017)"
  },
  {
    id: "ex2_15",
    type: "truefalse",
    question: "Evaluate each SQL statement. Select Yes if the statement has a syntax error in it and No if there is no syntax error within the statement.",
    image: null,
    statements: [
      "SELECT * INTO Customers FROM CustomersNew",
      "INSERT * INTO Customers FROM CustomersNew",
      "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName from CustomersNew"
    ],
    labels: ["Yes", "No"],
    correct: [false, true, false],
    sourceImage: "screenshot_0015.png",
    explanation: "SELECT * INTO este corect. INSERT * INTO este incorect (INSERT nu suportă *). INSERT INTO ... SELECT este corect. (INSERT INTO...SELECT - D4001)"
  },
  {
    id: "ex2_16",
    type: "single",
    question: "Which Transact-SQL command removes a table from the database?",
    image: null,
    options: [
      "DELETE TABLE",
      "DROP TABLE",
      "ERASE TABLE",
      "REMOVE TABLE"
    ],
    correct: [1],
    sourceImage: "screenshot_0016.png",
    explanation: "DROP TABLE elimină tabela din bază de date. (Work with Tables - D2001)"
  },
  {
    id: "ex2_17",
    type: "single",
    question: "Which of the following fixed server roles can shut down the SQL Server?",
    image: null,
    options: [
      "processadmin",
      "securityadmin",
      "serveradmin",
      "setupadmin"
    ],
    correct: [2],
    sourceImage: "screenshot_0017.png",
    explanation: "serveradmin poate opri serverul SQL. (Permission of Roles - D1018)"
  },
  {
    id: "ex2_18",
    type: "truefalse",
    question: "For each of the following statements regarding the use and purpose of views, select Yes if the statement is true and No if it is false.",
    image: null,
    statements: [
      "Views can help limit what people can see within a database.",
      "Views can be created from multiple tables.",
      "Views can be altered using an ADD COLUMN clause.",
      "Views can temporarily store copies of data from tables."
    ],
    labels: ["Yes", "No"],
    correct: [true, true, false, false],
    sourceImage: "screenshot_0018.png",
    explanation: "Views restricționează accesul, pot fi create din mai multe tabele, dar nu se alterează cu ADD COLUMN și nu stochează date (sunt doar interogări salvate). (Create, Alter, and Drop Views - D2003)"
  },
  {
    id: "ex2_19",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br><u>UPS</u> is the best method to prevent the loss of data.",
    image: null,
    options: [
      "Backup",
      "No change is needed",
      "RAID",
      "Redundant NICs"
    ],
    correct: [0],
    sourceImage: "screenshot_0019.png",
    explanation: "Backup este metoda principală pentru prevenirea pierderii datelor. UPS protejează doar împotriva întreruperilor de curent. (Backups - D1014)"
  },
  {
    id: "ex2_20",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br><u>Bulkadmin</u> can perform bulk insert operations.",
    image: null,
    options: [
      "Diskadmin",
      "Dbcreator",
      "No change is needed",
      "Setupadmin"
    ],
    correct: [2],
    sourceImage: "screenshot_0020.png",
    explanation: "Bulkadmin este rolul care permite operațiuni bulk insert. Afirmația este corectă. (Permission of Roles - D1018)"
  },
  {
    id: "ex2_21",
    type: "single",
    question: "Which Transact-SQL command removes all rows from a table without logging the individual row deletions?",
    image: null,
    options: [
      "DELETE TABLE",
      "DROP TABLE",
      "REMOVE TABLE",
      "TRUNCATE TABLE"
    ],
    correct: [3],
    sourceImage: "screenshot_0021.png",
    explanation: "TRUNCATE TABLE elimină toate rândurile fără a loga fiecare ștergere individual. (Truncate Table - D4005)"
  },
  {
    id: "ex2_22",
    type: "single",
    question: "What is collation?",
    image: null,
    options: [
      "It is a concept in SQL Server by which we can add other SQL Server to a group and query both the SQL Servers dbs using T-SQL statements.",
      "It is a data design and organization process applied to data structures, based on rules that help build relational databases.",
      "It means that the data in the db is organized so that all the data elements relating to the same real-world event or object are linked together.",
      "It refers to a set of rules that determine how data is sorted and compared."
    ],
    correct: [3],
    sourceImage: "screenshot_0022.png",
    explanation: "Collation definește regulile de sortare și comparare a datelor. (Data Types for Storing Text - D1008)"
  },
  {
    id: "ex2_23",
    type: "dragtext",
    question: "A quality control specialist wants to see an orderID after inputting an orderdetailID. Using drag and drop, create the stored procedure necessary to fulfill this request. Not every step will be used.<br><br>Step 1: {{1}}<br>Step 2: {{2}}<br>Step 3: {{3}}<br>Step 4: {{4}}<br>Step 5: {{5}}<br>Step 6: {{6}}",
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
    correct: [
      "CREATE PROCEDURE uspGetOrderID",
      "@orderdetailID int, @orderID int OUTPUT",
      "AS BEGIN",
      "SELECT @orderid = orderid from orderdetails",
      "WHERE orderdetailid = @orderdetailid",
      "END"
    ],
    sourceImage: "screenshot_0023.png",
    explanation: "Procedura stocată corectă are parametru de intrare și ieșire, SELECT, WHERE și END. (Input and Output Parameters - D2004, Return Values - D2005)"
  },
  {
    id: "ex2_24",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true and No if it is false.",
    image: null,
    statements: [
      "Membership in a Windows user group can identify a user's Server Level security.",
      "Root login can identify a user's Server Level security.",
      "SQL Server Login can identify a user's Server Level security.",
      "Windows login can identify a user's Server Level security."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true, true],
    sourceImage: "screenshot_0024.png",
    explanation: "Windows user group, SQL Server Login și Windows login pot identifica securitatea la nivel de server. Root login nu există în SQL Server. (Permission of Roles - D1018, Permission of Roles (2) - D1019)"
  },
  {
    id: "ex2_25",
    type: "single",
    question: "Which of the following range conditions would generate a syntax error?",
    image: null,
    options: [
      "salary <= 50000 AND salary >= 10000",
      "salary >= 10000 AND salary <= 50000",
      "salary between (10000 AND 50000) AND (60000 and 90000)",
      "salary BETWEEN 10000 AND 50000"
    ],
    correct: [2],
    sourceImage: "screenshot_0025.png",
    explanation: "Opțiunea 2 are sintaxă incorectă: BETWEEN nu acceptă paranteze și AND între două expresii BETWEEN. (BETWEEN - D3011)"
  },
  {
    id: "ex2_26",
    type: "single",
    question: "______ removes a SQL Server login account.",
    image: null,
    options: [
      "Delete Login",
      "Delete User",
      "Drop Login",
      "Drop User"
    ],
    correct: [2],
    sourceImage: "screenshot_0026.png",
    explanation: "DROP Login este comanda corectă pentru a șterge un cont de login. (Permission of Roles - D1018)"
  },
  {
    id: "ex2_27",
    type: "single",
    question: "You have a column that will only contain values from 0 to 1024. What is the most economical data type to use for the column?",
    image: null,
    options: [
      "DECIMAL(3)",
      "INT",
      "SMALLINT",
      "TINYINT"
    ],
    correct: [2],
    sourceImage: "screenshot_0027.png",
    explanation: "SMALLINT (2 bytes) poate stoca valori până la 32767, fiind mai economic decât INT (4 bytes). TINYINT (1 byte) nu acoperă până la 1024 (max 255). (Storage Requirements - D1007, Data Types for Storing Text - D1008)"
  },
  {
    id: "ex2_28",
    type: "single",
    question: "A sales manager wants to see a list of customers that are not in Los Angeles nor the states of Washington and Oregon. Which SQL statement fulfills this request?",
    image: null,
    options: [
      "SELECT lastname, firstname<br>FROM customers<br>WHERE city <> 'Los Angeles' AND state NOT IN ('Oregon', 'Washington')",
      "SELECT lastname, firstname<br>FROM customers<br>WHERE city <> 'Los Angeles' AND state <> ('Oregon', 'Washington')",
      "SELECT lastname, firstname<br>FROM customers<br>WHERE city != 'Los Angeles' AND state NOT IN ('Oregon', 'Washington')",
      "SELECT lastname, firstname<br>FROM customers<br>WHERE city != 'Los Angeles' AND state != ('Oregon', 'Washington')"
    ],
    correct: [0],
    sourceImage: "screenshot_0028.png",
    explanation: "<> este operator standard, NOT IN este corect pentru excluderea mai multor stări. (NOT - D3014, IN and NOT IN - D3016)"
  },
  {
    id: "ex2_29",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br>A(n) <u>index</u> can restrict a user to specific rows or specific columns in a table.",
    image: null,
    options: [
      "No change is needed",
      "Primary key",
      "Relationship",
      "View"
    ],
    correct: [3],
    sourceImage: "screenshot_0029.png",
    explanation: "Un view restricționează accesul la anumite rânduri sau coloane. Un index nu restricționează, ci accelerează. (Create, Alter, and Drop Views - D2003)"
  },
  {
    id: "ex2_30",
    type: "single",
    question: "What is the statement to use to suppress the '(1 row(s) affected)' after executing query statements?",
    image: null,
    options: [
      "SET NO COUNT",
      "SET NO COUNTING",
      "SET NO COUNT ON",
      "SET NOCOUNT ON"
    ],
    correct: [3],
    sourceImage: "screenshot_0030.png",
    explanation: "SET NOCOUNT ON suprimă mesajul de număr de rânduri afectate."
  },
  {
    id: "ex2_31",
    type: "single",
    question: "In an RDMS, a group of rows and columns is called a what?",
    image: null,
    options: [
      "Field",
      "Relation",
      "Table",
      "Variable"
    ],
    correct: [2],
    sourceImage: "screenshot_0031.png",
    explanation: "O grupă de rânduri și coloane se numește tabel (table) sau entitate. (Entities, Rows, and Columns - D1002)"
  },
  {
    id: "ex2_32",
    type: "single",
    question: "SQL code injection is ____.",
    image: null,
    options: [
      "A technique that exploits security vulnerabilities in the db layer of an application.",
      "An insert statement.",
      "The execution of a store procedure.",
      "The use of SQL statements in high level languages."
    ],
    correct: [0],
    sourceImage: "screenshot_0032.png",
    explanation: "SQL injection exploatează vulnerabilități în stratul bazei de date al unei aplicații."
  },
  {
    id: "ex2_33",
    type: "single",
    question: "Evaluate the following SQL Statement:<br><br><code>DELETE view UtahCustomers;</code><br>A developer runs this statement and gets an error message that this is unable to be deleted. What is the most likely cause of the error?",
    image: null,
    options: [
      "The DROP keyword should be used instead of DELETE.",
      "The TRUNCATE keyword should be used instead of DELETE.",
      "The REVOKE keyword should be used instead of DELETE.",
      "The developer has insufficient permissions to delete the view."
    ],
    correct: [0],
    sourceImage: "screenshot_0033.png",
    explanation: "Pentru a șterge un view se folosește DROP VIEW, nu DELETE. (Create, Alter, and Drop Views - D2003)"
  },
  {
    id: "ex2_34",
    type: "match",
    question: "Match the description to the database normal form.",
    image: null,
    pairs: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Fourth Normal Form (4NF)",
      "Fifth Normal Form (5NF)"
    ],
    options: [
      "Table has no repeating groups",
      "Every non-trivial Join dependency in the table is implied by the superkeys of the table",
      "Every non-trivial multivalued dependency in the table is a dependency on a superkey",
      "No non-prime attribute in the table is functionally dependent on a proper subset of a candidate key",
      "Every non-prime attribute is non-transitively dependent on every candidate key in the table"
    ],
    correct: [
      "Table has no repeating groups",
      "No non-prime attribute in the table is functionally dependent on a proper subset of a candidate key",
      "Every non-prime attribute is non-transitively dependent on every candidate key in the table",
      "Every non-trivial multivalued dependency in the table is a dependency on a superkey",
      "Every non-trivial Join dependency in the table is implied by the superkeys of the table"
    ],
    sourceImage: "screenshot_0034.png",
    explanation: "1NF: fără grupări repetitive. 2NF: fără dependențe parțiale. 3NF: fără dependențe tranzitive. 4NF: fără dependențe multivalorice non-triviale. 5NF: dependențe de join. (Reasons for Normalization - D1012, Third Normal Form - D1013)"
  },
  {
    id: "ex2_35",
    type: "single",
    question: "Which is a major difference between a stored procedure and a function?",
    image: null,
    options: [
      "A function can have both input/output parameters, but a Stored Procedure can only have input parameters.",
      "A Stored Procedure must be compiled every time it is called.",
      "A Function must be compiled every time it is called.",
      "Functions cannot be called from a Stored Procedure, but a Stored Procedure can be called from a Function."
    ],
    correct: [3],
    sourceImage: "screenshot_0035.png",
    explanation: "În SQL Server, funcțiile pot fi apelate din proceduri, dar procedurile nu pot fi apelate din funcții. (Input and Output Parameters - D2004, Return Values - D2005)"
  },
  {
    id: "ex2_36",
    type: "single",
    question: "A database designer wants to ensure that locations in a sales territory table exist in a related locations table. The designer writes the following SQL statement to adjust the sales territory table:<br><br><code>ALTER TABLE salesterritory<br>ADD CONSTRAINT fk_location<br>FOREIGN KEY (locationID) REFERENCES locations(locationID)</code><br>What is being enforced using this SQL statement?",
    image: null,
    options: [
      "Primary key",
      "Foreign key",
      "Referential integrity",
      "Compound key"
    ],
    correct: [2],
    sourceImage: "screenshot_0036.png",
    explanation: "FOREIGN KEY constrânge integritatea referențială. (Referential Integrity - D1011, Establishing Relationships - D1009)"
  },
  {
    id: "ex2_37",
    type: "single",
    question: "The WHERE clause allows you to ____.",
    image: null,
    options: [
      "Obtain a subset of rows.",
      "Order a subset of rows.",
      "Update the values inside a record or groups of records.",
      "View a subset of columns."
    ],
    correct: [0],
    sourceImage: "screenshot_0037.png",
    explanation: "WHERE filtrează rânduri (obține un subset de rânduri). (WHERE - D3009)"
  },
  {
    id: "ex2_38",
    type: "multi",
    question: "Which three are true statements about Foreign Keys? (Choose three)",
    image: null,
    options: [
      "A Foreign Key is a combination of one or more columns used to establish and enforce a link between the data in two tables",
      "A Foreign Key enforces referential integrity by ensuring only valid data is stored",
      "A Foreign Key is the same as a Primary Key",
      "A table can contain only one Foreign Key",
      "You can create a Foreign Key by defining a Foreign Key constraint when you create or alter a table"
    ],
    correct: [0, 1, 4],
    sourceImage: "screenshot_0038.png",
    explanation: "Cheile străine stabilesc legături între tabele, aplică integritatea referențială și se creează prin constrângeri. (Establishing Relationships - D1009)"
  },
  {
    id: "ex2_39",
    type: "single",
    question: "This query is run on the table:<table><tr><th>ID</th><th>Clothing</th><th>Color</th><th>Price</th></tr><tr><td>1</td><td>Shirt</td><td>Red</td><td>44.99</td></tr><tr><td>2</td><td>Shirt</td><td>Blue</td><td>44.99</td></tr><tr><td>3</td><td>Pants</td><td>Blue</td><td>44.99</td></tr></table><br><code>UPDATE Products<br>SET Price = 49.99<br>WHERE (Clothing = 'Shirt' AND Color = 'Blue')</code><br>How many items will update?",
    image: null,
    options: [
      "1",
      "2",
      "3",
      "0"
    ],
    correct: [0],
    sourceImage: "screenshot_0039.png",
    explanation: "Doar rândul 2 are Clothing='Shirt' AND Color='Blue', deci se actualizează un singur rând. (Update Data in a Single Table - D4003)"
  },
  {
    id: "ex2_40",
    type: "single",
    question: "What does SQL stand for?",
    image: null,
    options: [
      "Strong Question Language",
      "Structured Query Language",
      "Structured Query Log",
      "Structured Question Language"
    ],
    correct: [1],
    sourceImage: "screenshot_0040.png",
    explanation: "SQL = Structured Query Language."
  },
  {
    id: "ex2_41",
    type: "truefalse",
    question: "For each of the following statements, select Yes if the statement is true or No if the statement is false.",
    image: null,
    statements: [
      "The ALTER TABLE command can add a new column.",
      "The ALTER TABLE command can change the IDENTITY specification of an existing column.",
      "The ALTER TABLE command can drop multiple columns from a table.",
      "The ALTER TABLE command can modify the data type of an existing column."
    ],
    labels: ["Yes", "No"],
    correct: [true, false, true, true],
    sourceImage: "screenshot_0041.png",
    explanation: "ALTER TABLE poate ADD column, DROP multiple columns și ALTER COLUMN data type. Nu poate schimba IDENTITY. (Work with Tables - D2001)"
  },
  {
    id: "ex2_42",
    type: "dragtext",
    question: "You volunteer at a private campground. You are creating a database object named Campers to store the following data:<table><tr><th>ID</th><th>Name</th><th>Cabin</th></tr><tr><td>1</td><td>Chipmunks</td><td>10</td></tr><tr><td>2</td><td>Squirrels</td><td>11</td></tr><tr><td>3</td><td>Bears</td><td>12</td></tr></table><br>Which syntax should you use to create the object?<br><br>Step 1: {{1}}<br>Step 2: {{2}}<br>Step 3: {{3}}<br>Step 4: {{4}}",
    image: null,
    options: [
      "Cabin VARCHAR(25)",
      "Cabin INT()",
      "Name VARCHAR(25)",
      "CREATE TABLE Campers (",
      "CREATE TABLE (",
      "CREATE Campers (",
      "ID INT",
      "ProductID INT"
    ],
    correct: [
      "CREATE TABLE Campers (",
      "ID INT",
      "Name VARCHAR(25)",
      "Cabin VARCHAR(25)"
    ],
    sourceImage: "screenshot_0042.png",
    explanation: "Sintaxa corectă: CREATE TABLE Campers ( ID INT, Name VARCHAR(25), Cabin VARCHAR(25) ). (Work with Tables - D2001)"
  },
  {
    id: "ex2_43",
    type: "single",
    question: "Review the underlined text in the following statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.<br><br>User Defined Functions can be used in Select, Where, or Case statements. They also can be used to create <u>joins</u>.",
    image: null,
    options: [
      "No change is needed",
      "Queries",
      "Relationship Maps",
      "Stored Procedures"
    ],
    correct: [1],
    sourceImage: "screenshot_0043.png",
    explanation: "Funcțiile definite de utilizator sunt folosite în interogări (queries), nu pentru a crea join-uri. (Input and Output Parameters - D2004)"
  },
  {
    id: "ex2_44",
    type: "dropdown",
    question: "Refer to the table below to evaluate the statements. Use the dropdown menus to select the answer choice that completes each statement.",
    image: "screenshot_0044_img.png",
    statements: [
      "The primary key in this table should be _______.",
      "The best example of valid data for the first field would be _______."
    ],
    options: [
      ["Address", "Lastname", "Student ID"],
      ["12345abc", "1234567", "1234567890"]
    ],
    correct: ["Student ID", "1234567"],
    sourceImage: [
      { label: "Întrebare", file: "screenshot_0044.png" },
      { label: "Imagine (tabel)", file: "screenshot_0044_img.png" },
      { label: "Raspusul 1", file: "screenshot_0044_r1.png" },
      { label: "Raspusul 2", file: "screenshot_0044_r2.png" }
    ],
    explanation: "Cheia primară ar trebui să fie Student ID. 1234567 este un exemplu valid pentru un câmp numeric. (Primary Key - D1003)"
  },
  {
    id: "ex2_45",
    type: "dropdown",
    question: "A new database administrator wants to test a backup and restore for the sales database on a SQL server. Using the dropdown arrows, choose the correct code for both a full backup of the database to the backups folder on the E: drive, naming the backup sales.bak, and a restore of the database.",
    image: null,
    statements: [
      "What is the correct statement for backing up the database?",
      "What is the correct statement for restoring the database?"
    ],
    options: [
      [
        "BACKUP DATABASE sales TO 'E:\\backups\\sales.bak'",
        "CREATE BACKUP TO DISK = 'E:\\backups\\sales.bak' FROM SALES",
        "BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'"
      ],
      [
        "CREATE RESTORE sales FROM 'E:\\backups\\sales.bak'",
        "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'",
        "RESTORE DATABASE sales FROM 'E:\\backups\\sales.bak'"
      ]
    ],
    correct: [
      "BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'",
      "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'"
    ],
    sourceImage: null,
    explanation: "BACKUP DATABASE ... TO DISK = ... și RESTORE DATABASE ... FROM DISK = ... sunt sintaxele corecte. (Backups - D1014, Restore - D1014U)"
  }
];