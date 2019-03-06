---

layout: home
title: "Core Lab Interaction, JS, Part 3"
permalink: /javascript-3/

---

[Home](/)

# Javascript Part 3: Arrays, While and For loops

## Array

Arrays are variables that store lists of values:


```javascript

var myArray = ["orange", "banana", "apple", "pear", "strawberry"];

// getting a value in your array:

// myArray[0] = "orange"
// myArray[1] = "banana"

```

You can retrieved a value from an array through specifying its index number. Arrays start with the index 0.


## While Loops

While loops allow you to repeat the same bit of code "while" a condition is true (_!Careful, if your condition doesnt ever become false, you can crash your browser!_):

```javascript

var i = 0;

while (i < 10) {
  
  console.log(i)
  i = i + 1;

}
	
```

This can be adapted to cycle through a for loop:

```javascript

var myArray = ["orange", "banana", "apple", "pear", "strawberry"];
var myArrayLength = myArray.length;
var i = 0;

while (i < myArrayLength){

	console.log(myArray[i])
	i = i + 1;

}

// or the other way around:

var z = myArray.length - 1;

while (z >= 0){

	console.log(myArray[i])
	z = z - 1;

}

```

to combine two arrays:

```javascript

var myFirstArray = ["one", "two", "three", "four"];
var myOtherArray = ["potato", "oranges", "fish", "clementines", "eggs"];
var z = 0;

while( z < myFirstArray.length || z < myOtherArray.length){

	var combinedString = myFirstArray[z] + " " + myOtherArray[z];
	
	console.log(combinedString)

	z = z + 1;

}


```

## For Loops

For loops are an alternate method of navigating incrementally through information. For loops have more security than while loops, and are more frequently used.

```javascript

for (var i = 0; i < 10; i++) {
  
	console.log(i)

}

```

To use with an array: 


```javascript

var myArray = ["orange", "banana", "apple", "pear", "strawberry"];

for (var i = 0; i < myArray.length; i++) {
  
	console.log(myArray[i])

}

```


## Math Object

Javascript also has a `Math` object that allows you generate random numbers and manipulate values: 

```javascript

Math.random() // produces a random decimal number between 0 and 1

Math.random()*10 // a random decimal number between 0 and 10

Math.round(1.4) // rounds to the nearest integer

Math.floor(1.9) // rounds down

Math.ceil(1.2) // rounds up

Math.ceil(Math.random*10) // produces a random integer between 1 and 10

Math.abs(-10) // gives the absolute value of a number

Math.min(0, -100, 200, 2000) // returns the lowest value

Math.max(0, -100, 200, 2000) // returns the highest value

```

