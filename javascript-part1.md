---

layout: home
title: "Core Lab Interaction, JS, Part 1"
permalink: /javascript-1/

---

[Home](/)

# Javascript Part 1

## Javascript 
Javascript is a programming language. This means it gives websites interactivity (interactivity not only meaning reactionary to a user, but also reactionary towards content, setting, size, etc).

Javascript was designed and written in May of 1995 to syntactically mirror languages like Java. It was originally released by the company _Netscape Communications_ under the name of _LiveScript_. It was quickly renamed _JavaScript_ (which caused some confusion) as a marketing ploy to give it a buzz (according to [Wikipedia](https://en.wikipedia.org/wiki/JavaScript) of course...). 

In 2005, Jesse James Garret coined _Ajax_— a method of creating web applications where data can be loaded in the background, avoiding the need for full page reloads and leading to more dynamic applications. Basically, it allowed for the field of &ldquo;UI/UX&rdquo; to exist (Facebook was founded around the same time— the notion of a web &ldquo;product&rdquo; coincides with this invention).

# Table of Contents 
- [Loading your JS](#loading-your-js)
- [Datatypes](#datatypes)
- [If Statement](#if-statement)
- [Function](#function)
- [Methods](#methods)

# Basics 

## Loading your JS

We use the `<script>` tag to connect our HTML page with our JavaScript file as follows: 

`<script type="text/javascript" src="path/file.js"></script>`

We can also include javascript within a script tag: 

`<script type="text/javascript"> var myvar = "your javascript here"; </script>`

![](/materials/loading-scripts.png)

## Datatypes

There are four primary data types in Javascript. 

string: `"string"`

number: `200`

boolean: `true`

array: `["an", "array", "is", "another", "data type"]`

## Strings

Strings are used to store textual information. 

We can have strings `"in double quotes"` or in `'single quotes'`. The main thing is not to have them `"in mixed quotes'`.

## Quotes in Strings

Invert quote type: 

`"this string can 'say something in quotes' like this"`

Escaped quote type: 

`"this string can \"say something in quotes\" like this"`


## HTML Entities (Unicode)
Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.

We often use Unicode to represent symbols that aren&rsquo;t (aren`&rsquo;`t) supported by HTML&rsquo;s standard Latin character set.

`"&ldquo;financial pain points&rdquo; a security deposit to rent an apartment" `

`&ldquo; => “`

`&rdquo; => ”`

`&lsquo; => ‘`

`&rsquo; => ’`

## Numbers

Numbers are used to represent numerical data.

Integer: `36`

Float: `1.2345`

## Booleans

Booleans are used to represent a binary value (true or false).

Booleans come as either `true` or `false`

# Arrays

Arrays can be thought of as lists of data types. A collection of information— potentially with mixed values.

The basic format of an array starts with `[`, ends with `]`, and has each value separated by a `,`. Whitespaces are ignored but help with legibility. 

## Array Examples

Empty array: `[]`

Single element: `["one"]`

Multiple elements: `["one", 2, "three", 4.5]`

Array Indexing `[]` + number = index into array

JavaScript is a zero indexed language:

`["red", "white", "blue"][0] => "red"`

`["red", "white", "blue"][1] => "white"`

`["red", "white", "blue"][2] => "blue"`

## Array Details

Array length: `["red", "white", "blue"].length => 3`

Note: First element at zero, last element at one less than array length.

## Variables

Declaration: `var myVariable;` (returns `undefined`)

Assignment: `myVariable = 3;`

Declaration and Assignment: `var myVariable = 3;`

Reassignment: 

`var className = 'Web Advanced'`

`className = 'Web Advanced: Javascript'`

## Console Logging

Console logging is useful to return values and test if your code is working. `console.log` will probably be your #1 javascript debugging tool. 

`console.log("Hello world");`

Console log accepts any variable or data type. Multiple values can be strung together, separated with a comma:

`console.log(myVar, "Hello", 7);`

The Chrome JavaScript Console, accessed via View > Developer > JavaScript Console (or alt+cmd+I):


## Relational Operators

Less than: `<`

Greater than: `>`

Less than or equal to: `<=`

Greater than or equal to: `>=`

## Relational Examples

```javascript

1 < 2
// true


2 <= 1
// false


1 <= 1
// true


var myNum = 4;
var altNum = 6;
myNum < altNum
// true


1 > 1
// false

```

## Equality

```javascript

// == data type-converting comparison

2 == 2 // true

3 == 2 // false

"hi" == "hi" // true

"2" == 2 // true

// === strict comparison

"2" === 2 // false

2 === 2 // true


// != not equal (type-converting comparison)

2 != "2" //false

2 != 2 // false

2 != 3 // true

// !== strict comparison

2 !== "2" // true

2 !== 2 // false

2 !== 3 // true


```

# If Statement

```javascript

if(true){
	// do something
}

if(false){
	// do something else
}

```

## If/else Statement

```javascript

if(true){
	// do something
}else {
	// do something else
}

```


## If/else if Statement

```javascript

if(true){

	// do something

}else if(false) {

	// do something

}else{
	// do something else
}

```




## And (&&)

```javascript

var name = "lukas",
	school = "parsons";

if(name == "lukas" && school == "parsons"){

	console.log("that's me!");

}

```


## Or (||)

```javascript

var overSixteen = true,
	parentsPresent = false;

if (overSixteen || parentsPresent) {
   console.log('Amazing...you can go to an R-rated movie.');
}

```

## Basic Math

Addition: `1 + 1 = 2`

Subtraction: `1 - 1 = 0`

Multiplication: `5 * 3 = 15`

Division: `10 / 2 = 5`

Order of operations: `(10 + 2)/6 = 2`, `10 + 2/6 = 10.3333334`

Modulus: `4 % 2 = 0`, `5 % 2 = 1` (a modulus gives the remainder— good for determining odds/evens, etc)


## Increment/Decrement (++, --)

Increment:

`myVar = myVar + 1;`

`myVar++;`

Decrement:

`myVar = myVar - 1;`

`myVar--;`

<hr>

# Function
A function is a specific set of reusable tasks. 
A function allows you to input parameters and execute a task. 

## Function syntax

```javascript

    function functionName(arg1, arg2) {
       // body of function

    }

```

`function`: keyword, like `var`

The body is for execution, like an if statement `{}`

## Running Functions

```javascript

    function myFunction() {
      console.log("Hello world!");
    }

    myFunction();
    // use of parenthesis actually calls the function


    myFunction;
    // just outputs the function definition

```


## Input Parameters

In order to re-use functions in various settings, you may want to set up parameters with which the function can operate:

```javascript

    function addNumbers(num1, num2) {
      var sum = num1 + num2;
      console.log(sum);
    }

    addNumbers(4, 5);
    // returns 9 to the console


    addNumbers(10, 12);
    // returns 22 to the console


```

## Returning Data

We often want to directly use the data the function creates. The `return` method does just that.

```javascript

    function add(num1, num2) {
      var sum = num1 + num2;
      return sum;
    }

    add(1, 2);
    // returns 3

    var sum = add(40, 50);

```


# Events

[Events](https://developer.mozilla.org/en-US/docs/Web/Events) are notifications in your code that an action has taken place.

"Things that have taken place in the browser" for us, this mainly means user interactions, but also small things like loading:

```javascript

object.onclick = function(){ };
object.onmouseout = function(){ };
object.onmouseout = function(){ };

```

# Methods

A JavaScript method is a property containing a function definition: a method is something you can enact onto a variable.

## Adding Classes

```javascript

var myElement = document.getElementById("myElementsId")

console.log(myElement.classList)

myElement.classList.remove("myFirstClass")
myElement.classList.add("aNewClass")
myElement.classList.toggle("aConditionalClass")

```

## Setting CSS in Javascript

```javascript

var myElement = document.getElementById("myElementsId")

myElement.style.color = "red";
myElement.style.backgroundColor = "#00ff00";
myElement.style.height = "10px";

```

[Javascript, Part 2](/javascript-2)