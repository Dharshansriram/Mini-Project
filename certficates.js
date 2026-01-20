const credits = Number(localStorage.getItem("credits")) || 0;
const certBox = document.getElementById("certBox");
const lockMsg = document.getElementById("lockMsg");

if (credits >= 3) {
  document.getElementById("studentName").innerText =
    localStorage.getItem("name");

  document.getElementById("dept").innerText =
    localStorage.getItem("dept");

  document.getElementById("credits").innerText = credits;
} else {
  certBox.style.display = "none";
  lockMsg.innerHTML = "🔒 Complete the course & earn credits to unlock certificate";
}
