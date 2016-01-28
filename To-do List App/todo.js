// https://www.youtube.com/watch?v=MURDw0-BiEE&list=PLGJDCzBP5j3xKdHn-RYHvk3uafZSN0eYV&index=24
// each item should looks like this:
// <li><input type="checkbox"/> <span>Write this tutorial</span></li>

// Lesson learned
// - Avoid gloval variables
// - Strive to make functions reusable

function addNewItem(list) {
	var listItem = document.createElement("li");
	listItem.innerText = "Hello";
	// HTML DOM appendChild() Method
	// The appendChild() method appends a node as the last child of a node.
	list.appendChild(listItem);
}

var btnNew = document.getElementById('btnAdd');

btnNew.onClick = function() {
	addNewItem(document.getElementById("todoList"));
};