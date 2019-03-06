---

layout: home
title: "Core Lab Interaction, JS, Part 2"
permalink: /javascript-2/

---

[Home](/)

# Javascript Part 2

## Manipulating the DOM

[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction): Document Object Model: a way of treating an html document as a tree structure wherein each node is an object representing a part of the document.

## Basic DOM Manipulation

To add new elements to your html document via javascript: 

1) Make sure you have an existing element to append your new elements to. 

2) Create your element in javascript: `var element = document.createElement("div");`

3) Give your new element a class name: `element.className = "important"`

4) to populate your element, you have several options: 

4a) you can give your element a text node: 

```javascript

var element = document.createElement("div");
element.className = "important"

var node = document.createTextNode("some text");
element.appendChild(node);
document.getElementById('body').appendChild(element)

```

4b) You can also just use javascript's innerHTML: 

```javascript

var element = document.createElement("div");
element.className = "important"

element.innerHTML = "<h1>this is an h1</h1>";

document.getElementById('body').appendChild(element)

```


4c) Or you can use javascript's template literals, with preset variables: 

```javascript

var element = document.createElement("div");
element.className = "important"

var content = "some content",
		subtitle = "a subtitle"

element.innerHTML = `

	<h1>${content}</h1>
	<h2>${subtitle}</h2>

`

document.getElementById('wrapper').appendChild(element);

```

where `${variable}` is used to output any changing content

