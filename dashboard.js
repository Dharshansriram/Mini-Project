document.getElementById("name").innerText =
  localStorage.getItem("name");

document.getElementById("info").innerText =
  localStorage.getItem("dept") + " | Year " +
  localStorage.getItem("year");
