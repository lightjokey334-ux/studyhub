/* ===================================================================
   Domain 1 — Post-Assessment (Databases)
   Completează array-ul de mai jos cu întrebări generate (ex: cu Deepseek).
   Vezi README.md din rădăcina proiectului pentru schema completă.

   Tipuri disponibile: "single", "multi", "order", "blank", "dragtext", "match"
   =================================================================== */

var QUESTIONS_D1_POST = [
  {
    id: "d1_post_01",
    type: "single",
    question: "What is a characteristic of one-to-many relationships?",
    image: null,
    options: [
      "They use non-primary keys from two tables",
      "They use primary keys from two tables",
      "They use a primary key in one table and a non-primary key in another table",
      "They use primary keys from three tables"
    ],
    correct: [2],
    explanation: "One-to-many relationships use a primary key in one table and a non-primary key in another table (Establishing Relationships)."
  },
  {
    id: "d1_post_02",
    type: "single",
    question: "Which statement best defines referential integrity?",
    image: null,
    options: [
      "A concept that ensures that there is at least one primary key in every table within a database",
      "A concept that ensures that a foreign key value exists in a relationship before the corresponding primary key value is allowed",
      "A concept that ensures that a composite key value exists in a relationship before the corresponding foreign key value is allowed",
      "A concept that ensures that a primary key value exists in a relationship before the corresponding foreign key value is allowed"
    ],
    correct: [3],
    explanation: "Referential integrity ensures that a primary key value exists in a relationship before the corresponding foreign key value is allowed (Referential Integrity)."
  },
  {
    id: "d1_post_03",
    type: "single",
    question: "What is a row, also known as a record?",
    image: null,
    options: [
      "A line within an entity",
      "A description of the data being stored",
      "Entity properties that filter data",
      "A copy of data within an entity"
    ],
    correct: [0],
    explanation: "A row (record) is a line of data within an entity (Entities, Rows, and Columns)."
  },
  {
    id: "d1_post_04",
    type: "single",
    question: "What do primary keys usually consist of?",
    image: null,
    options: [
      "A single row",
      "Multiple rows",
      "A single column",
      "Multiple columns"
    ],
    correct: [2],
    explanation: "Primary keys usually consist of a single column, though composite keys are sometimes used (Composite/Compound Key 1)."
  },
  {
    id: "d1_post_05",
    type: "single",
    question: "Refer to the image. Which option should be set to Yes to enforce referential integrity?",
    image: "foreignkey_properties.png",
    options: [
      "Check Existing Data on Creation",
      "Enforce For Replication",
      "Enforce Foreign Key Constraint",
      "INSERT and UPDATE Specifications"
    ],
    correct: [2],
    explanation: "Enforce Foreign Key Constraint must be set to Yes to enforce referential integrity (Referential Integrity)."
  },
  {
    id: "d1_post_06",
    type: "match",
    question: "Match the data field type to the amount of memory it uses.",
    image: null,
    pairs: ["Int", "Money", "Tinyint"],
    options: ["1 byte", "4 bytes", "8 bytes"],
    correct: ["4 bytes", "8 bytes", "1 byte"],
    explanation: "Int uses 4 bytes, Money uses 8 bytes, and Tinyint uses 1 byte (Storage Requirements)."
  },
  {
    id: "d1_post_07",
    type: "multi",
    question: "Which two data field types are numeric fields?",
    image: null,
    options: ["Varchar", "Int", "Nvarchar", "Money"],
    correct: [1, 3],
    explanation: "Int and Money are numeric fields (Importance of Data Types)."
  },
  {
    id: "d1_post_08",
    type: "single",
    question: "Why might a composite key, also known as a compound key, be necessary for a database?",
    image: null,
    options: [
      "If multiple users access the database",
      "If the information within a column designated as a primary key exists in more than one column",
      "To provide more security for the database",
      "If the data within a table is linked to another table"
    ],
    correct: [1],
    explanation: "A composite key is necessary if the information within a single column designated as a primary key exists in more than one column, requiring a combination of columns to ensure uniqueness (Composite/Compound Key 1)."
  },
  {
    id: "d1_post_09",
    type: "single",
    question: "A bit field is usually used as a ______ field.",
    image: null,
    options: ["text", "Boolean", "numeric", "date"],
    correct: [1],
    explanation: "A bit field is usually used as a Boolean (True/False) field (Data Types for Storing Text)."
  },
  {
    id: "d1_post_10",
    type: "single",
    question: "Refer to the image. What is the displayed graphic called?",
    image: "erd_diagram.png",
    options: [
      "Entry resolution diagram (ERD)",
      "Entry relationship diagram (ERD)",
      "Entity resolution diagram (ERD)",
      "Entity relationship diagram (ERD)"
    ],
    correct: [3],
    explanation: "The displayed graphic is called an Entity Relationship Diagram (ERD) (Entity-Relationship Diagrams)."
  },
  {
    id: "d1_post_11",
    type: "match",
    question: "Match the data field type to its number range.",
    image: null,
    pairs: ["Integer", "Small integer", "Tiny integer", "Money field", "Smallmoney field"],
    options: [
      "-2 billion to 2 billion",
      "-32,767 to 32,767",
      "0 to 255",
      "-214,000 to 214,000",
      "-922 trillion to 922 trillion"
    ],
    correct: [
      "-2 billion to 2 billion",
      "-32,767 to 32,767",
      "0 to 255",
      "-922 trillion to 922 trillion",
      "-214,000 to 214,000"
    ],
    explanation: "Integer: -2 billion to 2 billion; Small integer: -32,767 to 32,767; Tiny integer: 0 to 255; Money: -922 trillion to 922 trillion; Smallmoney: -214,000 to 214,000 (Data Types for Storing Text)."
  },
  {
    id: "d1_post_12",
    type: "multi",
    question: "Which two statements about a datetime field are true?",
    image: null,
    options: [
      "Has a date range from 1753 to 9999",
      "Has a date range from 1900 to 2079",
      "Time can be calculated to the second but no further",
      "Time can be calculated to 1/1000 of a second"
    ],
    correct: [0, 3],
    explanation: "Datetime has a date range from 1753 to 9999 and time can be calculated to 1/1000 of a second (Data Types for Storing Text)."
  },
  {
    id: "d1_post_13",
    type: "single",
    question: "When a permission on a resource is no longer needed, which statement is run to remove that permission?",
    image: null,
    options: ["DENY", "DROP", "DELETE", "REVOKE"],
    correct: [3],
    explanation: "The REVOKE statement is run to remove a permission that is no longer needed (Permission Revokes)."
  },
  {
    id: "d1_post_14",
    type: "single",
    question: "What should one do in the first form of normalization?",
    image: null,
    options: [
      "Ensure that there are only two fields that have duplicate data",
      "Ensure that there is a composite key in every entity",
      "Ensure that every primary key is the same across all entities",
      "Ensure that every record in an entity is unique and all fields are independent of one another"
    ],
    correct: [3],
    explanation: "In first normal form (1NF), ensure that every record in an entity is unique and all fields have a single value (independent) (Reasons for Normalization)."
  },
  {
    id: "d1_post_15",
    type: "match",
    question: "Match the data field type to the amount of memory it uses.",
    image: null,
    pairs: ["Datetime", "Varchar", "Nvarchar", "Smallmoney"],
    options: [
      "The number of characters plus two bytes",
      "Double the number of characters",
      "8 bytes",
      "4 bytes"
    ],
    correct: [
      "8 bytes",
      "The number of characters plus two bytes",
      "Double the number of characters",
      "4 bytes"
    ],
    explanation: "Datetime uses 8 bytes; Varchar uses the number of characters plus two bytes; Nvarchar uses double the number of characters; Smallmoney uses 4 bytes (Storage Requirements)."
  },
  {
    id: "d1_post_16",
    type: "single",
    question: "Which data field type allows for Unicode characters?",
    image: null,
    options: ["Bit", "Varchar", "Nvarchar", "Datetime"],
    correct: [2],
    explanation: "Nvarchar allows for Unicode characters, whereas Varchar does not (Data Types for Storing Text)."
  },
  {
    id: "d1_post_17",
    type: "single",
    question: "What does the WITH GRANT OPTION clause add to a GRANT statement?",
    image: null,
    options: [
      "The ability for the administrator to grant others the same permission being granted to the administrator",
      "The ability for the administrator to grant all privileges to others",
      "The ability for the user getting the permission to grant that permission to others",
      "The ability for the user getting the permission to grant all permissions to others"
    ],
    correct: [2],
    explanation: "WITH GRANT OPTION gives the user receiving the permission the ability to grant that same permission to others (Permission Grants)."
  },
  {
    id: "d1_post_18",
    type: "single",
    question: "Which is a sign of a well-built entity-relationship diagram (ERD)?",
    image: null,
    options: [
      "The columns being used in relationships are indicated",
      "The primary key field is indicated",
      "Entity names are indicated",
      "Entities are shown as having multiple relationships with one another"
    ],
    correct: [1],
    explanation: "A sign of a well-built ERD is that the primary key field is indicated (Entity-Relationship Diagrams)."
  },
  {
    id: "d1_post_19",
    type: "single",
    question: "What is a column, also known as a field?",
    image: null,
    options: [
      "A line within an entity",
      "A description of the data being stored",
      "An entity property that defines the data being stored in records",
      "A place to enter data within an entity"
    ],
    correct: [2],
    explanation: "A column (field) is an entity property that defines the data being stored in records (Entities, Rows, and Columns)."
  },
  {
    id: "d1_post_20",
    type: "single",
    question: "Which statement best defines third normal form?",
    image: null,
    options: [
      "A value change in a non-key column in one table does not necessitate a change in another non-key column",
      "A value change in a non-key column in one table necessitates a change in another non-key column",
      "A value change in a key column in one table does not necessitate a change in a non-key column",
      "A value change in a key column in one table necessitates a change in another key column"
    ],
    correct: [0],
    explanation: "Third normal form (3NF) states that a value change in a non-key column in one table does not necessitate a change in another non-key column (Third Normal Form)."
  },
  {
    id: "d1_post_21",
    type: "single",
    question: "Which data field type stores data as either a zero or one?",
    image: null,
    options: ["Varchar", "Bit", "Datetime", "Date"],
    correct: [1],
    explanation: "A bit field stores data as either a zero or one (Data Types for Storing Text)."
  },
  {
    id: "d1_post_22",
    type: "single",
    question: "What is the principle of least privilege?",
    image: null,
    options: [
      "A principle that states that people should only have the permissions they request",
      "A principle that states that people should only have the permissions they need to do their job",
      "A principle that states that people should have access to all permissions",
      "A principle that states that people should have access to all permissions unless there is no need for them to have access to a permission"
    ],
    correct: [1],
    explanation: "The principle of least privilege states that people should only have the permissions they need to do their job, and no more than that (Principle of Least Privilege)."
  },
  {
    id: "d1_post_23",
    type: "single",
    question: "What can be done with a backup file to make sure it is ready to be restored to a database?",
    image: null,
    options: [
      "The file can be tested",
      "Part of the file can be restored",
      "The file can be verified",
      "The file can have its contents examined"
    ],
    correct: [2],
    explanation: "A backup file can be verified to make sure it is ready to be restored (Restore)."
  },
  {
    id: "d1_post_24",
    type: "single",
    question: "Which role is automatically assigned to any user on a server and assigned to a database?",
    image: null,
    options: ["Default", "Guest", "Public", "User"],
    correct: [2],
    explanation: "The Public role is assigned to every user on a server and also exists at the database level (Permission of Roles (2))."
  }
];