/* march 06 script */


// arrays can contain any type of variable:

var myArray = [ "oranges", 
				"apples", 
				"pears", 
				"dragonfruits", 
				"grapes"
			   ];

myArray.push("strawberries"); // adding new values to our array


// an array of local image links:
var myImages = ["images/image1.jpg",
				"images/image2.jpg",
				"images/image3.jpg"];

//var myImage = document.getElementById("something");
//myImage.src = myImages[0];

// an array of urls as strings:
var myLinks =  ["https://google.com",
				"http://s19corelab.teachinginter.net/js-exercise-3/",
				"https://facebook.com"];

//var myLink = document.getElementById("alink");
//myLink.href = myLinks[0];

// an array of numbers
var myOtherArray = [43, 33, 21.2, 56, 77, 55, 55, 65];



// an array of mixed values (including other arrays and previously defined variables):
var myOtherOtherArray = [
							"oranges", 
							41, 
							true, 
							3.3, 
							[
								"second list", 
								"more values", 
								22
							], 
							myArray
						];

//console.log(myArray[0]) // getting the first value of our array
var myContainer = document.getElementById("container");

// while loop

	var counter = 0;
	while(counter < myArray.length || counter < myOtherArray.length){
		// || = or, this while loop runs as long as the counter is less than one of the arrays

		// append each element of our array
		var myListItem = document.createElement("li");
		console.log(myArray[counter], myOtherArray[counter])
		
		// check if one of the array's current value is undefined
		if(myArray[counter] == undefined){
			myListItem.innerHTML = myOtherArray[counter];
		
		}else if(myOtherArray[counter] == undefined){
			myListItem.innerHTML = myArray[counter];

		}else{
			myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
		}

		myContainer.appendChild(myListItem);
		counter++; // is the same as counter = counter + 1;
	}

// for loop

	for (var i = 0; i < myArray.length; i++) {
		var myListItem = document.createElement("li");
		myListItem.innerHTML = myArray[i];
		//myContainer.appendChild(myListItem);

	}


















