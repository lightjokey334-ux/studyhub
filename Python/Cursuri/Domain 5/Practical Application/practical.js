/* ===================================================================
   Domain 5 — Practical Application — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare — inclusiv câmpul
   opțional "explanation").
   ⚠️ Variabila trebuie declarată cu "var" (nu "const"/"let").
   =================================================================== */

var QUESTIONS_D5_PRACTICAL = [
  {
    id: "d5_practical_01",
    type: "blank",
    question: "A developer wants to perform unit tests to make sure two values are equal. Using the code snippet as a starting point, fill in the name of the correct unit test for the situation.<br><br><code>def test_location(self):<br>    a = 'HQ'<br>    b = 'HQ'<br>    self.{{1}}(a, b) # Test if a and b have the same value</code>",
    image: null,
    options: [],
    correct: ["assertEqual"]
  },
  {
    id: "d5_practical_02",
    type: "single",
    question: "A divide-by-zero error is an example of which type of error?",
    image: null,
    options: [
      "Logic",
      "Syntax",
      "Runtime",
      "Raise"
    ],
    correct: [2]
  },
  {
    id: "d5_practical_03",
    type: "truefalse",
    question: "When performing a unit test on a function, one should know the expected outcome of that function to ensure the testing is accurate.",
    image: null,
    statements: [
      "When performing a unit test on a function, one should know the expected outcome of that function to ensure the testing is accurate."
    ],
    labels: ["True", "False"],
    options: [],
    correct: [true]
  },
  {
    id: "d5_practical_04",
    type: "blank",
    question: "A developer has decided to employ exception handling for running a block of code. Fill in the keyword necessary to attempt to run this block of code and later set up what to do in case this code causes an error.<br><br><code>{{1}}:<br>    a = 20<br>    b = 4<br><br>    def calc_total(x, y):<br>        return x / y<br><br>    calc_total(a,b)</code>",
    image: null,
    options: [],
    correct: ["try"]
  },
  {
    id: "d5_practical_05",
    type: "multi",
    question: "Which two types of code blocks can be paired with a try block, with at least one of them being required for the try block to run successfully?",
    image: null,
    options: [
      "except",
      "else",
      "finally",
      "raise"
    ],
    correct: [0, 2]
  },
  {
    id: "d5_practical_06",
    type: "single",
    question: "Which of the following represents only a logic error when code is run?",
    image: null,
    options: [
      "total = amount + tax * shipping_rate",
      "IndexError: list index out of range",
      "if x = 5",
      "def amount(subtotal, tax)"
    ],
    correct: [0]
  },
  {
    id: "d5_practical_07",
    type: "blank",
    question: "A developer is working on an exception-handling project. Fill in the keyword needed to handle an exception gracefully should it occur within the accompanying try block of code.<br><br><code>try:<br>    a = 20<br>    b = 4<br><br>    def calc_total(x, y):<br>        return x / y<br><br>{{1}}:<br>    print(\"This code did not work. Did you try to divide by zero?\")</code>",
    image: null,
    options: [],
    correct: ["except"]
  },
  {
    id: "d5_practical_08",
    type: "blank",
    question: "Evaluate the following code. Line numbers are only in the code for demonstration purposes. Which line number is causing a syntax error?<br><br><code>1 fruits = [\"Apple\", \"Orange\", \"Pear\"]<br>2 for fruit in fruits:<br>3 print(f\"{fruit} is a fruit.\")</code><br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["3"]
  },
  {
    id: "d5_practical_09",
    type: "single",
    question: "Which keyword is used to display a built-in or custom exception message should an instance of code cause an exception?",
    image: null,
    options: [
      "import",
      "raise",
      "exception",
      "except"
    ],
    correct: [1]
  },
  {
    id: "d5_practical_10",
    type: "single",
    question: "Which Python module must be imported to run assert tests on code?",
    image: null,
    options: [
      "assert",
      "unittest",
      "TestCase",
      "exception"
    ],
    correct: [1]
  },
  {
    id: "d5_practical_11",
    type: "blank",
    question: "A developer wants to test two variables to see if they share the same memory space. Using this code snippet as a starting point, fill in the blank with the correct unit test for the situation.<br><br><code>def test_memory(self):<br>    a = 'red' #Define the first variable<br>    b = 'red' #Define the second variable<br>    self.{{1}}(a,b) # Test if the two variables point to the same object</code>",
    image: null,
    options: [],
    correct: ["assertIs"]
  },
  {
    id: "d5_practical_12",
    type: "single",
    question: "A try block cannot run without an except block.",
    image: null,
    options: [
      "True",
      "False"
    ],
    correct: [1]
  },
  {
    id: "d5_practical_13",
    type: "single",
    question: "What do methods belong to in the overall development of a Python app?",
    image: null,
    options: [
      "Tests",
      "Frameworks",
      "Classes",
      "Functions"
    ],
    correct: [2]
  },
  {
    id: "d5_practical_14",
    type: "blank",
    question: "A developer is building unit tests and wants to run the unit tests to see if one value is contained within a list of values. Fill in the missing piece of this code snippet with the unit test that will perform this task.<br><br><code>def test_contains(self):<br>    a = 'green' #Define the value to look for<br>    b = ['red', 'green','blue'] # Define the list in which to look<br>    self.{{1}}(a, b) # Test if the value is in the list</code>",
    image: null,
    options: [],
    correct: ["assertIn"]
  },
  {
    id: "d5_practical_15",
    type: "blank",
    question: "Evaluate the following code:<br><br><code>a = 20<br>b = 4<br><br>def calc_total(x, y):<br>    return x / y</code><br><br>What kind of block can be set up to attempt to run this code and then control how the code proceeds should this code return an error?<br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["try"]
  },
  {
    id: "d5_practical_16",
    type: "blank",
    question: "Which type of error will occur when an attempt is made to run this code? Indicate your answer using all lowercase text.<br><br><code>Def calc_area(radius)<br><br>area = math.pi * radius * 2<br><br>return area</code><br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["syntax"]
  },
  {
    id: "d5_practical_17",
    type: "single",
    question: "A code block is missing a closing parenthesis at the end of a print statement. Which type of error will appear when an attempt is made to run the code?",
    image: null,
    options: [
      "logic",
      "syntax",
      "runtime",
      "raise"
    ],
    correct: [1]
  },
  {
    id: "d5_practical_18",
    type: "blank",
    question: "Examine the following code and then fill in the missing information with the type of unit test that tests whether a variable belongs to a class.<br><br><code>def test_class_variable(self):<br>    city = City()<br>    self.{{1}}(city, City) # Test if city is an instance of the City class</code>",
    image: null,
    options: [],
    correct: ["assertIsInstance"]
  },
  {
    id: "d5_practical_19",
    type: "truefalse",
    question: "Within exception handling, an else block is required.",
    image: null,
    statements: [
      "Within exception handling, an else block is required."
    ],
    labels: ["True", "False"],
    options: [],
    correct: [false]
  },
  {
    id: "d5_practical_20",
    type: "blank",
    question: "Examine the following snippet of code used to call unittests. Fill in the method needed to run unittests as part of an app's main purpose.<br><br><code>if __name__ == '{{1}}':<br>    unittest.main() #Run unittests when script is executed directly</code>",
    image: null,
    options: [],
    correct: ["__main__"]
  },
  {
    id: "d5_practical_21",
    type: "single",
    question: "A car dealership is trying to calculate a car finance charge, which is the amount of the car plus the licensing multiplied by the interest rate. However, the code shown consistently returns a lower amount than anticipated. What type of error is in this code?<br><br><code>Amount_financed = amount + licensing * interest_rate</code>",
    image: null,
    options: [
      "runtime",
      "raise",
      "syntax",
      "logic"
    ],
    correct: [3]
  },
  {
    id: "d5_practical_22",
    type: "blank",
    question: "A developer wants to run unit tests to ensure calculations are producing the desired result. Fill in the code snippet with the unit test necessary for this task.<br><br><code>def test_calc(self):<br>    self.{{1}}((a + b) * c == d) # Test if the expression evaluates to True</code>",
    image: null,
    options: [],
    correct: ["assertTrue"]
  },
  {
    id: "d5_practical_23",
    type: "blank",
    question: "Evaluate the following code:<br><br><code>temperature = float(input(\"Enter a freezing temperature \"))<br><br>if temperature > 32:<br>    ______ ValueError(\"The temperature needs to be freezing.\")<br>else:<br>    print(\"You entered a freezing temperature.\")</code><br><br>Enter the keyword needed to properly raise a value error because one enters a value out of range of the desired value for the temperature variable.<br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["raise"]
  },
  {
    id: "d5_practical_24",
    type: "blank",
    question: "A developer is attempting to run code and wants to implement exception handling. Fill in the keyword needed for the code block that will run if the try block is successful.<br><br><code>try:<br>    a = 20<br>    b = 4<br><br>    def calc_total(x, y):<br>        return x / y<br><br>    total = calc_total(a, b)<br>except:<br>    print(\"This code did not work. Did you try to divide by zero?\")<br>{{1}}:<br>    print(total)</code>",
    image: null,
    options: [],
    correct: ["else"]
  },
  {
    id: "d5_practical_25",
    type: "single",
    question: "Evaluate the following code:<br><br><code>drum_types = ['bass', 'snare', 'bass', 'timpani']<br><br>print(drum_types[4])</code><br><br>Which type of error will be raised when this code is run?",
    image: null,
    options: [
      "No error will be raised",
      "Syntax",
      "Logic",
      "Runtime"
    ],
    correct: [3]
  },
  {
    id: "d5_practical_26",
    type: "blank",
    question: "A developer is implementing exception handling. The developer wants a thank-you message to display regardless of whether a try block ran successfully. Fill in the keyword needed for the block of code containing the thank you message.<br><br><code>try:<br>    a = 20<br>    b = 4<br><br>    def calc_total(x, y):<br>        return x / y<br><br>    total = calc_total(a, b)<br>except:<br>    print(\"This code did not work. Did you try to divide by zero?\")\nelse:<br>    print(total)<br>{{1}}:<br>    print(\"Thank you for playing.\")</code>",
    image: null,
    options: [],
    correct: ["finally"]
  }
];
