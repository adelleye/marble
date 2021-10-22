const btnHarmburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade"); //Select all elements that have .hasfade

//When you click run this function
btnHarmburger.addEventListener("click", function () {
  console.log("Harmburger button clicked");
  //So if header has open remove it
  if (header.classList.contains("open")) {
    //close harmburger menu
    header.classList.remove("open"); //remove the open class from .header
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in"); //remove fade-in from animations.scss to .overlay
      element.classList.add("fade-out");
    });
    overlay.classList.remove("fade-in"); //remove fade-in from animations.scss to .overlay
    overlay.classList.add("fade-out");
  } else {
    //Open the hamburger menu
    header.classList.add("open"); //add the open class to header
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in"); //add fade-in from animations.scss to .overlay
    });
  }
});
