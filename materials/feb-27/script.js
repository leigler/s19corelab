console.log("hello!")

var number = -3.5;
	console.log(number)
	number = number + 5;
	console.log(number)

var string = "this is a string";

	console.log(string)
	string = string + number; 
	// a string + a number will result in a string
	console.log(string)

var aBoolean;
	console.log(aBoolean)


/**********************/
// get an element and add a class:
var idName = "myElement";
var myFirstElement = document.getElementById(idName);

	//myFirstElement.classList.add("newClass")
	//myFirstElement.classList.remove("newClass")
	myFirstElement.classList.toggle("newClass")


// get an element and add a custom style
var mySecondElement = document.getElementById("myList")
	console.log(mySecondElement)

var myNewNumber = 5;
	myNewNumber = myNewNumber + 1;

	mySecondElement.style.letterSpacing = myNewNumber + "px";

var red = 255;
var green = red/2;
var blue = red/4;

mySecondElement.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";


/**********************/
	// function


var myFunction = function(){
	
	if(red <= 0){
		red = 255;
		console.log("reset")
	}else{
		red = red - 5;
		console.log("-5")
	}

	green = red/2;
	blue = red/4;

	mySecondElement.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

}

var myButton = document.getElementById("myButton")
myButton.onclick = function() {myFunction()};

/*

	pseudo code: (writing out your function in sentences and slowly converting it into code)

	- i want to click on a button to change the background color from orange slowly to black
	once i'm at black, i want the background color to reset to the original value

	//- this means i need a button to click on
		var myButton = document.getElementById("myButton")
	- i need to be able to click on the button
	myButton.onclick = function(){myFunction()}
	- i also need function to run when i click on that button
	
	var myFunction = function(){
	
	}

	- i need an element that i want to change the background color of 
	- the code that i want to run updates that element's background color
		- so that means i need to define what the current color is, and be able to update it
		- with each click, i want to subtract 5 from the current color's red value
		- if the color red gets to 0, i want to update it to go back to 255
			if(red == 0){
				// red goes back to 255	
			}

		- i need to use that color variable to update the element's background color
	
*/

	

/************/
// adding new html elements

var myList = document.getElementById("myList");
var mySecondButton = document.getElementById("mySecondButton");
var addingAListElement = function(){

	console.log(myList.innerHTML.length)

	if(myList.innerHTML.length > 500){
		myList.innerHTML = "";
	}else{
		console.log("test")

		var myNewElement = document.createElement("li");
		myNewElement.className = "important";
		//myNewElement.id = "newId";
		myNewElement.innerHTML = "<a href='https://google.com'>test</a> not bold";

		//var myNode = document.createTextNode("some other text!");
		//var myOtherNode = document.createTextNode("some other other text!");

		//myNewElement.appendChild(myNode)
		//myNewElement.appendChild(myOtherNode)

		myList.appendChild(myNewElement)
	}



}


mySecondButton.onclick = function(){addingAListElement()}







	












