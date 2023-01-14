var nameInput = document.querySelector(".name-input");
var passInput = document.querySelector(".pass-input");
var nameDiv = document.querySelector(".name");
var passDiv = document.querySelector(".password");

var passControl = document.querySelector(".pass-control");
var passOn = document.querySelector(".bi-eye");
var passOff = document.querySelector(".bi-eye-slash");

var img1 = document.querySelector(".img-1");
var img2 = document.querySelector(".img-2");
var img3 = document.querySelector(".img-3");
var img4 = document.querySelector(".img-4");

nameInput.addEventListener("click", function(){
  img3.style.display="none";
  img1.style.display="inline";
})

passInput.addEventListener("click", function(){
  img1.style.display="none";
  img3.style.display="inline";
})
