##control flow and error handling##

JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application. 

The semicolon (;) character is used to separate statements in JavaScript code.
Any JavaScript expression is also a statement.

The most basic statement is a **block statement** that is used to group statements. The block is delimited by a pair of curly brackets:

{
  statement_1;
  statement_2;
  .
  .
  .
  statement_n;
}

Block statements are commonly used with control flow statements (e.g. if, for, while).

while (x < 10) {
  x++;
}

Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. 
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
the let variable declaration is block scoped. 

**Conditional statements**

if (condition) {
  statement_1;
} else {
  statement_2;
}

if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
} 


do not use the following code:
if (x = y) {
  /* statements here */
}

If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

if ((x = y)) {
  /* statements here */
}

**Falsy Values**

false
undefined
null
0
NaN
the empty string ("")

Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object. For example:

var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false

switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    ...
  default:
    statements_def
    [break;]
}

By convention, the default clause is the last clause, but it does not need to be so.

**Exception handling statements**
throw statement
try...catch statement

Types 
ECMAScript exceptions
DOMException and DOMError

throw expression;

throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };

The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. If no exception is thrown in the try block, the catch block is skipped. The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.

function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}

**The catch block**
catch (catchID) {
  statements
}

The catch block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the throw statement; you can use this identifier to get information about the exception that was thrown. JavaScript creates this identifier when the catch block is entered; the identifier lasts only for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available.

try {
  throw 'myException'; // generates an exception
}
catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

The finally block

The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.

openMyFile();
try {
  writeMyFile(theData); //This may throw an error
} catch(e) {  
  handleError(e); // If we got an error we handle it
} finally {
  closeMyFile(); // always close the resource
}

If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return statements in the try and catch blocks:

function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false

Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:

function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until 
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"

Nesting try...catch statements
You can nest one or more try...catch statements. If an inner try...catch statement does not have a catch block, it needs to have a finally block and the enclosing try...catch statement's catch block is checked for a match.

**Utilizing Error objects**
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
} catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}

**Promises**
A Promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: successful operation
rejected: failed operation.
settled: the Promise is either fulfilled or rejected, but not pending.