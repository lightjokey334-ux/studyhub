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
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D1_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical1', label: 'Practical Application Part 1', icon: '💻', questionsVar: 'QUESTIONS_D1_PRACTICAL1', folder: 'Practical Application Part 1' },
      { key: 'practical2', label: 'Practical Application Part 2', icon: '💻', questionsVar: 'QUESTIONS_D1_PRACTICAL2', folder: 'Practical Application Part 2' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'Identify Data Types',
        chapters: [
          { title: 'How to Study for this Exam', src: '' },
          { title: 'What is Python?', src: '' },
          { title: 'What Needs to be Installed', src: '' },
          { title: 'str', src: '' },
          { title: 'int', src: '' },
          { title: 'float', src: '' },
          { title: 'bool', src: '' },
          { title: 'Review on 1.1', src: '' },
        ]
      },
      {
        section: 'Analyze Data Types and Operators',
        chapters: [
          { title: 'Data Type Conversion Part 1', src: '' },
          { title: 'Data Type Conversion Part 2', src: '' },
          { title: 'Indexing', src: '' },
          { title: 'Slicing Part 1', src: '' },
          { title: 'Slicing Part 2', src: '' },
          { title: 'Construct Data Structures', src: '' },
          { title: 'Lists', src: '' },
          { title: 'List Operations', src: '' },
          { title: 'Review on 1.2 Part 1', src: '' },
          { title: 'Review on 1.2 Part 2', src: '' },
          { title: 'Review on 1.2 Part 3', src: '' },
        ]
      },
      {
        section: 'Sequence of Execution',
        chapters: [
          { title: 'Assignment Order', src: '' },
          { title: 'Comparison Order', src: '' },
          { title: 'Logical Order', src: '' },
          { title: 'Arithmetic Order', src: '' },
          { title: 'Identity Order', src: '' },
          { title: 'Containment Order', src: '' },
          { title: 'Review on 1.3', src: '' },
        ]
      },
      {
        section: 'Select Operators',
        chapters: [
          { title: 'Assignment Part 1', src: '' },
          { title: 'Assignment Part 2', src: '' },
          { title: 'Comparison', src: '' },
          { title: 'Logical', src: '' },
          { title: 'Arithmetic Part 1', src: '' },
          { title: 'Arithmetic Part 2', src: '' },
          { title: 'Identity', src: '' },
          { title: 'Containment', src: '' },
          { title: 'Review on 1.4', src: '' },
        ]
      },
    ],
  },
  {
    id: 'd2',
    title: 'Domain 2: Branching and Iteration',
    folder: 'Domain 2',
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D2_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical', label: 'Practical Application', icon: '💻', questionsVar: 'QUESTIONS_D2_PRACTICAL', folder: 'Practical Application' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'Branching Statements',
        chapters: [
          { title: 'if', src: '' },
          { title: 'elif', src: '' },
          { title: 'else', src: '' },
          { title: 'Nested and Compound Conditions', src: '' },
          { title: 'Review 2.1', src: '' },
        ]
      },
      {
        section: 'Iteration',
        chapters: [
          { title: 'while', src: '' },
          { title: 'for', src: '' },
          { title: 'break', src: '' },
          { title: 'continue', src: '' },
          { title: 'pass', src: '' },
          { title: 'Nested Loops', src: '' },
          { title: 'Loops with Compound Conditions', src: '' },
          { title: 'Review 2.2', src: '' },
        ]
      },
    ],
  },
  {
    id: 'd3',
    title: 'Domain 3: Input and Output',
    folder: 'Domain 3',
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D3_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical', label: 'Practical Application', icon: '💻', questionsVar: 'QUESTIONS_D3_PRACTICAL', folder: 'Practical Application' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'File Input and Output',
        chapters: [
          { title: 'open', src: '' },
          { title: 'close', src: '' },
          { title: 'read', src: '' },
          { title: 'write', src: '' },
          { title: 'append', src: '' },
          { title: 'Check Existence', src: '' },
          { title: 'delete', src: '' },
          { title: 'with Statement', src: '' },
          { title: 'Review 3.1', src: '' },
        ]
      },
      {
        section: 'Console Input and Output',
        chapters: [
          { title: 'Read Input from Console', src: '' },
          { title: 'Print Formatted Text Part 1', src: '' },
          { title: 'Print Formatted Text Part 2', src: '' },
          { title: 'Use Command-Line Arguments', src: '' },
          { title: 'First Half Review', src: '' },
        ]
      },
    ],
  },
  {
    id: 'd4',
    title: 'Domain 4: Code Documentation and Functions',
    folder: 'Domain 4',
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D4_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical', label: 'Practical Application', icon: '💻', questionsVar: 'QUESTIONS_D4_PRACTICAL', folder: 'Practical Application' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'Document Code Segments',
        chapters: [
          { title: 'Use Indentation', src: '' },
          { title: 'Whitespace', src: '' },
          { title: 'Comments', src: '' },
          { title: 'Documentation strings', src: '' },
          { title: 'Use Pydoc for Documentation', src: '' },
          { title: 'Review 4.1', src: '' },
        ]
      },
      {
        section: 'Function Definitions',
        chapters: [
          { title: 'Call Signatures', src: '' },
          { title: 'Default Values', src: '' },
          { title: 'return', src: '' },
          { title: 'def', src: '' },
          { title: 'Use pass in Functions', src: '' },
          { title: 'Review 4.2', src: '' },
        ]
      },
    ],
  },
  {
    id: 'd5',
    title: 'Domain 5: Errors, Exceptions and Testing',
    folder: 'Domain 5',
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D5_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical', label: 'Practical Application', icon: '💻', questionsVar: 'QUESTIONS_D5_PRACTICAL', folder: 'Practical Application' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'Analyze, Detect, and Fix Errors',
        chapters: [
          { title: 'Syntax Errors', src: '' },
          { title: 'Logic Errors', src: '' },
          { title: 'Runtime Errors', src: '' },
          { title: 'Review 5.1', src: '' },
        ]
      },
      {
        section: 'Exception Handling',
        chapters: [
          { title: 'try', src: '' },
          { title: 'except', src: '' },
          { title: 'else in Exception Handling', src: '' },
          { title: 'finally', src: '' },
          { title: 'raise', src: '' },
          { title: 'Review 5.2', src: '' },
        ]
      },
      {
        section: 'Perform Unit Testing',
        chapters: [
          { title: 'Unittest', src: '' },
          { title: 'Functions', src: '' },
          { title: 'Methods', src: '' },
          { title: 'Assert Methods', src: '' },
          { title: 'Review 5.3', src: '' },
        ]
      },
    ],
  },
  {
    id: 'd6',
    title: 'Domain 6: Modules and Problem Solving',
    folder: 'Domain 6',
    assessments: [
      { key: 'pre', label: 'Pre-Assessment', icon: '📊' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'fillblanks', label: 'Fill in the Blanks', icon: '✏️', questionsVar: 'QUESTIONS_D6_FILLBLANKS', folder: 'Fill in the Blanks' },
      { key: 'practical', label: 'Practical Application', icon: '💻', questionsVar: 'QUESTIONS_D6_PRACTICAL', folder: 'Practical Application' },
      { key: 'post', label: 'Post-Assessment', icon: '📊' },
    ],
    videoSections: [
      {
        section: 'System and Command-Line Operations',
        chapters: [
          { title: 'io', src: '' },
          { title: 'os', src: '' },
          { title: 'os.path', src: '' },
          { title: 'sys', src: '' },
          { title: 'Review 6.1', src: '' },
        ]
      },
      {
        section: 'Solve Complex Problems',
        chapters: [
          { title: 'Math', src: '' },
          { title: 'isnan, sqrt, isqrt, and pi', src: '' },
          { title: 'datetime Part 1', src: '' },
          { title: 'datetime Part 2', src: '' },
          { title: 'Random with Numbers', src: '' },
          { title: 'Random with Lists', src: '' },
          { title: 'Final Review', src: '' },
        ]
      },
    ],
  },
];
