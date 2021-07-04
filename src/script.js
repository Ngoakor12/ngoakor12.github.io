// *******************Scroll to top function******************//
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", scrollToTop);

window.onscroll = function () {
  showTopBtn();
};
function showTopBtn() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ****************Automate copyright year*******************//
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
