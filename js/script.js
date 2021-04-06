var yourName = prompt("Nome?");
var yourSurname = prompt("Cognome?");
var favColor = prompt("Colore preferito?");

/* console.log(yourName);
console.log(yourSurname);
console.log(favColor); */

document.getElementById("vg-psw").innerHTML =
  "La tua passoword: " + yourName + yourSurname + favColor + "21";
