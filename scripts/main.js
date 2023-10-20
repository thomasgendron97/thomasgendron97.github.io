const myImage = document.querySelector("img");
let boolFlip = true;
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let viewCountHeading = document.querySelector("h2");

myButton.onclick = () => { //reset username
    setUserName();
  };

  myImage.onclick = () => { //funny image flipping
    const mySrc = myImage.getAttribute("src");
    boolFlip = !boolFlip;
    if (boolFlip === true) {
      myImage.setAttribute("src", "images/franky.png");
    } else {
      myImage.setAttribute("src", "images/yknarf.png");
    }
  };
  

function countVisits() {
    viewCountHeading.textContent = "test";
}

function setUserName() {
    const myName = prompt("Please enter your name.",localStorage.getItem("name"));
    if (!myName) {
        alert("please enter a valid name");
        setUserName();
    }    
    localStorage.setItem("name", myName);
    myHeading.textContent = `Webdev Example, ${myName}`;
  }

  if (!localStorage.getItem("name")) { //if there is no name in local storage, call for set user name
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Webdev Example, ${storedName}`;
  }







// const myHeading = document.querySelector("h1");
//let origTxt = myHeading.textContent;
//myHeading.textContent = "Headings are currently replaced in JS, click me to go back!";
//  document.querySelector("h1").addEventListener("click", function () { /*anonymous function, can be replaced with () =>*/
//    myHeading.textContent=origTxt;
//  });