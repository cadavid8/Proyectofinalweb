window.onscroll = function() {myFunction()};

let cabecera = document.getElementById("micabecera");
let estatico = cabecera.offsetTop;

function myFunction() {
  if (window.pageYOffset > estatico) {
    cabecera.classList.add("sticky");
  } else {
    cabecera.classList.remove("sticky");
  }
}