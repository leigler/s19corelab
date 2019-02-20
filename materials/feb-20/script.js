
// basic variables
var myString = "hello this is a string!!";
var myNumber = 20;
var letterSpacingValue = 1;
var myBoolean = false;

// getting a div via its id:
var myDiv = document.getElementById("wrapper");
var colorDiv = document.getElementById("colorDiv");

// function:
var myFunction = function(){	

	// toggling between values:
	if (myBoolean == true) {
		myBoolean = false;
		myNumber = myNumber + 10;
	
	}else{
		myBoolean = true;		
		myNumber = myNumber - 8;

	}

	console.log(myNumber)
	myDiv.style.fontSize = myNumber + "px";

}


var anotherFunction = function(){

	if (myNumber < 40){
		// keep growing
		myNumber = myNumber + 2;
		
	}else if(myNumber == 40){
		// if myNumber is equal to 40
		myNumber = myNumber + 30;

	}else if( myNumber == 70){
		// if myNumber is equal to 70
		myNumber = myNumber - 40;

	}else{
		// if none of the previous conditions apply, reset at small value
		myNumber = 20;
	}
	// update the inline css of myDiv
	myDiv.style.fontSize = myNumber + "px";

}


var classFunction = function(){
	console.log("hey this is our class function!")

	// update an element's class (alternatively, you can use .add or .remove):
	colorDiv.classList.toggle("text-color")
	myDiv.classList.toggle("text-color")

}


// call the function on action:
myDiv.onclick = anotherFunction;
colorDiv.onclick = classFunction;


