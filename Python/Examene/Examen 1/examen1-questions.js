/* ===================================================================
   Examen 1 — Python
   Înlocuiește array-ul de mai jos cu întrebările reale (vezi README,
   secțiunea 4, pentru schema fiecărui tip de întrebare — inclusiv
   câmpurile opționale "explanation" și "sourceImage").
   ⚠️ Variabilele trebuie declarate cu "var" (nu "const"/"let").

   Capturile-sursă (dacă folosești "sourceImage") se pun în folderul
   "Images/" de lângă acest fișier.
   =================================================================== */

var EXAM_TITLE = "Examen 1";
var EXAM_ID = "Python_exam1";
var EXAM_RANDOMIZE = false; // pune true dacă vrei amestecarea întrebărilor pentru acest test

var EXAM_QUESTIONS = [
  {
    id: "ex1_01",
    type: "dropdown",
    question: "Select the keyword that will check to see if the word \"nine\" is part of the quote. If this code runs, it should return a value of True.<br><br><code>quote = \"A stitch in time saves nine\"<br>print (\"nine\" ____ quote)</code>",
    image: null,
    options: [
      ["in", "part", "with", "on"]
    ],
    correct: ["in"],
  },
  {
    id: "ex1_02",
    type: "dropdown",
    question: "A developer wants to make sure a serial number cannot be used in a calculation and that a dollar amount entered as a whole number can have decimals.<br><br>Then, a message should be displayed to tell a customer the serial number and price for the product exactly as follows:<br><br>The serial number of the product is 55555 and it will cost 44.0.<br><br>Using the dropdown arrows, fill in the code to use the proper functions to convert the data to the necessary data types.",
    image: null,
    statements: [
      "serialnumber = ... (55555)",
      "amount = ... (44)",
      "print (\"The serial number of the project is\" ... \".\")"
    ],
    options: [
      ["str", "string", "text"],
      ["float", "f1", "decimal", "double"],
      ["+ serialnumber + \" and it will cost \" + str(amount) +", "& serialnumber & \" and it will cost \" & str(amount) &", "; serialnumber ; \" and it will cost \" ; str(amount) ;"]
    ],
    correct: ["str", "float", "+ serialnumber + \" and it will cost \" + str(amount) +"],
  },
  {
    id: "ex1_03",
    type: "dropdown",
    question: "The following code example does a simple calculation to divide two numbers. You want to handle any errors gracefully and ensure that the last print statement always prints, even if there is an error.<br><br>Using the dropdown arrows, fill in the missing keywords in the code to accomplish this.",
    image: null,
    statements: [
      "x = float(input(\"Enter a number. \"))",
      "y = float(input(\"Enter a number to divide by. \"))",
      "print(f\"The answer is {x/y}.\")",
      "print(\"Uh oh. Did you enter something besides a number? Did you try to divide by zero?\")",
      "print(\"You successfully played the division game.\")",
      "print(\"Thank you for playing.\")"
    ],
    options: [
      ["try", "else", "except", "finally"],
      ["try", "else", "except", "finally"],
      ["try", "else", "except", "finally"],
      ["try", "else", "except", "finally"]
    ],
    correct: ["try", "except", "else", "finally"],
  },
  {
    id: "ex1_04",
    type: "dropdown",
    question: "A game developer is testing some random number generators. The results should be as follows:<ul><li>result1 should have a random country from a list of countries</li><li>result2 should display the list in a random order</li><li>result3 should display two random countries from a list of countries</li></ul>Using the dropdown arrows, complete the code to generate the proper random numbers for each variable.",
    image: null,
    statements: [
      "import ...",
      "result1 = random. ...",
      "result2 = random. ...",
      "result3 = random. ..."
    ],
    options: [
      ["import shuffle", "import random", "import choice", "import sample"],
      ["choice(countries)", "shuffle(countries)", "sample(countries, 2)"],
      ["choice(countries)", "shuffle(countries)", "sample(countries, 2)"],
      ["choice(countries)", "shuffle(countries)", "sample(countries, 2)"]
    ],
    correct: ["import random", "choice(countries)", "shuffle(countries)", "sample(countries, 2)"],
  },
  {
    id: "ex1_05",
    type: "dropdown",
    question: "The code needs to print the number of minutes to walk per day, starting with 10 minutes in week 1 and 50 minutes by week 5.<br><br>Select the correct line of code for the iteration.",
    image: null,
    statements: [
      "... :<br>print(f\"You should walk for {week * 10} minutes in {week}\")"
    ],
    options: [
      ["for minutes in range(1, 50)", "for week in range(5, 1)", "for week in range(1, 6)", "while week in range(5, 1)", "while week in range(1, 6)"]
    ],
    correct: ["for week in range(1, 6)"],
  },
  {
    id: "ex1_06",
    type: "truefalse",
    question: "Evaluate each situation regarding data types and answer Yes if it is true or No if false.",
    image: null,
    statements: [
      "Python makes the distinction between integers and floating variables.",
      "When declaring variables in Python, a data type must be specified.",
      "When setting a Boolean variable, the value must start with a capital letter."
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, true],
  },
  {
    id: "ex1_07",
    type: "truefalse",
    question: "Using these variables, indicate Yes if the calculation is true and No if false.<br><br>a = 10<br>b = 7<br>c = 5",
    image: null,
    statements: [
      "a > b and b > c",
      "a >= c and not (b + c > a)",
      "a + b * c == 85 or a - b * c == 15"
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, false],
  },
  {
    id: "ex1_08",
    type: "truefalse",
    question: "For each statement regarding the values of these variables, indicate Yes if the statement is true and No if false.<br><br>a = 5<br>b = 2<br>c = 3<br>a**= b<br>b*= c<br>a//=b",
    image: null,
    statements: [
      "c == 3",
      "b == 6",
      "a == 1"
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, true, false],
  },
  {
    id: "ex1_09",
    type: "single",
    question: "The code example is used to calculate a subtotal for an order.<br><br>What is the amount of order1?<br><br><code>def calcTotal(taxable, amount, salesTax, shipping):<br>    if taxable == \"Yes\":<br>        subtotal = amount + (1 * salesTax) + shipping<br>    elif shipping == 0:<br>        pass<br>    else:<br>        subtotal = amount + shipping<br>    return subtotal<br><br>order1 = calcTotal(\"No\", 500, .07, 0)<br>print (\"Your order total is \", order1)</code>",
    image: null,
    options: [
      "An error is raised",
      "500",
      "500.07",
      "535"
    ],
    correct: [0],
  },
  {
    id: "ex1_10",
    type: "multi",
    question: "Which statements about the code, which writes a message to an existing log file at the start of each day, are true? (Choose two)<br><br><code>with open('log.txt', 'w') as file:<br>    file.write('Daily Log')<br>    file.close()</code>",
    image: null,
    options: [
      "The close function is not needed.",
      "The log file is overwritten each time it is opened.",
      "A file.open() statement needs to be added at the beginning of the with statement.",
      "The text in the write function adds itself to the end of the log file."
    ],
    correct: [0, 1],
  },
  {
    id: "ex1_11",
    type: "order",
    question: "A developer needs to build a data structure with animals and then sort the structure. Using drag and drop, drag the following lines of code into the correct order to produce this output:<br><br>Bears<br>Jaguars<br>Lions<br>Panthers",
    image: null,
    options: [
      "animals = [\"Bears\", \"Panthers\", \"Lions\"]",
      "print(animal)",
      "for animal in animals {",
      "print (animal)",
      "animals.append(\"Jaguars\")",
      "animals.add(\"Jaguars\")",
      "for animal in animals:",
      "animals.sort()"
    ],
    correct: [0, 4, 7, 6, 3],
  },
  {
    id: "ex1_12",
    type: "match",
    question: "A new developer is learning about built-in modules and methods used. Specifically, the developer needs to know the modules used to open text files, find the mean from a series of test scores, make directories, and exit a gaming app when the game is over.<br><br>Using drag and drop, match each method with its built-in module.",
    image: null,
    pairs: [
      "open()",
      "ceil()",
      "mkdir()",
      "exit()"
    ],
    options: ["os", "io", "sys", "math"],
    correct: ["io", "math", "os", "sys"],
  },
  {
    id: "ex1_13",
    type: "order",
    question: "Use drag and drop to build code in the order that will do the following. Not every line of code will be used.<ul><li>Store the actual value of pi in a variable called pi</li><li>A user will enter the radius of the circle and needs an option to have the radius carried out to decimal places</li><li>Use pi to calculate the area of a circle and store it in a variable called area</li><li>Print the result (the area), formatted to two decimal places</li></ul>",
    image: null,
    options: [
      "import math",
      "print(f\"A circle with a radius of {radius} will have an area of %2f.\" %area)",
      "print(f\"A circle with a radius of {radius} will have an area of %2d.\" %area)",
      "radius = int(input(\"Enter a radius for a circle.\"))",
      "area = pi * radius ^ 2",
      "area = pi * radius ** 2",
      "radius = float(input(\"Enter a radius for a circle.\"))",
      "pi = math.pi",
      "use math"
    ],
    correct: [0, 7, 6, 5, 1],
  },
  {
    id: "ex1_14",
    type: "blank",
    question: "Evaluate the following partial code snippet:<br><br><code>cities = ['Anchorage', 'Juneau', 'Fairbanks', 'Ketchikan', 'Sitka', 'Wasilla']<br>for city in cities:<br>    print(f'{city} is a famous Alaskan city.')<br>    if city == 'Ketchikan':<br>        break</code><br><br>Numerically, how many cities from the list will print?<br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["4"],
  },
  {
    id: "ex1_15",
    type: "single",
    question: "For the following function, which code example properly calls the function and returns a calculation stored in a variable called order_total?<br><br><code>def subtotal(order_amt, sales_tax):<br>    subtotal = float(order_amt) * (1 + float(sales_tax))<br>    return subtotal</code>",
    image: null,
    options: [
      "order_total = subtotal(500, .07)",
      "order_total = call subtotal(500, .07)",
      "order_total(subtotal(500, .07))",
      "order_total = def subtotal(500, .07)"
    ],
    correct: [0],
  },
  {
    id: "ex1_16",
    type: "multi",
    question: "Analyze this code example:<br><br><code>pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]<br>pieces.sort()</code><br><br>Which two commands will display the rook?",
    image: null,
    options: [
      "print(pieces[5])",
      "print(pieces[6])",
      "print(pieces[-1])",
      "print(pieces[3])"
    ],
    correct: [0, 2],
  },
  {
    id: "ex1_17",
    type: "dropdown",
    question: "Use the dropdown arrows to match the correct operator to the result of each variable calculation using these values.<br><br>a = 10<br>b = 3",
    image: null,
    statements: [
      "a ... b = 13",
      "a ... b = 7",
      "a ... b = 3.33",
      "a ... b = 3",
      "a ... b = 1"
    ],
    options: [
      ["+", "-", "/", "//", "%"],
      ["+", "-", "/", "//", "%"],
      ["+", "-", "/", "//", "%"],
      ["+", "-", "/", "//", "%"],
      ["+", "-", "/", "//", "%"]
    ],
    correct: ["+", "-", "/", "//", "%"],
  },
  {
    id: "ex1_18",
    type: "order",
    question: "Using drag and drop, drag over the lines of code that will accomplish the following:<ul><li>Open the shirts file in a mode to where it cannot be written to</li><li>Read the contents of the entire file</li><li>Print the contents of the entire file</li></ul>Not every line of code will be used.",
    image: null,
    options: [
      "shirtFileContents = shirtFile.read()",
      "for shirtLines in range(shirtFile):",
      "shirtFile = open(\"shirts.txt\", \"a\")",
      "shirtFile = open(\"shirts.txt\", \"r\")",
      "print(shirtFileContents)"
    ],
    correct: [3, 0, 4],
  },
  {
    id: "ex1_19",
    type: "dropdown",
    question: "You are trying to loop through some values retrieved from a list. You want the list to keep printing these values, but if the list sees a value of \"end of day\", then the printing should stop.<br><br>Select the missing code examples to finish writing this code block.",
    image: null,
    statements: [
      "... (scheduledEvent < len(schedule)):",
      "if schedule[scheduledEvent] == \"End of Day\":",
      "else:"
    ],
    options: [
      ["do", "while", "for", "if"],
      ["stop", "end", "continue", "break"],
      ["scheduledEvent", "break", "continue", "scheduledEvent += 1"]
    ],
    correct: ["while", "break", "scheduledEvent += 1"],
  },
  {
    id: "ex1_20",
    type: "order",
    question: "A junior programmer wants to have a user input North, South, East, or West and display the entry on screen. In addition, the developer wants to require the user to try again if the entry does not match one of the options.<br><br>Using drag and drop, place the code lines in the correct order. Location should be the first variable declared.",
    image: null,
    options: [
      "response = input(\"Enter North, South, West, or East for a location.\")",
      "print(\"Try again.\")",
      "while response not in location:",
      "print(response)",
      "location = [\"North\", \"South\", \"West\", \"East\"]"
    ],
    correct: [4, 0, 2, 1, 0, 3],
  },
  {
    id: "ex1_21",
    type: "dropdown",
    question: "Using the dropdown arrow, add the symbol needed to get the number of items to print instead of {items}.<br><br>The following code example, as is, prints \"You have {items} items in stock\" instead of the number of items in stock.",
    image: null,
    statements: [
      "print( ... \"We have {items} items in stock.\")"
    ],
    options: [
      ["f", "\\", "format", "%"]
    ],
    correct: ["f"],
  },
  {
    id: "ex1_22",
    type: "dropdown",
    question: "Complete the code example to build a function that does the following:<ul><li>Its name is calcSubtotal</li><li>The function takes an amount and a sales tax rate and calculates a subtotal</li><li>The new subtotal is returned</li></ul>",
    image: null,
    statements: [
      "... ... <br>    subtotal = amount * (1 + salesTaxRate)<br>    ..."
    ],
    options: [
      ["def", "function calcSubtotal", "def calcSubtotal", "calcSubtotal"],
      ["(amount, salesTaxRate)", "()", ":", "(amount, subtotal, calcSubtotal):"],
      ["return", "return amount", "return subtotal", "return salesTaxRate"]
    ],
    correct: ["def", "(amount, salesTaxRate)", "return subtotal"],
  },
  {
    id: "ex1_23",
    type: "single",
    question: "Select the symbol needed for the print statement to output the sales representative on a single line.<br><br><code>print(f\"Your sales representative is Nicole, you are in the East region, \" ... \"and you are based in the Potomac office.\")</code>",
    image: null,
    options: [
      "\\",
      "\\\\",
      "\\n",
      "\\t"
    ],
    correct: [0],
  },
  {
    id: "ex1_24",
    type: "dropdown",
    question: 'An inventory manager needs to take data from calculations, an average inventory number in this case, and have three possible outcomes:<ul><li>The nearest whole number up, represented by the upper_bound variable</li><li>The nearest whole number down, represented by the lower_bound variable</li><li>The integer of the whole number, represented by the bound variable</li></ul>Using the dropdown lists, complete the code snippet to fulfill the inventory manager’s need.',
    image: null,
    statements: [
        '...',
        'average_inventory = 77.4',
        'upper_bound = ... (average_inventory)',
        'lower_bound = ... (average_inventory)',
        'bound = ... (average_inventory)',
        'print(upper_bound)',
        'print(lower_bound)',
        'print(bound)'
    ],
    options: [
        ["import math", "use math", "sys.math"],
        ["math.ceil", "math.trunc", "math.round", "math.floor"],
        ["math.ceil", "math.trunc", "math.round", "math.floor"],
        ["math.ceil", "math.trunc", "math.round", "math.floor"]
    ],
    correct: ["import math", "math.ceil", "math.floor", "math.trunc"],
},
{
    id: "ex1_25",
    type: "single",
    question: 'The code is an anatomy of a unit test, part of a larger block of code.<br><br>Which statement will test to see if a and b share the same memory space?<br><br><code>def test_memory(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = 3<br>&nbsp;&nbsp;&nbsp;&nbsp;b = a<br>&nbsp;&nbsp;&nbsp;&nbsp;# Insert assert test here</code>',
    image: null,
    options: [
        "self.assertTrue(a,b)",
        "self.assertIs(a,b)",
        "self.assertEqual(a,b)",
        "self.assertIn(a,b)"
    ],
    correct: [1],
},
{
    id: "ex1_26",
    type: "order",
    question: 'Use drag and drop to place the lines of code in the correct order to accomplish the following. Not all lines of code will be used.<br><br>The messages <code>"Great month"</code> and <code>"Keep it going"</code> are printed for month sales of over 10000.',
    image: null,
    options: [
        'print("Great month")',
        'elif month_sales <= 10000',
        'if month_sales >= 10000',
        'if month_sales > 10000:',
        'print("Keep it going")',
        'else'
    ],
    correct: [3, 0, 4],
},
{
    id: "ex1_27",
    type: "single",
    question: 'When using <code>sys.argv[0]</code> in a command prompt as part of running a Python app, what does the 0 represent?',
    image: null,
    options: [
        "The main class in the file.",
        "The first argument in a function.",
        "The file name.",
        "The first function in the file."
    ],
    correct: [2],
},
{
    id: "ex1_28",
    type: "dropdown",
    question: 'A developer is building a unit test and needs help determining the built-in module required, how to check whether the unit test is run as the main module, and how to evaluate if two values are equal to each other.<br><br>Using the dropdown arrows, select the code needed to finish building the unit test.',
    image: null,
    statements: [
        'class Test_Example_UnitTest(unittest. ... ):',
        'self. ... (2 + 8, a + b)',
        'if ... == "main":'
    ],
    options: [
        ["TestCase", "Test", "Assert"],
        ["assertEqual", "assertTrue", "assertIn"],
        ["name", "name_", "name"]
    ],
    correct: ["TestCase", "assertEqual", "name"],
},
{
    id: "ex1_29",
    type: "single",
    question: 'A developer needs to write code to reverse the character output of a product code. Which variable declaration will reverse one of the product codes?',
    image: null,
    options: [
        "[1:-1]",
        "[-1:-1]",
        "[:-1]",
        "[-1]"
    ],
    correct: [1],
},
{
    id: "ex1_30",
    type: "dragtext",
    question: 'A warehouse manager has partial safety kits in inventory, but needs to make sure that the count of kits is presented as a whole number with the number of complete sets on display. Drag the appropriate function to the missing code area to convert the inventoryCount variable to a value of 19.<br><br><code>inventoryCount = 19.95<br>print("We have " + {{1}} (inventoryCount) + " complete units in stock.")</code>',
    image: null,
    options: ["ceil", "floor", "int", "round"],
    correct: ["int"],
},
{
    id: "ex1_31",
    type: "single",
    question: 'The code is causing an app user to complain that the total loan amount is far lower than what is anticipated.<br><br>Choose the line of code that needs to be adjusted to calculate the loan total based on the interest rate being applied to the car loan and the license fee.<br><br><code>carLoan = 20000<br>intRate = 1.05<br>licenseFee = 500<br>totalLoan = carLoan + licenseFee * intRate</code>',
    image: null,
    options: [
        "totalLoan = carLoan + licenseFee / intRate",
        "totalLoan = carLoan - licenseFee * intRate",
        "totalLoan = (carLoan + licenseFee) * intRate",
        "totalLoan = carLoan + (licenseFee * intRate)"
    ],
    correct: [2],
},
{
    id: "ex1_32",
    type: "single",
    question: 'For the following code, which comparison expression is evaluated last before the value is assigned to z?<br><br><code>x = 5<br>y = 3<br>z = x + y > 7 and x * y < 15 or x - y > 2</code>',
    image: null,
    options: [
        "x - y > 2",
        "z =",
        "x + y > 7 and x * y < 15",
        "x * y < 15 or x - y > 2"
    ],
    correct: [0],
},
{
    id: "ex1_33",
    type: "dropdown",
    question: 'Select the code to read and print the text file being opened, if the file already exists. If it does not exist, print a message indicating so.',
    image: null,
    statements: [
        "if os.path. ... ('work.txt') == True:",
        'workFileFirstLine = ...'
    ],
    options: [
        ["exists", "file_exists", "file"],
        ["workFile.readLine()", "workFile.read()", "workFile.seek()", "workFile.readline()"]
    ],
    correct: ["exists", "workFile.readline()"],
},
{
    id: "ex1_34",
    type: "truefalse",
    question: 'Using the following code values, select Yes if the Boolean statements are true, and No if false.<br><br><code>a = 5<br>b = 3<br>c = b<br>b = a</code>',
    image: null,
    statements: [
        "a == b",
        "a is b",
        "b == 3",
        "c is b"
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, true, false, false],
},
{
    id: "ex1_35",
    type: "single",
    question: 'Which character(s) should be placed before text in a line of code to make it a comment?',
    image: null,
    options: [
        '"',
        "#",
        "/",
        "//"
    ],
    correct: [1],
},
{
    id: "ex1_36",
    type: "multi",
    question: 'A developer is building a code block to log the current date and time for app activity.<br><br>Which two code snippets will replace the <code>#current date and time</code> comment with the correct date and time?<br><br><code>import datetime<br>log_time = #current date and time<br>print("Entry time: ", log_time)</code>',
    image: null,
    options: [
        "datetime.datetime.strptime()",
        "datetime.datetime.now()",
        "datetime.datetime.strftime()",
        "datetime.datetime.today()"
    ],
    correct: [1, 3],
},
{
    id: "ex1_37",
    type: "single",
    question: 'A developer needs to add code to an existing app that will print a message a set number of times. However, the developer does not yet know the message, but the variables used in the loop for a message are used elsewhere in the app.<br><br>Which keyword added to the end of the code will serve as a placeholder for future text?<br><br><code>for x in range(1, 5):</code>',
    image: null,
    options: [
        "continue",
        "break",
        "while",
        "pass"
    ],
    correct: [3],
},
{
    id: "ex1_38",
    type: "truefalse",
    question: 'Evaluate each of these variables and assignments and indicate Yes if the expression is true or No if false.<br><br><code>a = 100 - 70 / 7<br>b = (35 % 15) // 2<br>c = -3 ** 2</code>',
    image: null,
    statements: [
        "a == 90",
        "b == 2.5",
        "c == -9"
    ],
    labels: ["Yes", "No"],
    options: [],
    correct: [true, false, true],
},
{
    id: "ex1_39",
    type: "dropdown",
    question: 'As part of a student app, messages need to accompany the following grades.<br><br>Use the dropdown arrows to complete the code.<br><br><table><tr><th>Grade</th><th>Message</th></tr><tr><td>100</td><td>Outstanding</td></tr><tr><td>90-99</td><td>Great</td></tr><tr><td>71-89</td><td>You are doing well. Strive to improve.</td></tr><tr><td>70 and under</td><td>Study hard</td></tr></table>',
    image: null,
    statements: [
        'if grade ... 100:',
        'elif grade ... 90:',
        'elif grade ... 70:'
    ],
    options: [
        [">=", ">", "=="],
        [">=", ">", "=="],
        ["<", "<=", ">"]
    ],
    correct: [">=", ">=", "<="],
},
{
    id: "ex1_40",
    type: "dropdown",
    question: 'Choose the correct lines of code to satisfy the needs of the following function.<br><br>Students with scores of 90 or higher get an A.<br>Students with scores from 80 to 89 get a B.<br>Students with scores from 70 to 79 get a C.<br>Everyone else gets an F.',
    image: null,
    statements: [
        'if ... :<br>grade = "A"',
        'elif ... :<br>grade = "B"',
        'elif ... :<br>grade = "C"',
        'else:<br>...'
    ],
    options: [
        ["score > 90:", "score >= 90:", "score < 90:", "score <= 90:"],
        ["score <= 89:", "score < 90:", "score > 89:", "score >= 89:"],
        ["score >= 70:", "score <= 79:", "score < 70:", "score <= 70:"],
        ['score <= 70: grade = "F"', 'grade = "F"', 'score < 70: grade = "F"', 'score <= 60: grade = "F"']
    ],
    correct: ["score >= 90:", "score >= 89:", "score >= 70:", 'grade = "F"'],
},
{
    id: "ex1_41",
    type: "order",
    question: 'Based on the following code, drag and drop the code execution order for the print statement.<br><br><code>x = 7<br>y = 4<br>print(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)</code>',
    image: null,
    options: [
        "not x * y > 25",
        "x + y == 11 and not x * y > 25",
        "x > y and x - y >= 2",
        "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"
    ],
    correct: [0, 1, 2, 3],
}
];