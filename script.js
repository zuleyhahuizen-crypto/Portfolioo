let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let knop = document.getElementById("knop");
let fotoIk = document.getElementById("fotoIk");
let titel = document.getElementById("titel");

titel.addEventListener("click", function () {
  titel.classList.toggle("dans");
});

fotoIk.onmouseover = function () {
  fotoIk.classList.add("dans");
};

fotoIk.onmouseleave = function () {
  fotoIk.classList.remove("dans");
};
// Lesweek 1 en 6, keyframes en toggle

let huidige = 1;

knop.addEventListener("click", function () {
  if (huidige === 1) {
    project1.style.display = "none";
    project2.style.display = "block";
    huidige = 2;
  } else if (huidige === 2) {
    project2.style.display = "none";
    project3.style.display = "block";
    huidige = 3;
  } else {
    project3.style.display = "none";
    project1.style.display = "block";
    huidige = 1;
  }
});
// Dobbelsteen opdracht lesweek 3
// AI voor knop https://chatgpt.com/share/69d545e0-95e0-8330-96ec-360db3dd9b32
// Eerste project if (struikLeft < 20 && struikLeft > 0 && characterTop >= 130) { struik.style.animation = "none";
// struik.style.display = "none";
// verlorenDiv.style.color = "red";
// verlorenDiv.textContent = "Verloren!"; clearInterval(checkDead);
