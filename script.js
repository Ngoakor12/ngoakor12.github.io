//Progress bar
// function showProgressBar() {
//     const progressBar = document.querySelector("#progressBar");
//     let totalPageHeight = document.body.scrollHeight - window.innerHeight;
//     window.onscroll = () => {
//         let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
//         progressBar.style.height = `${newProgressHeight}%`;
//         progressBar.style.opacity = `${newProgressHeight}%`;
//     };
// }
// showProgressBar();

//Scroll to top function
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}