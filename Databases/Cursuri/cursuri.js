/* ===================================================================
   cursuri.js — DATELE specifice materiei Databases: doar SUBJECT și
   DOMAINS. Toată logica (sidebar, player video, teste, etc.) e în
   cursuri-engine.js, comun tuturor materiilor — NU se copiază aici.

   Structura fiecărui domeniu:
   {
     id, title,
     videoSections: [
       { section: "Nume secțiune", chapters: [ {title, src}, ... ] }
     ]
   }

   `src` e gol (""). Când primești numele fișierelor .mp4, completează-le
   cu DOAR NUMELE FIȘIERULUI (nu calea completă) — ex: "01-introduction.mp4".
   Fișierul trebuie pus în "Domain N/Videos/"; calea completă e construită
   automat de cod.
   =================================================================== */

const SUBJECT = 'Databases'; // folosit pentru namespacing în istoricul de progres

const DOMAINS = [
  {
    id: 'd1',
    title: 'Domain 1: Database Design',
    folder: 'Domain 1',
    videoSections: [
      { section: 'Introduction', chapters: [
        { title: 'How to Study for This Exam', src: 'D1001.mp4' },
      ]},
      { section: 'Database Design', chapters: [
        { title: 'Entities, Rows, and Columns', src: 'D1002.mp4' },
      ]},
      { section: 'Identify the Appropriate Primary Key', chapters: [
        { title: 'Primary Key', src: 'D1003.mp4' },
        { title: 'Composite/Compound Key 1', src: 'D1004.mp4' },
        { title: 'Composite/Compound Key 2', src: 'D1005.mp4' },
      ]},
      { section: 'Choose Data Types to Meet Requirements', chapters: [
        { title: 'Importance of Data Types', src: 'D1006.mp4' },
        { title: 'Storage Requirements', src: 'D1007.mp4' },
        { title: 'Data Types for Storing Text', src: 'D1008.mp4' },
      ]},
      { section: 'Design Relationships Between Tables', chapters: [
        { title: 'Establishing Relationships', src: 'D1009.mp4' },
        { title: 'Entity-Relationship Diagrams', src: 'D1010.mp4' },
        { title: 'Referential Integrity', src: 'D1011.mp4' },
      ]},
      { section: 'Normalize a Database', chapters: [
        { title: 'Reasons for Normalization', src: 'D1012.mp4' },
        { title: 'Third Normal Form', src: 'D1013.mp4' },
      ]},
      { section: 'Identify Data Protection Measures', chapters: [
        { title: 'Backups', src: 'D1014.mp4' },
        { title: 'Restore', src: 'D1014U.mp4' },
        { title: 'Principle of Least Privilege', src: 'D1015.mp4' },
        { title: 'Permission Grants', src: 'D1016.mp4' },
        { title: 'Permission Revokes', src: 'D1017.mp4' },
        { title: 'Permission of Roles', src: 'D1018.mp4' },
        { title: 'Permission of Roles (2)', src: 'D1019.mp4' },
      ]},
    ],
  },
  {
    id: 'd2',
    title: 'Domain 2: Database Object Management',
    folder: 'Domain 2',
    videoSections: [
      { section: 'Create, Alter, and Drop Tables', chapters: [
        { title: 'Work with Tables', src: 'D2001.mp4' },
        { title: 'NULL and NOT NULL', src: 'D2002.mp4' },
      ]},
      { section: 'Queries That Create, Alter, and Drop Views', chapters: [
        { title: 'Create, Alter, and Drop Views', src: 'D2003.mp4' },
      ]},
      { section: 'Stored Procedures and Functions', chapters: [
        { title: 'Input and Output Parameters', src: 'D2004.mp4' },
        { title: 'Return Values', src: 'D2005.mp4' },
      ]},
      { section: 'Clustered and Nonclustered Indexes', chapters: [
        { title: 'Clustered Indexes', src: 'D2006.mp4' },
        { title: 'Nonclustered Indexes', src: 'D2007.mp4' },
      ]},
    ],
  },
  {
    id: 'd3',
    title: 'Domain 3: Data Retrieval',
    folder: 'Domain 3',
    videoSections: [
      { section: 'Queries That Select Data', chapters: [
        { title: 'Join Types', src: 'D3001.mp4' },
        { title: 'Cartesian Product', src: 'D3002.mp4' },
        { title: 'Self Joins', src: 'D3003.mp4' },
        { title: 'UNIONS and INTERSECTS', src: 'D3004.mp4' },
        { title: 'DISTINCT', src: 'D3005.mp4' },
        { title: 'Column Alias', src: 'D3006.mp4' },
        { title: 'Computed Columns', src: 'D3007.mp4' },
      ]},
      { section: 'Queries That Sort and Filter Data', chapters: [
        { title: 'ORDER BY', src: 'D3008.mp4' },
        { title: 'WHERE', src: 'D3009.mp4' },
        { title: 'LIKE', src: 'D3010.mp4' },
        { title: 'BETWEEN', src: 'D3011.mp4' },
        { title: 'AND', src: 'D3012.mp4' },
        { title: 'OR', src: 'D3013.mp4' },
        { title: 'NOT', src: 'D3014.mp4' },
        { title: 'TOP', src: 'D3015.mp4' },
        { title: 'IN and NOT IN', src: 'D3016.mp4' },
        { title: 'ANY', src: 'D3017.mp4' },
        { title: 'ALL', src: 'D3018.mp4' },
        { title: 'NULL and NOT NULL Values', src: 'D3019.mp4' },
        { title: 'Comparison Operators', src: 'D3020.mp4' },
      ]},
      { section: 'Queries That Aggregate Data', chapters: [
        { title: 'GROUP BY and SUM', src: 'D3021.mp4' },
        { title: 'HAVING', src: 'D3022.mp4' },
        { title: 'MIN and MAX', src: 'D3023.mp4' },
        { title: 'COUNT and AVG', src: 'D3024.mp4' },
      ]},
    ],
  },
  {
    id: 'd4',
    title: 'Domain 4: Data Manipulation',
    folder: 'Domain 4',
    videoSections: [
      { section: 'INSERT Statements', chapters: [
        { title: 'INSERT INTO...SELECT', src: 'D4001.mp4' },
        { title: 'INSERT INTO...VALUES', src: 'D4002.mp4' },
      ]},
      { section: 'UPDATE Statements', chapters: [
        { title: 'Update Data in a Single Table', src: 'D4003.mp4' },
      ]},
      { section: 'DELETE Statements', chapters: [
        { title: 'Delete Data from a Single Table', src: 'D4004.mp4' },
        { title: 'Truncate Table', src: 'D4005.mp4' },
      ]},
    ],
  },
  {
    id: 'd5',
    title: 'Domain 5: Troubleshooting',
    folder: 'Domain 5',
    videoSections: [
      { section: 'Data Object Management Query Failures', chapters: [
        { title: 'Object Management Errors', src: 'D5001.mp4' },
      ]},
      { section: 'Data Retrieval Query Failures', chapters: [
        { title: 'Select Errors', src: 'D5002.mp4' },
      ]},
      { section: 'Data Manipulation Query Failures', chapters: [
        { title: 'Data Manipulation Errors', src: 'D5003.mp4' },
      ]},
    ],
  },
];