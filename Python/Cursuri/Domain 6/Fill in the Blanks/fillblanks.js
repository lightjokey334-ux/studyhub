/* ===================================================================
   Domain 6 — Fill in the Blanks — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare — inclusiv câmpul
   opțional "explanation").
   ⚠️ Variabila trebuie declarată cu "var" (nu "const"/"let").
   =================================================================== */

var QUESTIONS_D6_FILLBLANKS = [
  {
    id: "d6_fillblanks_01",
    type: "blank",
    question: "The datetime library will need to be {{1}} to have its methods available for use.",
    image: null,
    options: [],
    correct: ["imported"],
  },
  {
    id: "d6_fillblanks_02",
    type: "blank",
    question: "The {{1}} function returns the next integer up after a decimal number.",
    image: null,
    options: [],
    correct: ["ceil"],
  },
  {
    id: "d6_fillblanks_03",
    type: "blank",
    question: "The {{1}} function checks to see if a variable or expression is or is not a number.",
    image: null,
    options: [],
    correct: ["isnan"],
  },
  {
    id: "d6_fillblanks_04",
    type: "blank",
    question: "{{1}} are often called libraries.",
    image: null,
    options: [],
    correct: ["Modules"],
  },
  {
    id: "d6_fillblanks_05",
    type: "blank",
    question: "The sys library allows one to work with system-based {{1}}, such as changing file paths.",
    image: null,
    options: [],
    correct: ["commands"],
  },
  {
    id: "d6_fillblanks_06",
    type: "blank",
    question: "The day of the week can be displayed using the weekday method or by using (%A) as part of the {{1}} method.",
    image: null,
    options: [],
    correct: ["strftime"],
  },
  {
    id: "d6_fillblanks_07",
    type: "blank",
    question: "The choice method returns one random value from a list, while the {{1}} method returns multiple random values.",
    image: null,
    options: [],
    correct: ["sample"],
  },
  {
    id: "d6_fillblanks_08",
    type: "blank",
    question: "The os.path command is used to see if a(n) {{1}} exists in a specific directory.",
    image: null,
    options: [],
    correct: ["file"],
  },
  {
    id: "d6_fillblanks_09",
    type: "blank",
    question: "The {{1}} method returns an integer between two specified numbers, including the last number in the range.",
    image: null,
    options: [],
    correct: ["randint"],
  },
  {
    id: "d6_fillblanks_10",
    type: "blank",
    question: "The os module allows a programmer to work within a(n) {{1}} system to perform actions in Python.",
    image: null,
    options: [],
    correct: ["operating"],
  },
];
// OBSERVAȚII:
// - d6_fillblanks_08: blank is "file" because the lesson typically uses os.path.isfile() to check for a file. Could also be "directory", but "file" fits the most common GMetrix answer for this sentence. 
// - d6_fillblanks_03: blank is "isnan". The math.isnan function is typically referenced as isnan in standard Python fill-in-the-blank questions.
