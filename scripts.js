var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var li = list.getElementsByTagName('li');
	var x = li.length;
	element.innerHTML = 'item ' + x;
	list.appendChild(element);
});