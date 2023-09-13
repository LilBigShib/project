var myImage = document.querySelector('img');
myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/mozilla.png') {
myImage.setAttribute ('src','images/mozi.png');
} else {
myImage.setAttribute ('src','images/mozilla.png');
}
}
    var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla Firefox, ' + myName;
    }
    if(!localStorage.getItem('name')) {
        setUserName();
        } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla Firefox, ' + storedName;
        }
        
            