// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the menu
var menu = document.getElementById("menu");

// Get the offset position of the menu
var sticky = menu.offsetTop;

// Add the sticky class to the menu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

// menu icon
function myFunction2() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
