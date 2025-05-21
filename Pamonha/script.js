var pamonhas = 0;

document.getElementById("pamonhas").innerHTML = pamonhas;

var plus = document.getElementById("plus");
var less = document.getElementById("less");

plus.addEventListener("click", function () {
  pamonhas += 1;
  document.getElementById("pamonhas").innerHTML = pamonhas;
});
less.addEventListener("click", function () {
  if (pamonhas > 0) {
    pamonhas -= 1;
    document.getElementById("pamonhas").innerHTML = pamonhas;
  }
});
