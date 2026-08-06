var EXAM_TITLE = "Examen 1";
var EXAM_ID = "Python_exam1";
var EXAM_QUESTIONS = [
  {
    id: "ex1_01",
    type: "dropdown",
    question: "A developer is building a unit test and needs help determining the built-in module required, how to check whether the unit test is run as the main module, and how to evaluate if two values are equal to each other.<br><br>Using the dropdown arrows, select the code needed to finish building the unit test.<br><br>import unittest<br>a = 3<br>b = 6<br><br>class Test_Example_UnitTest(unittest {{1}}):<br>&nbsp;&nbsp;&nbsp;&nbsp;def test_equal(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.{{2}} (2 + 8, a + b)<br><br>if {{3}} == '__main__':<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()",
    image: null,
    options: [
      ["TestCase", "Test", "Assert"],
      ["assertEqual", "assertTrue", "assertIn"],
      ["__name__", "_name_", "name"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_02",
    type: "dropdown",
    question: "A developer wants to make sure a serial number cannot be used in a calculation and that a dollar amount entered as a whole number can have decimals.<br><br>Then, a message should be displayed to tell a customer the serial number and price for the product exactly as follows:<br><br>The serial number of the product is 55555 and it will cost 44.0.<br><br>Using the dropdown arrows, fill in the code to use the proper functions to convert the data to the necessary data types.<br><br>serialnumber = {{1}} (55555)<br><br>amount = {{2}} (44)<br><br>print (\"The serial number of the project is\" {{3}} \".\")",
    image: null,
    options: [
      ["str", "string", "text"],
      ["float", "fl", "decimal", "double"],
      [" + serialnumber + \" and it will cost \" + str(amount) +", " & serialnumber & \" and it will cost \" & str(amount) &", " serialnumber ; \" and it will cost \" ; str(amount) ;"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_03",
    type: "dropdown",
    question: "The following code example does a simple calculation to divide two numbers. You want to handle any errors gracefully and ensure that the last print statement always prints, even if there is an error.<br><br>Using the dropdown arrows, fill in the missing keywords in the code to accomplish this.<br><br>{{1}}<br>&nbsp;&nbsp;&nbsp;&nbsp;x = float(input(\"Enter a number. \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;y = float(input(\"Enter a number to divide by. \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"The answer is {x/y}.\")<br>{{2}}<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Uh oh. Did you enter something besides a number? Did you try to divide by zero?\")<br>{{3}}<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You successfully played the division game.\")<br>{{4}}<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Thank you for playing.\")",
    image: null,
    options: [
      ["try:", "else:", "except:", "finally:"],
      ["except:", "try:", "else:", "finally:"],
      ["else:", "try:", "except:", "finally:"],
      ["finally:", "try:", "else:", "except:"]
    ],
    correct: [0, 1, 0, 0]
  },
  {
    id: "ex1_04",
    type: "dropdown",
    question: "A game developer is testing some random number generators. The results should be as follows:<br><br>&bull; result1 should have a random country from a list of countries<br>&bull; result2 should display the list in a random order<br>&bull; result3 should display two random countries from a list of countries<br><br>Using the dropdown arrows, complete the code to generate the proper random numbers for each variable.<br><br>{{1}}<br>countries = ['USA', 'Canada', 'Mexico', 'Japan', 'Spain', 'Kenya']<br>result1 = random.{{2}}<br>result2 = random.{{3}}<br>result3 = random.{{4}}",
    image: null,
    options: [
      ["import random", "import shuffle", "import choice", "import sample"],
      ["choice(countries)", "shuffle(countries)", "sample(countries, 2)"],
      ["shuffle(countries)", "choice(countries)", "sample(countries, 2)"],
      ["sample(countries, 2)", "shuffle(countries)", "choice(countries)"]
    ],
    correct: [0, 0, 0, 0]
  },
  {
    id: "ex1_05",
    type: "dropdown",
    question: "The code needs to print the number of minutes to walk per day, starting with 10 minutes in week 1 and 50 minutes by week 5.<br><br>Select the correct line of code for the iteration.<br><br>{{1}} :<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"You should walk for {week * 10} minutes in {week}\")",
    image: null,
    options: [
      ["for week in range(1, 6)", "for minutes in range(1, 50)", "for week in range(6, 1)", "while week in range(6, 1)", "while week in range(1, 6)"]
    ],
    correct: [0]
  },
  {
    id: "ex1_06",
    type: "truefalse",
    question: "Evaluate each situation regarding data types and answer Yes if it is true or No if false.",
    image: null,
    options: [],
    statements: [
      "Python makes the distinction between integers and floating variables.",
      "When declaring variables in Python, a data type must be specified.",
      "When setting a Boolean variable, the value must start with a capital letter."
    ],
    labels: ["Yes", "No"],
    correct: [0, 1, 0]
  },
  {
    id: "ex1_07",
    type: "truefalse",
    question: "Using these variables, indicate Yes if the calculation is true and No if false.<br><br>a = 10<br>b = 7<br>c = 5",
    image: null,
    options: [],
    statements: [
      "a > b and b > c",
      "a >= c and not (b+ c > a)",
      "a + b * c == 85 or a - b * c == 15"
    ],
    labels: ["Yes", "No"],
    correct: [0, 1, 0]
  },
  {
    id: "ex1_08",
    type: "truefalse",
    question: "For each statement regarding the values of these variables, indicate Yes if the statement is true and No if false.<br><br>a = 5<br>b = 2<br>c = 3<br>a**= b<br>b*= c<br>a//=b",
    image: null,
    options: [],
    statements: [
      "c == 3",
      "b == 6",
      "a == 1"
    ],
    labels: ["Yes", "No"],
    correct: [0, 0, 1]
  },
  {
    id: "ex1_09",
    type: "single",
    question: "The code example is used to calculate a subtotal for an order.<br><br>What is the amount of order1?<br><br>def calcTotal(taxable, amount, salesTax, shipping):<br>&nbsp;&nbsp;&nbsp;&nbsp;if taxable == \"Yes\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = amount + (1 * salesTax) + shipping<br>&nbsp;&nbsp;&nbsp;&nbsp;elif shipping == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = amount + shipping<br>&nbsp;&nbsp;&nbsp;&nbsp;return subtotal<br>order1 = calcTotal(\"No\", 500, .07, 0)<br>print (\"Your order total is \", order1)",
    image: null,
    options: ["An error is raised", "500", "500.07", "535"],
    correct: [0]
  },
  {
    id: "ex1_10",
    type: "multi",
    question: "Which statements about the code, which writes a message to an existing log file at the start of each day, are true? (Choose two)<br><br>with open('log.txt', 'w') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write('Daily Log')<br>&nbsp;&nbsp;&nbsp;&nbsp;file.close()",
    image: null,
    options: ["The close function is not needed.", "The log file is overwritten each time it is opened.", "A file.open() statement needs to be added at the beginning of the with statement.", "The text in the write function adds itself to the end of the log file."],
    correct: [0, 1]
  },
  {
    id: "ex1_11",
    type: "order",
    question: "A developer needs to build a data structure with animals and then sort the structure. Using drag and drop, drag the following lines of code into the correct order to produce this output:<br><br>Bears<br>Jaguars<br>Lions<br>Panthers",
    image: null,
    options: ["animals = [\"Bears\", \"Panthers\", \"Lions\"]", "animals.append(\"Jaguars\")", "animals.sort()", "for animal in animals:", "print(animal)"],
    correct: [0, 1, 2, 3, 4]
  },
  {
    id: "ex1_12",
    type: "match",
    question: "A new developer is learning about built-in modules and methods used. Specifically, the developer needs to know the modules used to open text files, find the mean from a series of test scores, make directories, and exit a gaming app when the game is over.<br><br>Using drag and drop, match each method with its built-in module.",
    image: null,
    options: [],
    pairs: [
      { left: "os", right: "mkdir()" },
      { left: "io", right: "open()" },
      { left: "sys", right: "exit()" },
      { left: "math", right: "ceil()" }
    ],
    correct: [0, 1, 2, 3]
  },
  {
    id: "ex1_13",
    type: "order",
    question: "Use drag and drop to build code in the order that will do the following. Not every line of code will be used.<br><br>&bull; Store the actual value of pi in a variable called pi<br>&bull; A user will enter the radius of the circle and needs an option to have the radius carried out to decimal places<br>&bull; Use pi to calculate the area of a circle and store it in a variable called area<br>&bull; Print the result (the area), formatted to two decimal places",
    image: null,
    options: ["import math", "pi = math.pi", "radius = float(input(\"Enter a radius for a circle.\"))", "area = pi * radius ** 2", "print(f\"A circle with a radius of {radius} will have an area of %.2f\" %area)"],
    correct: [0, 1, 2, 3, 4]
  },
  {
    id: "ex1_14",
    type: "blank",
    question: "Evaluate the following partial code snippet:<br><br>cities = ['Anchorage', 'Juneau', 'Fairbanks', 'Ketchikan', 'Sitka', 'Wasilla']<br>for city in cities:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'{city} is a famous Alaskan city.')<br>&nbsp;&nbsp;&nbsp;&nbsp;if city == 'Ketchikan':<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br><br>Numerically, how many cities from the list will print?<br><br>Answer: {{1}}",
    image: null,
    options: [],
    correct: ["4"]
  },
  {
    id: "ex1_15",
    type: "single",
    question: "For the following function, which code example properly calls the function and returns a calculation stored in a variable called order_total?<br><br>def subtotal(order_amt, sales_tax):<br>&nbsp;&nbsp;&nbsp;&nbsp;subtotal = float(order_amt) * (1 + float(sales_tax))<br>&nbsp;&nbsp;&nbsp;&nbsp;return subtotal",
    image: null,
    options: ["order_total = subtotal(500,.07)", "order_total = call subtotal(500,.07)", "order_total(subtotal(500,.07))", "order_total = def subtotal(500, .07)"],
    correct: [0]
  },
  {
    id: "ex1_16",
    type: "multi",
    question: "Analyze this code example:<br><br>pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]<br>pieces.sort()<br><br>Which two commands will display the rook?",
    image: null,
    options: ["print(pieces[5])", "print(pieces[6])", "print(pieces[-1])", "print(pieces[3])"],
    correct: [0, 2]
  },
  {
    id: "ex1_17",
    type: "dropdown",
    question: "Use the dropdown arrows to match the correct operator to the result of each variable calculation using these values.<br><br>a = 10<br>b = 3<br><br>a {{1}} b = 13<br>a {{2}} b = 7<br>a {{3}} b = 3.33<br>a {{4}} b = 3<br>a {{5}} 3 = 1",
    image: null,
    options: [
      ["+", "-", "/", "//", "%"],
      ["-", "+", "/", "//", "%"],
      ["/", "+", "-", "//", "%"],
      ["//", "+", "-", "/", "%"],
      ["%", "+", "-", "/", "//"]
    ],
    correct: [0, 0, 0, 0, 0]
  },
  {
    id: "ex1_18",
    type: "order",
    question: "Using drag and drop, drag over the lines of code that will accomplish the following:<br><br>&bull; Open the shirts file in a mode to where it cannot be written to<br>&bull; Read the contents of the entire file<br>&bull; Print the contents of the entire file<br><br>Not every line of code will be used.",
    image: null,
    options: ["shirtFile = open(\"shirts.txt\", \"r\")", "shirtFileContents = shirtFile.read()", "print(shirtFileContents)"],
    correct: [0, 1, 2]
  },
  {
    id: "ex1_19",
    type: "dropdown",
    question: "You are trying to loop through some values retrieved from a list. You want the list to keep printing these values, but if the list sees a value of \"end of day\", then the printing should stop.<br><br>Select the missing code examples to finish writing this code block.<br><br>schedule = [\"Opening Comments\", \"Breakfast\", \"Breakout Session 1\", \"Lunch\", \"Breakout Session 2\", \"End of Day\", \"Opening Comments\", \"Breakfast\"]<br>scheduledEvent = 0<br>{{1}} (scheduledEvent &lt; len(schedule)):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(schedule[scheduledEvent])<br>&nbsp;&nbsp;&nbsp;&nbsp;if schedule[scheduledEvent] == \"End of Day\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{2}}<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{3}}",
    image: null,
    options: [
      ["while", "do", "for", "if"],
      ["break", "stop", "end", "continue"],
      ["scheduledEvent += 1", "break", "continue", "scheduledEvent"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_20",
    type: "order",
    question: "A junior programmer wants to have a user input North, South, East, or West and display the entry on screen. In addition, the developer wants to require the user to try again if the entry does not match one of the options.<br><br>Using drag and drop, place the code lines in the correct order. Location should be the first variable declared.",
    image: null,
    options: ["location = [\"North\", \"South\", \"West\", \"East\"]", "response = input(\"Enter North, South, West, or East for a location.\")", "while response not in location:", "print(\"Try again.\")", "response = input(\"Enter North, South, West, or East for a location.\")", "print(response)"],
    correct: [0, 1, 2, 3, 4, 5]
  },
  {
    id: "ex1_21",
    type: "dropdown",
    question: "Using the dropdown arrow, add the symbol needed to get the number of items to print instead of {items}.<br><br>The following code example, as is, prints \"You have {items} items in stock\" instead of the number of items in stock.<br><br>price = 9.95<br><br>items = 15<br><br>print({{1}}\"We have {items} items in stock.\")",
    image: null,
    options: [
      ["f", "\\", "format", "%"]
    ],
    correct: [0]
  },
  {
    id: "ex1_22",
    type: "dropdown",
    question: "Complete the code example to build a function that does the following:<br><br>&bull; Its name is calcSubtotal<br>&bull; The function takes an amount and a sales tax rate and calculates a subtotal<br>&bull; The new subtotal is returned<br><br>{{1}} calcSubtotal ({{2}}):<br>&nbsp;&nbsp;&nbsp;&nbsp;subtotal = amount * (1 + salesTaxRate)<br>&nbsp;&nbsp;&nbsp;&nbsp;{{3}}",
    image: null,
    options: [
      ["def", "function calcSubtotal", "calcSubtotal"],
      ["amount, salesTaxRate", "()", "()", "(amount, subtotal, calcSubtotal)", "(amount, salesTaxRate)"],
      ["return subtotal", "return", "return amount", "return salesTaxRate"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_23",
    type: "dropdown",
    question: "Select the symbol needed for the print statement to output the sales representative on a single line.<br><br>import string<br><br>annualSales = 500000<br><br>if annualSales >= 700000:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Great year\")<br>elif annualSales >= 300000:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Decent year\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Better luck next year\")<br>print(\"Thank you for your efforts\")<br><br>print(f\"Your sales representative is Nicole, you are in the East region, {{1}}and you are based in the Potomac office.\")",
    image: null,
    options: [
      ["\\n", "\\\\", "\\", "\\t"]
    ],
    correct: [0]
  },
  {
    id: "ex1_24",
    type: "dropdown",
    question: "Select the keyword that will check to see if the word \"nine\" is part of the quote. If this code runs, it should return a value of True.<br><br>quote = \"A stitch in time saves nine\"<br>print (\"nine\" {{1}} quote)",
    image: null,
    options: [
      ["in", "of", "part", "with", "on"]
    ],
    correct: [0]
  },
  {
    id: "ex1_25",
    type: "single",
    question: "When using sys.argv[0] in a command prompt as part of running a Python app, what does the 0 represent?",
    image: null,
    options: ["The main class in the file.", "The first argument in a function.", "The file name.", "The first function in the file."],
    correct: [2]
  },
  {
    id: "ex1_26",
    type: "dropdown",
    question: "A developer is building a unit test and needs help determining the built-in module required, how to check whether the unit test is run as the main module, and how to evaluate if two values are equal to each other.<br><br>Using the dropdown arrows, select the code needed to finish building the unit test.<br><br>import unittest<br>a = 3<br>b = 6<br><br>class Test_Example_UnitTest(unittest {{1}}):<br>&nbsp;&nbsp;&nbsp;&nbsp;def test_equal(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.{{2}} (2 + 8, a + b)<br><br>if {{3}} == '__main__':<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()",
    image: null,
    options: [
      ["TestCase", "Test", "Assert"],
      ["assertEqual", "assertTrue", "assertIn"],
      ["__name__", "_name_", "name"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_27",
    type: "single",
    question: "A developer needs to write code to reverse the character output of a product code. Which variable declaration will reverse one of the product codes?",
    image: null,
    options: ["[::-1]", "[-1:]", "[:-1]", "[-1]"],
    correct: [0]
  },
  {
    id: "ex1_28",
    type: "order",
    question: "A warehouse manager has partial safety kits in inventory, but needs to make sure that the count of kits is presented as a whole number with the number of complete sets on display. Drag the appropriate function to the missing code area to convert the inventoryCount variable to a value of 19.<br><br>InventoryCount = 19.95<br>print(\"We have \" + {{1}}(InventoryCount) + \" complete units in stock.\")",
    image: null,
    options: ["int", "floor", "round", "ceil"],
    correct: [0]
  },
  {
    id: "ex1_29",
    type: "single",
    question: "The code is causing an app user to complain that the total loan amount is far lower than what is anticipated.<br><br>Choose the line of code that needs to be adjusted to calculate the loan total based on the interest rate being applied to the car loan and the license fee.<br><br>carLoan = 20000<br>intRate = 1.05<br>licenseFee = 500<br>totalLoan = carLoan + licenseFee * intRate",
    image: null,
    options: ["totalLoan = carLoan + licenseFee / intRate", "totalLoan = carLoan - licenseFee * intRate", "totalLoan = (carLoan + licenseFee) * intRate", "totalLoan = carLoan + (licenseFee * intRate)"],
    correct: [2]
  },
  {
    id: "ex1_30",
    type: "single",
    question: "For the following code, which comparison expression is evaluated last before the value is assigned to z?<br><br>x = 5<br>y = 3<br>z = x + y > 7 and x * y < 15 or x - y > 2",
    image: null,
    options: ["x - y > 2", "z =", "x + y > 7 and x * y < 15", "x * y < 15 or x - y > 2"],
    correct: [0]
  },
  {
    id: "ex1_31",
    type: "dropdown",
    question: "Select the code to read and print the text file being opened, if the file already exists. If it does not exist, print a message indicating so.<br><br>import os.path<br><br>if os.path.{{1}} ('work.txt') == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;workFile = open('work.txt', 'r')<br>&nbsp;&nbsp;&nbsp;&nbsp;workFileFirstLine = {{2}}<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"The work file is not in this folder.\")",
    image: null,
    options: [
      ["exists", "file_exists", "file", "isFile"],
      ["workFile.readline()", "workFile.read()", "workFile.seek()", "workFile.readFirst()"]
    ],
    correct: [0, 0]
  },
  {
    id: "ex1_32",
    type: "truefalse",
    question: "Using the following code values, select Yes if the Boolean statements are true, and No if false.<br><br>a = 5<br>b = 3<br>c = b<br>b = a",
    image: null,
    options: [],
    statements: [
      "a == b",
      "a is b",
      "b == 3",
      "c is b"
    ],
    labels: ["Yes", "No"],
    correct: [1, 1, 1, 1]
  },
  {
    id: "ex1_33",
    type: "single",
    question: "Which character(s) should be placed before text in a line of code to make it a comment?",
    image: null,
    options: ["'", "#", "/", "//"],
    correct: [1]
  },
  {
    id: "ex1_34",
    type: "multi",
    question: "A developer is building a code block to log the current date and time for app activity.<br><br>Which two code snippets will replace the #current date and time comment with the correct date and time?<br><br>import datetime<br>log_time = #current date and time<br>print(\"entry time: \", log_time)",
    image: null,
    options: ["datetime.datetime.strptime()", "datetime.datetime.now()", "datetime.datetime.strftime()", "datetime.datetime.today()"],
    correct: [1, 3]
  },
  {
    id: "ex1_35",
    type: "single",
    question: "A developer needs to add code to an existing app that will print a message a set number of times. However, the developer does not yet know the message, but the variables used in the loop for a message are used elsewhere in the app.<br><br>Which keyword added to the end of the code will serve as a placeholder for future text?<br><br>for x in range(1,5):",
    image: null,
    options: ["continue", "break", "while", "pass"],
    correct: [3]
  },
  {
    id: "ex1_36",
    type: "truefalse",
    question: "Evaluate each of these variables and assignments and indicate Yes if the expression is true or No if false.<br><br>a = 100 - 70 / 7<br>b = (35 % 15) // 2<br>c = -3 ** 2",
    image: null,
    options: [],
    statements: [
      "a == 90",
      "b == 2.5",
      "c == -9"
    ],
    labels: ["Yes", "No"],
    correct: [1, 1, 0]
  },
  {
    id: "ex1_37",
    type: "dropdown",
    question: "As part of a student app, messages need to accompany the following grades.<br><br>&lt;table&gt;&lt;tr&gt;&lt;th&gt;Grade&lt;/th&gt;&lt;th&gt;Message&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;100&lt;/td&gt;&lt;td&gt;Outstanding&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;90-99&lt;/td&gt;&lt;td&gt;Great&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;71-89&lt;/td&gt;&lt;td&gt;You are doing well. Strive to improve.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;70 and under&lt;/td&gt;&lt;td&gt;Study hard&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;br&gt;Use the dropdown arrows to complete the code.<br><br>if grade {{1}} 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Outstanding\")<br>elif grade {{2}} 90:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Great\")<br>elif grade {{3}} 70:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Study hard\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You are doing well. Strive to improve.\")",
    image: null,
    options: [
      ["==", ">=", ">", "<=", "<"],
      [">=", "==", ">", "<=", "<"],
      ["<=", "==", ">=", ">", "<"]
    ],
    correct: [0, 0, 0]
  },
  {
    id: "ex1_38",
    type: "dropdown",
    question: "Choose the correct lines of code to satisfy the needs of the following function:<br><br>Students with scores of 90 or higher get an A.<br>Students with scores from 80 to 89 get a B.<br>Students with scores from 70 to 79 get a C.<br>Everyone else gets an F.<br><br>def grade(score):<br>&nbsp;&nbsp;&nbsp;&nbsp;if {{1}}:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif {{2}}:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"B\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif {{3}}:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{4}}<br>&nbsp;&nbsp;&nbsp;&nbsp;return grade",
    image: null,
    options: [
      ["score >= 90:", "score > 90:", "score == 90:", "score < 100:"],
      ["80 <= score <= 89:", "score >= 80:", "score < 90:", "score <= 89:"],
      ["70 <= score <= 79:", "score >= 70:", "score < 80:", "score > 70:"],
      ["grade = \"F\"", "score < 70: grade = \"F\"", "score <= 70: grade = \"F\"", "score < 60: grade = \"F\""]
    ],
    correct: [0, 0, 0, 0]
  },
  {
    id: "ex1_39",
    type: "order",
    question: "Based on the following code, drag and drop the code execution order for the print statement.<br><br>x = 7<br>y = 4<br><br>print(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)",
    image: null,
    options: ["not x * y > 25", "x + y == 11 and not x * y > 25", "x > y and x - y >= 2", "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"],
    correct: [0, 1, 2, 3]
  },
  {
    id: "ex1_40",
    type: "dropdown",
    question: "An inventory manager needs to take data from calculations, an average inventory number in this case, and have three possible outcomes:<br><br>&bull; The nearest whole number up, represented by the upper_bound variable<br>&bull; The nearest whole number down, represented by the lower_bound variable<br>&bull; The integer of the whole number, represented by the bound variable<br><br>Using the dropdown lists, complete the code snippet to fulfill the inventory manager's need.<br><br>{{1}}<br><br>average_inventory = 77.4<br><br>upper_bound = {{2}} (average_inventory)<br><br>lower_bound = {{3}} (average_inventory)<br><br>bound = {{4}} (average_inventory)<br><br>print(upper_bound)<br>print(lower_bound)<br>print(bound)",
    image: null,
    options: [
      ["import math", "use math", "sys.math", "import sys"],
      ["math.ceil", "math.trunc", "math.round", "math.floor"],
      ["math.floor", "math.ceil", "math.trunc", "math.round"],
      ["math.trunc", "math.ceil", "math.round", "math.floor"]
    ],
    correct: [0, 0, 0, 0]
  },
  {
    id: "ex1_41",
    type: "single",
    question: "The code is an anatomy of a unit test, part of a larger block of code.<br><br>Which statement will test to see if a and b share the same memory space?<br><br>def test_memory(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = 3<br>&nbsp;&nbsp;&nbsp;&nbsp;b = a<br>&nbsp;&nbsp;&nbsp;&nbsp;#Insert assert test here",
    image: null,
    options: ["self.assertTrue(a,b)", "self.assertIs(a,b)", "self.assertEqual(a,b)", "self.assertIn(a,b)"],
    correct: [1]
  },
  {
    id: "ex1_42",
    type: "order",
    question: "Use drag and drop to place the lines of code in the correct order to accomplish the following. Not all lines of code will be used.<br><br>The messages \"Great month\" and \"Keep it going\" are printed for month sales of over 10000.",
    image: null,
    options: ["if month_sales > 10000:", "print(\"Great month\")", "print(\"Keep it going\")"],
    correct: [0, 1, 2]
  }
];