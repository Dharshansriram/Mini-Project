const name = localStorage.getItem("name");
const roll = localStorage.getItem("roll");
const dept = localStorage.getItem("dept");
const year = localStorage.getItem("year");
const credits = localStorage.getItem("credits") || 0;

document.getElementById("name").innerText = name;
document.getElementById("roll").innerText = roll;
document.getElementById("dept").innerText = dept;
document.getElementById("year").innerText = year;
document.getElementById("credits").innerText = credits;

// Avatar first letter
document.getElementById("avatarText").innerText =
  name ? name.charAt(0).toUpperCase() : "S";
