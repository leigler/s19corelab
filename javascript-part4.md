---

layout: home
title: "Core Lab Interaction, JS, Part 4"
permalink: /jquery/

---

[Home](/)

# Javascript Part 4: jQuery

## Table of Contents
- [Javascript Review](#javascript-review)
- [jQuery](#jquery)
- [Demo Files](/materials/03-27.zip)
- [Resources](#resources)

# Javascript Review

## Function
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

## JavaScript Objects

```javascript

    var emptyObject = {};
    //empty

    var pond = {
      location: "Central Park",
      season: "fall",
      fishCount: 12,
      toadCount: 27
    }

```

## Key Value Pairs

Javascript arrays: 

`var array = ["frog", "fish", "salamander", "toad", "cricket"]`

Javascript arrays are accessed through an indexical key `array[0] = "frog"`

Javascript objects are like an array, except their key isn&rsquo;t numerical, instead it&rsquo;s assigned:

`{ location: "Central Park" }`

Key = location, Value = Central Park.

## Object Access and Manipulation

Object access is where arrays and objects begin to differ more greatly. 

While an array is accessed like so: `array[0] = "frog"`, an object is accessed like so:

```javascript

    var pond = { location: "Central Park" }

    pond.location; // returns "Central Park"

    pond.location = "Prospect Park" // pond now stores "Prospect Park" as location


```

## Advanced Objects

Objects are especially handy as a method of storing large amounts of information. One can store any type of variable in an object, meaning you could even store an array or an object within in object!


```javascript

    var library = {

        bookshelves : {
            bookshelfOne : ["The Odyssey", "The Illiad", "The Aenied", "Antigone"],
            bookshelfTwo : ["Harry Potter and the Philosophers Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"]
        },

        magazineRack : ["Vogue", "GQ", "The Newyorker", "T Magazine", "The GentleWoman", "Fantastic Man", "TeenVogue"] 

    }


    library.bookshelves.bookshelfOne[2]; // returns "The Aeniad"

    library.magazineRack[0]; // returns "Vogue"


```

<hr>
# jQuery

&ldquo;Jquery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.&rdquo;

Essentially this means that jQuery attempts to simplify the syntax needed to get javascript to interact with the rest of your webpage. 

## Loading jQuery

```html

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript" src="your/file/path/script.js"></script>


```

## Basic Syntax

Basic syntax is: `$("<css selector>").action()`

A `$` sign to define/access jQuery

A `("<css selector>")` to "query (or find)" HTML elements

A jQuery `action()` to be performed on the element(s)


## Find elements (traverse the DOM):

`$("<css selector>");`

Manipulate those elements:

`.css()`, `.html()`

full list of methods to manipulate your selection can be found [here](https://api.jquery.com/category/manipulation/).

Think about it this way— jQuery is meant to be flexible and make things easier. What do you want to do to the element you&rsquo;ve selected? There's probably a jQuery method for it (or some combination of jQuery methods)!


## Finding elements/groups of elements

`$("<css selector>");` Returns results in array.

`$("h1");` Finds all h1 header elements.

`$(".header .nav");` Finds class .nav in .header

`$(".header, .nav");` Finds elements with class .nav and elements with class .header

`$("#header");` Finds element with ID header

## Editing HTML

`.html("<html string>")` Inserts (overwrites) HTML in selected elements:

```javascript

    // <div id="myID">testing!</div>


    $("#myID").html("more tests!");


    // returns: <div id="myID">more tests!</div>


```


`.html()` Returns all HTML of selected element as a string


```javascript

    // <div id="myID">testing!</div>


    var whatsInHere = $("#myID").html();


    // whatsInHere returns "testing!"


```


## Editing CSS

```javascript

    .css({"<propertyName>" : "<rule>",

    "<otherPropertyName>" : "<otherRule>"})

```

Changes inline CSS values for selected elements:

```javascript

    $(".myDiv").css({"background-color" : "red",
                     "color" : "white"})

```


`.css("<propertyName>")` Returns value of CSS property as a string (`$(".myDiv").css("background-color")` would return red)

A full list of how you can manipulate and return CSS values with jQuery can be found [here](https://api.jquery.com/category/css/)

## preparing the DOM in jQuery

```
  $("document").ready(function(){
    //once the document has loaded
  })

```

## Animation in jQuery

jQuery also allows you to animate transitions between css values with its `animate()` method:

```javascript

    $("#myelement").animate({
        height: "20px",
        opacity: 0.5,
        backgroundColor: "red"
    }, 5000, function(){
        // on animation completion, do something
    })


```

Animate can also change scroll positions:

```javascript

    $("body").animate({
        scrollTop: 600
    }, 1500)


```


## Iteration in jQuery

jQuery has a simplified for loop called `.each()`

Lets say that you have a set up like this: 


```html

    <div class="myDiv">some content</div>
    <div class="myDiv">more content</div>
    <div class="myDiv">further content</div>
    <div class="myDiv">just content</div>
    <div class="myDiv">greater content</div>


```

and you wanted to get all the content in a long string. You could do something like this:


```javascript

    var fullString = "";

    $(".myDiv").each(function(){

        fullString += $(this).html();

        })


    //would output: "some content more content further content just content greater content"    


```


## Some more Methods

## Hide, Show, and Remove

`.hide()`

Hides all matched elements by setting their inline style to display: none;

`.show()`

Reveals matched elements by switching their display property to block/inline;

`.remove()`

Removes the matched element(s) from the DOM entirely

## Manipulating Classes

`.addClass("className")`

Adds class to all matched elements Note: in this case, you should not use a period preceding your class name

`.removeClass("className")`

Removes class from all matched elements

`.toggleClass("className")`

Adds class if not currently applied, otherwise removes it

## DOM Insertion

`.append("content")`

Inserts content at the end of each matched element

`.prepend("content")`

Inserts content at the beginning of each matched element

## Mouse Events

```javascript
    .click(function() {
      // do stuff

    })

```
User has pressed and released the mouse button

```javascript
    .mousedown(function() {
      
    });

```
Mouse button is pressed over the element

```javascript

    .mouseup(function() {
  
    });

```

Mouse button is released over the element

```javascript
    .mousemove(function() {
      
    });
```

User has moved the mouse over the element

```javascript
    .mouseenter(function() {
      
    });
```

Mouse has entered the target element

```javascript
    .mouseleave(function() {
      
    });

```

Mouse has left the target element

## Dynamic Implications

You can insert html elements after the page has loaded:

```javascript

    for (var i = 0; i < 100; i++) {
       $("body").append("<div class='box'></div>");
    }


```

(Appends 100 `div` elements with class `.box` to the `body`.)


jQuery's `each` function has similar potential:

```javascript

    var opacity = 0,
        degrees = 0;

    $(".box").each(function() {
      opacity += .1;
      degrees += 30;
       $(this).css({"opacity" : opacity,
                    "transform" : "rotate(" + degrees + "deg)"});
    });


```

(Increases the opacity of `.box` by 10% and the rotation by 30 degrees with each iteration of the loop.)

# Conclusions
- Javascript functions can be thought of as re-usable pieces of code. You should be &ldquo;lazy&rdquo; — try writing things only once and then calling them again via their variable name. 
- jQuery is best used for manipulating items already appended to the `DOM`. Its syntax is designed to make adding, changing, and removing elements simpler.

## Resources

- [Manipulating jQuery selections](https://api.jquery.com/category/manipulation/)
- [CSS with jQuery](https://api.jquery.com/category/css/)