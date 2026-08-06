/* ===================================================================
   Domain 6 — Pre-Assessment — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare).
   ⚠️ Variabila trebuie declarată cu "var" (nu "const"/"let") — vezi
   README secțiunea 5.
   =================================================================== */

var QUESTIONS_D6_PRE = [
  {
    id: "d6_pre_01",
    type: "single",
    question: "Which random method returns multiple random values from a list?",
    image: null,
    options: ["choice", "random", "randint", "sample"],
    correct: [3],
  },
  {
    id: "d6_pre_02",
    type: "multi",
    question: "What are two uses of os.path in Python?",
    image: null,
    options: [
      "To see if a path to a directory exists",
      "To rename a file within a directory",
      "To delete a file within a directory",
      "To run command-line arguments",
      "To see if a file exists in a specific directory"
    ],
    correct: [0, 4],
  },
  {
    id: "d6_pre_03",
    type: "single",
    question: "nan and isnan are two math functions that can be used in Python.",
    image: null,
    options: ["True", "False"],
    correct: [1],
  },
  {
    id: "d6_pre_04",
    type: "single",
    question: "What does the sys module allow users to do?",
    image: null,
    options: [
      "Store data and then read it from memory instead of creating a physical file",
      "Import other modules, manage files, and run command-line arguments",
      "Work within an operating system to perform actions in Python",
      "Provides several ways to generate random numbers or a random value from a list of values"
    ],
    correct: [1],
  },
  {
    id: "d6_pre_05",
    type: "single",
    question: "Which method allows for detailed formatting of the current time?",
    image: null,
    options: ["current_time", "datetime", "strftime", "now"],
    correct: [2],
  },
];
// OBSERVAȚII:
// - d6_pre_03: "nan and isnan are two math functions that can be used in Python." -> The statement is false because math.nan is a constant, not a function. math.isnan is the actual function.
// - d6_pre_04: The option "Import other modules, manage files, and run command-line arguments" is marked as correct even though the sys module does not directly manage files (os/pathlib does that). It is selected because it includes "run command-line arguments" (sys.argv), which distinguishes it as the intended answer in this specific GMetrix question.
