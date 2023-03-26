// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // 리스트 삭제 후, 변경된 리스트를 로컬 스토리지에 저장
    localStorage.setItem('todoList', document.getElementById('myUL').innerHTML);
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // 리스트 체크박스 변경 후, 변경된 리스트를 로컬 스토리지에 저장
    localStorage.setItem('todoList', document.getElementById('myUL').innerHTML);
  }
}, false);

// Load the saved list if it exists
const savedList = localStorage.getItem('todoList');
if (savedList) {
  const list = document.getElementById('myUL');
  list.innerHTML = savedList;
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    // 리스트 추가 후, 새로운 리스트를 로컬 스토리지에 저장
    localStorage.setItem('todoList', document.getElementById('myUL').innerHTML);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      // 리스트 삭제 후, 변경된 리스트를 로컬 스토리지에 저장
      localStorage.setItem('todoList', document.getElementById('myUL').innerHTML);
    }
  }
}
