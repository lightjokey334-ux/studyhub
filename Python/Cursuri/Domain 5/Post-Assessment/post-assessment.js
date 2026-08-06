/* ===================================================================
   Domain 5 — Post-Assessment — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare).
   ⚠️ Variabila trebuie declarată cu "var" (nu "const"/"let") — vezi
   README secțiunea 5.
   =================================================================== */

var QUESTIONS_D5_POST = [
  {
    id: "d5_post_01",
    type: "match",
    question: "Match the assert method to its description.",
    image: null,
    pairs: [
      "Tests whether two variables use the same memory space",
      "Tests to see if a variable is an instance of a class",
      "Tests to determine if one object is part of a list of objects",
      "Tests to determine if a calculation generates an expected result"
    ],
    options: [
      "assertIsInstance",
      "assertTrue",
      "assertIs",
      "assertIn"
    ],
    correct: ["assertIs", "assertIsInstance", "assertIn", "assertTrue"]
  },
  {
    id: "d5_post_02",
    type: "single",
    question: "What does one need to know to test a function correctly?",
    image: null,
    options: [
      "How many variables exist in the dataset",
      "How many functions are in the whole set of code",
      "The origin of the data used in the function",
      "The expected results of the function"
    ],
    correct: [3]
  },
  {
    id: "d5_post_03",
    type: "single",
    question: "Refer to the image. What should one type in the blank to ensure the code on line 10 runs whether or not the code on lines 3 and 4 runs as expected?<br><br><code>figuratives = ['Simile', 'Metaphor', 'Personification', 'Hyperbole', 'Allusion']<br>try:<br>    figurative_input = int(input('Enter a number from 1-5 to get an example '))<br>    figurative = figuratives[figurative_input-1]<br>except:<br>    print('You did not enter a figurative. Try again')<br>else:<br>    print(f'You chose the {figurative} figurative and will get an example soon.')<br>print('Thank you for playing.')</code>",
    image: "524-finally.png",
    options: [
      "except",
      "try",
      "finally",
      "else"
    ],
    correct: [2]
  },
  {
    id: "d5_post_04",
    type: "match",
    question: "Match the error to its description.",
    image: null,
    pairs: [
      "Code runs but produces an unexpected result",
      "An error that occurs while executing the code",
      "An error that causes code not to run"
    ],
    options: [
      "Syntax error",
      "Logic error",
      "Runtime error"
    ],
    correct: ["Logic error", "Runtime error", "Syntax error"]
  },
  {
    id: "d5_post_05",
    type: "single",
    question: "Refer to the image. The expected result of line 5 is 6600. What is the logic error in this code?<br><br><code>score = 3000<br>bonus = score/10 #300 on this test<br>multiplier = 2<br><br>print(score + bonus * multiplier) #expecting 6600</code>",
    image: "512-logic.png",
    options: [
      "The multiplier variable is set to the wrong value",
      "Lines 1 and 2 are out of order",
      "The calculation on line 5 does not consider the order of operations",
      "The calculation on line 5 is missing a variable"
    ],
    correct: [2]
  },
  {
    id: "d5_post_06",
    type: "single",
    question: "What are methods?",
    image: null,
    options: [
      "Variables that belong to classes",
      "Classes that belong to variables",
      "Classes that belong to functions",
      "Functions that belong to classes"
    ],
    correct: [3]
  },
  {
    id: "d5_post_07",
    type: "single",
    question: "Refer to the image. What is the runtime error present in this code?<br><br><code>plant_types = ['angiosperms', 'ferns', 'mosses']<br>print(plant_types[1])<br>print(plant_types[3])</code>",
    image: "513-runtime.png",
    options: [
      "Line 1 references a list item that does not exist",
      "There is incorrect indentation on lines 2 and 3",
      "Line 3 references a list item that does not exist",
      "There are missing parentheses at the beginning of line 2 and end of line 3"
    ],
    correct: [2]
  },
  {
    id: "d5_post_08",
    type: "match",
    question: "Match the exception handling keyword to its description.",
    image: null,
    pairs: [
      "It tells an application to run a block of code when the previous block runs as expected",
      "It tells an application to run a block of code when the previous block produces an error",
      "It tells an application to run a block of code"
    ],
    options: [
      "try",
      "except",
      "else"
    ],
    correct: ["else", "except", "try"]
  },
  {
    id: "d5_post_09",
    type: "single",
    question: "Refer to the image. What should one type in the blank to ensure the code on line 8 runs if the code on lines 3 and 4 runs as expected?<br><br><code>try:<br>    figurative_input = int(input('Enter a number from 1-5 to get an example '))<br>    figurative = figuratives[figurative_input-1]<br>except:<br>    print('You did not enter a figurative. Try again')<br><br>    print(f'You chose the {figurative} figurative and will get an example soon.')</code>",
    image: "523-else.png",
    options: [
      "finally",
      "try",
      "except",
      "else"
    ],
    correct: [3]
  },
  {
    id: "d5_post_10",
    type: "match",
    question: "Match the exception handling keyword to its description.",
    image: null,
    pairs: [
      "It tells an application to run a block of code regardless of whether the previous block of code runs as expected or produces an error",
      "It helps identify and log unwanted responses in an application"
    ],
    options: [
      "finally",
      "raise"
    ],
    correct: ["finally", "raise"]
  },
  {
    id: "d5_post_11",
    type: "single",
    question: "Refer to the image. What should one type in the blank to ensure the code on line 6 runs if the code on lines 3 and 4 produces an error?<br><br><code>figuratives = ['Simile', 'Metaphor', 'Personification', 'Hyperbole', 'Allusion']<br>try:<br>    figurative_input = int(input('Enter a number from 1-5 to get an example '))<br>    figurative = figuratives[figurative_input-1]<br>except:<br>    print('You did not enter a figurative. Try again')</code>",
    image: "522-except.png",
    options: [
      "finally",
      "except",
      "else",
      "try"
    ],
    correct: [1]
  },
  {
    id: "d5_post_12",
    type: "blank",
    question: "Please fill in the blank below.<br><br>Input the missing code to perform a unittest that determines whether the variables a and b are the same.<br><br><code>def test_location(self):<br>    a = 'red'<br>    b = 'green'<br>    self{{1}}(a,b)</code>",
    image: null,
    options: [],
    correct: ["assertIs"]
  }
];
