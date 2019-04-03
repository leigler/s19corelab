/* march 06 script */



/* review */

var myButton = document.getElementById("imageButton");
var myImageContainer = document.getElementById("imageContainer");

var margin = 100;

var addImage = function(){

	var myImage = document.createElement("img");
	myImage.src = "images/Frenchie_01.jpg";
	myImageContainer.appendChild(myImage);

	//myButton.className = "moveLeft";

	myButton.style.marginLeft = margin + "px";
	margin += 50; // update our margin with a new value


}

myButton.onclick = addImage;






/* appending on click */

var myList = document.getElementById("wrapper");

var myFunction = function(){

	var myNewElement = document.createElement("li");

	myNewElement.className = "myaddedListElement";
	myNewElement.innerHTML = "this is a new list element!";

	myList.appendChild(myNewElement);

}

myList.onclick = myFunction;


