var Früh = "foobar";

the variable früh is not the same as Früh because JavaScript is case sensitive.

//comments

// a one line comment
 
/* this is a longer, 
 * multi-line comment
 */
 
/* You can't, however, /* nest comments */ SyntaxError */

//declarations

var
Declares a variable, optionally initializing it to a value.
let
Declares a block-scoped, local variable, optionally initializing it to a value.
const
Declares a block-scoped, read-only named constant.

Variables or Identifiers

A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).

A variable declared using the var or let statement with no assigned value specified has the value of undefined.

ReferenceError: An attempt to access an undeclared variable results in a ReferenceError

You can use undefined to determine whether a variable has a value.
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}

The undefined value behaves as false when used in a boolean context.

var myArray = [];
if (!myArray[0]) myFunction();

The undefined value converts to NaN when used in numeric context.

var a;
a + 2;  // Evaluates to NaN

When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.

var n = null;
console.log(n * 32); // Will log 0 to the console

#Variable scope

When you declare a variable outside of any function, it is called a global variable
When you declare a variable within a function, it is called a local variable

#block scoped
if (true) {
  var x = 5;
}
console.log(x);  // x is 5

if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined

#Variable hoisting

you can refer to a variable declared later, without getting an exception. This concept is known as hoisting; variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.

/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;
 
/**
 * Example 2
 */
var myvar = 'my value';
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();

In ECMAScript 2015, let (const) does not hoist the variable to the top of the block. Referencing the variable in the block before the variable declaration results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

console.log(x); // ReferenceError
let x = 3;

#Function hoisting

For functions, only the function declaration gets hoisted to the top and not the function expression.

/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};

Global variables are in fact properties of the global object. In web pages, the global object is window, so you can set and access global variables using the window.variable syntax.

You can create a read-only, named constant with the const keyword. 

const PI = 3.14;

A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value.

However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.

const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

**Data types**
The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
Boolean. true and false.
null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
undefined. A top-level property whose value is not defined.
Number. An integer or floating point number. For example: 42 or 3.14159.
String. A sequence of characters that represent a text value. For example:  "Howdy"
Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
and Object

Objects and functions are the other fundamental elements in the language. 
You can think of objects as named containers for values, and functions as procedures that your application can perform.

**Data type conversion**

JavaScript is a **dynamically typed language**. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution.

var answer = 42;
answer = 'Thanks for all the fish...';

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"

In statements involving other operators, JavaScript does not convert numeric values to strings. 
'37' - 7 // 30
'37' + 7 // "377"

**Converting strings to numbers**
parseInt()
parseFloat()
best practice for parseInt is to always include the radix parameter. The radix parameter is used to specify which numerical system is to be used.
An alternative method of retrieving a number from a string is with the + (unary plus) operator:

'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2   
// Note: the parentheses are added for clarity, not required.

**Literals**
These are fixed values, not variables, that you literally provide in your script. 
An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]).
var coffees = ['French Roast', 'Colombian', 'Kona'];

var fish = ['Lion', , 'Angel'];  (fish[0] is "Lion", fish[1] is undefined, and fish[2] is "Angel")

var myList = ['home', , 'school', ]; //last comma is ignored
var myList = ['home', , 'school', , ]; //4 elements index 1, 3 undefined : only last comma is ignored

Understanding the behavior of extra commas is important to understanding JavaScript as a language. However, when writing your own code, explicitly declare the missing elements as undefined, as doing this increases your code's clarity and maintainability.

The Boolean type has two literal values: true and false.

Integers can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).
A decimal integer literal consists of a sequence of digits without a leading 0 (zero).
A leading 0 (zero) on an integer literal, or a leading 0o (or 0O) indicates it is in octal. Octal integers can include only the digits 0-7.
A leading 0x (or 0X) indicates a hexadecimal integer literal. Hexadecimal integers can include digits (0-9) and the letters a-f and A-F. (The case of a character does not change it's value, e.g. 0xa = 0xA = 10 and 0xf = 0xF = 15.)
A leading 0b (or 0B) indicates a binary integer literal. Binary integers can only include the digits 0 and 1.

0, 117 and -345 (decimal, base 10)
015, 0001 and -0o77 (octal, base 8) 
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binary, base 2)

A floating-point literal can have the following parts:
A decimal integer which can be signed (preceded by "+" or "-"),
A decimal point ("."),
A fraction (another decimal number),
An exponent.
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]

3.1415926
-.123456789
-3.1E+12
.1e-23

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

The first element of the car object defines a property, myCar, and assigns to it a new string, "Saturn"; the second element, the getCar property, is immediately assigned the result of invoking the function (carTypes("Honda")); the third element, the special property, uses an existing variable (sales).

var car = { manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!

var foo = {a: 'alpha', 2: 'two'};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo['a']); // alpha
console.log(foo['2']); // two

A regex literal is a pattern enclosed between slashes.
var re = /ab+c/;

A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. 

'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"

You can call any of the methods of the String object on a string literal value—JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object.

console.log("John's cat".length) 
// Will print the number of symbols in the string including whitespace. 
// In this case, 10.

[ES2015]Template literals are enclosed by the back-tick (` `)

// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
       
Using special characters in strings
'one line \n another line'
Character	Meaning
\0	Null Byte
\b	Backspace
\f	Form feed
\n	New line
\r	Carriage return
\t	Tab
\v	Vertical tab
\'	Apostrophe or single quote
\"	Double quote
\\	Backslash character
\XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
\xXX	The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
\uXXXX	The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\u{XXXXX}	Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.

var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
var home = 'c:\\temp';

var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiple lines.

Although JavaScript does not have "heredoc" syntax, you can get close by adding a line break escape and an escaped line break at the end of each line:
var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'

ECMAScript 2015 introduces a new type of literal, namely template literals. This allows for many new features including multiline strings!
var poem = 
`Roses are red, 
Violets are blue. 
Sugar is sweet, 
and so is foo.`

