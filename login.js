function login() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dept = document.getElementById("dept").value;
  const year = document.getElementById("year").value;

  if (!name || !roll || dept === "Select Department" || year === "Select Year") {
    alert("Please fill all details");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("roll", roll);
  localStorage.setItem("dept", dept);
  localStorage.setItem("year", year);

  window.location.href = "dashboard.html";
}
