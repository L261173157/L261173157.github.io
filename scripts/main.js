let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// document.querySelector('html').addEventListener('click', function () {
//     alert('Ouch! Stop poking me!');
// });

var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.png') {
        myImage.setAttribute('src', 'images/2.jpg');
    } else {
        myImage.setAttribute('src', 'images/1.png');
    }
}

var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    // localStorage.setItem('name', myName);
    if (!myName) {
        setUserName();
    }else{   
    localStorage.name = myName;
    myHeading.textContent = 'Hello, ' + myName;
    }
}

if (!localStorage.name) {
    setUserName();
} else {
    var storedName = localStorage.name;
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}