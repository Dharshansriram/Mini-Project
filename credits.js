const credits = Number(localStorage.getItem("credits")) || 0;
document.getElementById("creditCount").innerText = credits;

const statusBox = document.getElementById("statusBox");

if (credits >= 3) {
  statusBox.innerHTML = "✅ Eligible for Course Certificate";
  statusBox.style.color = "green";
} else {
  statusBox.innerHTML = "⏳ Complete courses to earn credits";
  statusBox.style.color = "orange";
}
