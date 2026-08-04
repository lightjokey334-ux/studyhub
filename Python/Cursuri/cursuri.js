/* ===================================================================
   cursuri.js — DATELE specifice materiei Python: doar SUBJECT și
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

   ⚠️ De verificat: titlurile domeniilor (ex: "Domain 1: Data Types and
   Operators") sunt formulate de mine, generic, pe baza secțiunilor pe
   care mi le-ai trimis — NU sunt titluri oficiale Certiport confirmate.
   Dacă ai denumirile exacte ale celor 6 domenii din obiectivele oficiale
   ale examenului, trimite-mi-le și le înlocuiesc.
   =================================================================== */

const SUBJECT = 'Python'; // folosit pentru namespacing în istoricul de progres

const DOMAINS = [
  {
    id: 'd1',
    title: 'Domain 1: Data Types and Operators',
    folder: 'Domain 1',
    videoSections: [
      {
        section: 'Identify Data Types',
        chapters: [
          { title: 'How to Study for this Exam', src: 'D1001.mp4' },
          { title: 'What is Python?', src: 'D1002.mp4' },
          { title: 'What Needs to be Installed', src: 'D1003.mp4' },
          { title: 'str', src: 'D1004.mp4' },
          { title: 'int', src: 'D1005.mp4' },
          { title: 'float', src: 'D1006.mp4' },
          { title: 'bool', src: 'D1007.mp4' },
          { title: 'Review on 1.1', src: 'D1008.mp4' },
        ]
      },
      {
        section: 'Analyze Data Types and Operators',
        chapters: [
          { title: 'Data Type Conversion Part 1', src: 'D1009.mp4' },
          { title: 'Data Type Conversion Part 2', src: 'D1010.mp4' },
          { title: 'Indexing', src: 'D1011.mp4' },
          { title: 'Slicing Part 1', src: 'D1012.mp4' },
          { title: 'Slicing Part 2', src: 'D1013.mp4' },
          { title: 'Construct Data Structures', src: 'D1014.mp4' },
          { title: 'Lists', src: 'D1015.mp4' },
          { title: 'List Operations', src: 'D1016.mp4' },
          { title: 'Review on 1.2 Part 1', src: 'D1017.mp4' },
          { title: 'Review on 1.2 Part 2', src: 'D1018.mp4' },
          { title: 'Review on 1.2 Part 3', src: 'D1019.mp4' },
        ]
      },
      {
        section: 'Sequence of Execution',
        chapters: [
          { title: 'Assignment Order', src: 'D1020.mp4' },
          { title: 'Comparison Order', src: 'D1021.mp4' },
          { title: 'Logical Order', src: 'D1022.mp4' },
          { title: 'Arithmetic Order', src: 'D1023.mp4' },
          { title: 'Identity Order', src: 'D1024.mp4' },
          { title: 'Containment Order', src: 'D1025.mp4' },
          { title: 'Review on 1.3', src: 'D1026.mp4' },
        ]
      },
      {
        section: 'Select Operators',
        chapters: [
          { title: 'Assignment Part 1', src: 'D1027.mp4' },
          { title: 'Assignment Part 2', src: 'D1028.mp4' },
          { title: 'Comparison', src: 'D1029.mp4' },
          { title: 'Logical', src: 'D1030.mp4' },
          { title: 'Arithmetic Part 1', src: 'D1031.mp4' },
          { title: 'Arithmetic Part 2', src: 'D1032.mp4' },
          { title: 'Identity', src: 'D1033.mp4' },
          { title: 'Containment', src: 'D1034.mp4' },
          { title: 'Review on 1.4', src: 'D1035.mp4' },
        ]
      },
    ],
  },
  {
    id: 'd2',
    title: 'Domain 2: Branching and Iteration',
    folder: 'Domain 2',
    videoSections: [
      {
        section: 'Branching Statements',
        chapters: [
          { title: 'if', src: 'D2001.mp4' },
          { title: 'elif', src: 'D2002.mp4' },
          { title: 'else', src: 'D2003.mp4' },
          { title: 'Nested and Compound Conditions', src: 'D2004.mp4' },
          { title: 'Review 2.1', src: 'D2005.mp4' },
        ]
      },
      {
        section: 'Iteration',
        chapters: [
          { title: 'while', src: 'D2006.mp4' },
          { title: 'for', src: 'D2007.mp4' },
          { title: 'break', src: 'D2008.mp4' },
          { title: 'continue', src: 'D2009.mp4' },
          { title: 'pass', src: 'D2010.mp4' },
          { title: 'Nested Loops', src: 'D2011.mp4' },
          { title: 'Loops with Compound Conditions', src: 'D2012.mp4' },
          { title: 'Review 2.2', src: 'D2013.mp4' },
        ]
      },
    ],
  },
  {
    id: 'd3',
    title: 'Domain 3: Input and Output',
    folder: 'Domain 3',
    videoSections: [
      {
        section: 'File Input and Output',
        chapters: [
          { title: 'open', src: 'D3001.mp4' },
          { title: 'close', src: 'D3002.mp4' },
          { title: 'read', src: 'D3003.mp4' },
          { title: 'write', src: 'D3004.mp4' },
          { title: 'append', src: 'D3005.mp4' },
          { title: 'Check Existence', src: 'D3006.mp4' },
          { title: 'delete', src: 'D3007.mp4' },
          { title: 'with Statement', src: 'D3008.mp4' },
          { title: 'Review 3.1', src: 'D3009.mp4' },
        ]
      },
      {
        section: 'Console Input and Output',
        chapters: [
          { title: 'Read Input from Console', src: 'D3010.mp4' },
          { title: 'Print Formatted Text Part 1', src: 'D3011.mp4' },
          { title: 'Print Formatted Text Part 2', src: 'D3012.mp4' },
          { title: 'Use Command-Line Arguments', src: 'D3013.mp4' },
          { title: 'First Half Review', src: 'D3014.mp4' },
        ]
      },
    ],
  },
  {
    id: 'd4',
    title: 'Domain 4: Code Documentation and Functions',
    folder: 'Domain 4',
    videoSections: [
      {
        section: 'Document Code Segments',
        chapters: [
          { title: 'Use Indentation', src: 'D4001.mp4' },
          { title: 'Whitespace', src: 'D4002.mp4' },
          { title: 'Comments', src: 'D4003.mp4' },
          { title: 'Documentation strings', src: 'D4004.mp4' },
          { title: 'Use Pydoc for Documentation', src: 'D4005.mp4' },
          { title: 'Review 4.1', src: 'D4006.mp4' },
        ]
      },
      {
        section: 'Function Definitions',
        chapters: [
          { title: 'Call Signatures', src: 'D4007.mp4' },
          { title: 'Default Values', src: 'D4008.mp4' },
          { title: 'return', src: 'D4009.mp4' },
          { title: 'def', src: 'D4010.mp4' },
          { title: 'Use pass in Functions', src: 'D4011.mp4' },
          { title: 'Review 4.2', src: 'D4012.mp4' },
        ]
      },
    ],
  },
  {
    id: 'd5',
    title: 'Domain 5: Errors, Exceptions and Testing',
    folder: 'Domain 5',
    videoSections: [
      {
        section: 'Analyze, Detect, and Fix Errors',
        chapters: [
          { title: 'Syntax Errors', src: 'D5001.mp4' },
          { title: 'Logic Errors', src: 'D5002.mp4' },
          { title: 'Runtime Errors', src: 'D5003.mp4' },
          { title: 'Review 5.1', src: 'D5004.mp4' },
        ]
      },
      {
        section: 'Exception Handling',
        chapters: [
          { title: 'try', src: 'D5005.mp4' },
          { title: 'except', src: 'D5006.mp4' },
          { title: 'else in Exception Handling', src: 'D5007.mp4' },
          { title: 'finally', src: 'D5008.mp4' },
          { title: 'raise', src: 'D5009.mp4' },
          { title: 'Review 5.2', src: 'D5010.mp4' },
        ]
      },
      {
        section: 'Perform Unit Testing',
        chapters: [
          { title: 'Unittest', src: 'D5011.mp4' },
          { title: 'Functions', src: 'D5012.mp4' },
          { title: 'Methods', src: 'D5013.mp4' },
          { title: 'Assert Methods', src: 'D5014.mp4' },
          { title: 'Review 5.3', src: 'D5015.mp4' },
        ]
      },
    ],
  },
  {
    id: 'd6',
    title: 'Domain 6: Modules and Problem Solving',
    folder: 'Domain 6',
    videoSections: [
      {
        section: 'System and Command-Line Operations',
        chapters: [
          { title: 'io', src: 'D6001.mp4' },
          { title: 'os', src: 'D6002.mp4' },
          { title: 'os.path', src: 'D6003.mp4' },
          { title: 'sys', src: 'D6004.mp4' },
          { title: 'Review 6.1', src: 'D6005.mp4' },
        ]
      },
      {
        section: 'Solve Complex Problems',
        chapters: [
          { title: 'Math', src: 'D6006.mp4' },
          { title: 'isnan, sqrt, isqrt, and pi', src: 'D6007.mp4' },
          { title: 'datetime Part 1', src: 'D6008.mp4' },
          { title: 'datetime Part 2', src: 'D6009.mp4' },
          { title: 'Random with Numbers', src: 'D6010.mp4' },
          { title: 'Random with Lists', src: 'D6011.mp4' },
          { title: 'Final Review', src: 'D6012.mp4' },
        ]
      },
    ],
  },
];
