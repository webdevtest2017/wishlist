var data = (localStorage.getItem('wishList')) ? JSON.parse(localStorage.getItem('wishList')) : {
	wish: [],
	done: []
};

function dataObjectUpdated() {
	localStorage.setItem('wishList', JSON.stringify(data));
}

function renderWishList(){
	if (!data.wish.length && !data.done.length) return;

	for (i = 0; i < data.wish.length; i++) {
		var value = data.wish[i];

		var li = document.createElement('li');
		var t = document.createTextNode(value);
		var wishList = document.getElementById('wishes');
		li.appendChild(t);
		wishList.insertBefore(li, wishList.childNodes[0]);

		var span = document.createElement('div');
		span.innerHTML = '<svg id="Layer1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>1</title><polygon points="42.06 10.06 39.94 7.94 25 22.88 10.06 7.94 7.94 10.06 22.88 25 7.94 39.94 10.06 42.06 25 27.12 39.94 42.06 42.06 39.94 27.12 25 42.06 10.06"/></svg>'
		span.className = "close";
		var span2 = document.createElement('div');
		span2.innerHTML = '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>2</title><g><path d="M44.59,24.66,31,16.8a.39.39,0,0,0-.59.34V22.3a.39.39,0,0,1-.39.39H5.61a.39.39,0,0,0-.39.39v4.11a.39.39,0,0,0,.39.39H30a.39.39,0,0,1,.39.39v4.89a.39.39,0,0,0,.59.34l13.62-7.86A.39.39,0,0,0,44.59,24.66Z"/></g></svg>'
		span2.className = "replace";

		li.appendChild(span);
		li.appendChild(span2);

	}
	for (j = 0; j < data.done.length; j++) {
		var value = data.done[j];

		var li = document.createElement('li');
		var t = document.createTextNode(value);
		var wishList = document.getElementById('done');
		li.appendChild(t);
		wishList.insertBefore(li, wishList.childNodes[0]);

		var span = document.createElement('div');
		span.innerHTML = '<svg id="Layer1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>1</title><polygon points="42.06 10.06 39.94 7.94 25 22.88 10.06 7.94 7.94 10.06 22.88 25 7.94 39.94 10.06 42.06 25 27.12 39.94 42.06 42.06 39.94 27.12 25 42.06 10.06"/></svg>'
		span.className = "close";
		var span2 = document.createElement('div');
		span2.innerHTML = '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>2</title><g><path d="M44.59,24.66,31,16.8a.39.39,0,0,0-.59.34V22.3a.39.39,0,0,1-.39.39H5.61a.39.39,0,0,0-.39.39v4.11a.39.39,0,0,0,.39.39H30a.39.39,0,0,1,.39.39v4.89a.39.39,0,0,0,.59.34l13.62-7.86A.39.39,0,0,0,44.59,24.66Z"/></g></svg>'
		span2.className = "replace";

		li.appendChild(span);
		li.appendChild(span2);

	}
	deleteItems();

	replaceItems();
}

function countWishItems(){
	var wishList = document.getElementById('wishes');
	var countLi = wishList.childElementCount;
	document.getElementById('totalWishes').innerHTML = 'Total:  ' + countLi;
}

function countDoneItems(){
	var doneList = document.getElementById('done');
	var countLi = doneList.childElementCount;
	document.getElementById('totalDone').innerHTML = 'Total:  ' + countLi;
}

function deleteItems (){
		var close = document.getElementsByClassName('close');
		for (i = 0; i < close.length; i++) {
		close[i].onclick = function(){
			var div = this.parentElement;
			var value = div.innerText;
			if (div.parentNode.id == 'wishes'){
				data.wish.splice(data.wish.indexOf(value), 1);
			} if (div.parentNode.id == 'done') {
				data.done.splice(data.done.indexOf(value), 1);
			}

			dataObjectUpdated();
			div.parentNode.removeChild(this.parentNode);

			countWishItems();
			countDoneItems();
		}
	}
}

function replaceItems() {
		var replaceItems = document.getElementsByClassName('replace');
		for (i = 0; i < replaceItems.length; i++) {
		replaceItems[i].onclick = function(){
			var div2 = this.parentElement;
			var value = div2.innerText;

			if (div2.parentNode.id == 'wishes'){
				div2.parentNode.removeChild(this.parentNode);
				var list = document.getElementById('done');
				list.insertBefore(div2, list.childNodes[0]);
				data.wish.splice(data.wish.indexOf(value), 1);
				data.done.push(value);
				countDoneItems();
				countWishItems();
			} else if (div2.parentNode.id == 'done'){
				div2.parentNode.removeChild(this.parentNode);
				var list = document.getElementById('wishes');
				list.insertBefore(div2, list.childNodes[0]);
				data.done.splice(data.done.indexOf(value), 1);
				data.wish.push(value);
				countDoneItems();
				countWishItems();
			}
			dataObjectUpdated();
		}
	}
}


function createItems(){
	var li = document.createElement('li');
	var inputValue = document.getElementById('wishInput').value;
	var t = document.createTextNode(inputValue);
	var wishList = document.getElementById('wishes');
	li.appendChild(t);
	if (inputValue === '') {
		alert ('I don\'t believe you have no any wishes');
	} else {
		wishList.insertBefore(li, wishList.childNodes[0]);
		data.wish.push(inputValue);
		dataObjectUpdated();
	}
	var span = document.createElement('div');


	span.innerHTML = '<svg id="Layer1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>1</title><polygon points="42.06 10.06 39.94 7.94 25 22.88 10.06 7.94 7.94 10.06 22.88 25 7.94 39.94 10.06 42.06 25 27.12 39.94 42.06 42.06 39.94 27.12 25 42.06 10.06"/></svg>'
	span.className = "close";

	var span2 = document.createElement('div');
	span2.innerHTML = '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>2</title><g><path d="M44.59,24.66,31,16.8a.39.39,0,0,0-.59.34V22.3a.39.39,0,0,1-.39.39H5.61a.39.39,0,0,0-.39.39v4.11a.39.39,0,0,0,.39.39H30a.39.39,0,0,1,.39.39v4.89a.39.39,0,0,0,.59.34l13.62-7.86A.39.39,0,0,0,44.59,24.66Z"/></g></svg>'
	span2.className = "replace";

	li.appendChild(span);
	li.appendChild(span2);

	deleteItems();

	replaceItems();

	document.getElementById('wishInput').value = '';

	countWishItems();
}

renderWishList();

countWishItems();

countDoneItems();

document.getElementById('addBtn').onclick = createItems;


document.getElementById("wishInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("addBtn").click();
    }
});



