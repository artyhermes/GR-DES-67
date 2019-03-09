var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JS playtime is over, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'JS playtime is over, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  window.onclick = myFunction;

function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "purple";
}