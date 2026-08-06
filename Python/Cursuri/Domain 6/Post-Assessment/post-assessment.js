/* ===================================================================
   Domain 6 — Post-Assessment — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare).
   ⚠️ Variabila trebuie declarată cu "var" (nu "const"/"let") — vezi
   README secțiunea 5.
   =================================================================== */

var QUESTIONS_D6_POST = [
  {
    id: "d6_post_01",
    type: "single",
    question: "Refer to the image. What number will print as a result of the operation on line 14?",
    image: "621-math.png",
    options: [
      "-12",
      "-13",
      "12",
      "-12.5"
    ],
    correct: [0],
  },
  {
    id: "d6_post_02",
    type: "single",
    question: "Refer to the image. What will line 7 of this code do?",
    image: "612-os.png",
    options: [
      "Return the same list of text files",
      "Add the 601-message.txt file",
      "Rename the 601-message.txt file",
      "Delete the 601-message.txt file"
    ],
    correct: [2],
  },
  {
    id: "d6_post_03",
    type: "single",
    question: "Refer to the image. What does the output from this code mean?",
    image: "613-ospath.png",
    options: [
      "The indicated file has been deleted",
      "The indicated file does exist",
      "The indicated file does not exist",
      "The indicated file has been created"
    ],
    correct: [1],
  },
  {
    id: "d6_post_04",
    type: "single",
    question: "Refer to the image. What must be done in order to fix the error message?",
    image: "623-random.png",
    options: [
      "Change line 1 to import randint",
      "Change the content in the parentheses on line 3 to (0,20)",
      "Add quotation marks around randint on line 3",
      "On line 2, change range to int"
    ],
    correct: [0],
  },
  {
    id: "d6_post_05",
    type: "single",
    question: "Refer to the image. What is line 3?",
    image: "614-command.png",
    options: [
      "A placeholder",
      "A method",
      "A list",
      "A loop"
    ],
    correct: [0],
  },
  {
    id: "d6_post_06",
    type: "match",
    question: "Drag each random method to its description.",
    image: null,
    pairs: [
      "Rearranges the order of a list",
      "Selects a value at random from a list of values",
      "Returns multiple random values from a list"
    ],
    options: [
      "choice",
      "shuffle",
      "sample"
    ],
    correct: ["shuffle", "choice", "sample"],
  },
  {
    id: "d6_post_07",
    type: "match",
    question: "Drag each random method to its description.",
    image: null,
    pairs: [
      "Returns a number between the first number in the range and the last number minus 1",
      "Returns an integer between two specified numbers, inclusive of the last number in the range",
      "Returns a floating point decimal between 0 and 1"
    ],
    options: [
      "randrange",
      "randint",
      "random"
    ],
    correct: ["randrange", "randint", "random"],
  },
  {
    id: "d6_post_08",
    type: "match",
    question: "Drag each math function to its description.",
    image: null,
    pairs: [
      "Returns the square root of the number",
      "Returns the numerical value of pi",
      "Returns the mantissa and exponent of a number"
    ],
    options: [
      "frexp",
      "pi",
      "sqrt"
    ],
    correct: ["sqrt", "pi", "frexp"],
  },
  {
    id: "d6_post_09",
    type: "match",
    question: "Drag each math function to its description.",
    image: null,
    pairs: [
      "Returns a number's absolute distance from zero",
      "Returns the next integer up after a decimal number",
      "Returns an integer without a decimal number",
      "Returns the remainder from dividing two numbers"
    ],
    options: [
      "floor",
      "fmod",
      "ceil",
      "fabs"
    ],
    correct: ["fabs", "ceil", "floor", "fmod"],
  },
  {
    id: "d6_post_10",
    type: "blank",
    question: "Please fill in the blank below.<br><br>Input the missing field to find the current date and time.<br><br><code>current_time = datetime.datetime.{{1}}()<br>print(\"The current date and time is:\", current_time)</code>",
    image: null,
    options: [],
    correct: ["now"],
  },
  {
    id: "d6_post_11",
    type: "single",
    question: "When using the strftime method, which argument will show the day of the week?",
    image: null,
    options: [
      "(%A)",
      "(%p)",
      "(%f)",
      "(%H)"
    ],
    correct: [0],
  },
  {
    id: "d6_post_12",
    type: "blank",
    question: "Please fill in the blank below.<br><br>Input the missing code to import the io library.<br><br><code>import {{1}}<br><br>game_stream = io.StringIO()<br>game_stream.write(\"The game has started.\\n\")<br>game_stream.write(\"Here is your first question.\\n\")<br>game_stream.seek(0)<br>print(game_stream.read())</code>",
    image: null,
    options: [],
    correct: ["io"],
  },
  {
    id: "d6_post_13",
    type: "match",
    question: "Drag each math function to its description.",
    image: null,
    pairs: [
      "Checks to see if a variable or expression is not a number",
      "Returns the integer of the square root of a number",
      "Returns a number raised to the power of another number"
    ],
    options: [
      "isnan",
      "isqrt",
      "pow"
    ],
    correct: ["isnan", "isqrt", "pow"],
  },
  {
    id: "d6_post_14",
    type: "match",
    question: "Drag each Python module to its appropriate description.",
    image: null,
    pairs: [
      "Allows one to store data and then read it from memory",
      "Allows a programmer to work within an operating system to perform actions in Python",
      "Allows one to import other modules, manage files, run command-line arguments, and work with system-based commands"
    ],
    options: [
      "os module",
      "sys module",
      "io module"
    ],
    correct: ["io module", "os module", "sys module"],
  },
];
// OBSERVAȚII:
// - d6_post_05: The option "A placeholder" is marked as correct, even though "sys.argv[1]" is technically an element of a list. This is the expected answer in the context of GMetrix's explanation of command-line arguments.
