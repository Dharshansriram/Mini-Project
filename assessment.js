function submitTest() {
  let score = 0;
  const total = 3;

  score += Number(document.querySelector('input[name="q1"]:checked')?.value || 0);
  score += Number(document.querySelector('input[name="q2"]:checked')?.value || 0);
  score += Number(document.querySelector('input[name="q3"]:checked')?.value || 0);

  const percentage = (score / total) * 100;

  const result = document.getElementById("result");

 if (percentage >= 60) {
  result.innerHTML = `✅ Passed! Score: ${percentage}% <br> Credit Earned 🎉`;
  result.style.color = "green";

  let credits = Number(localStorage.getItem("credits")) || 0;
  credits += 3; // course credit value
  localStorage.setItem("credits", credits);
  localStorage.setItem("course_completed", "true");
} else {
    result.innerHTML = `❌ Failed! Score: ${percentage}% <br> Please retry`;
    result.style.color = "red";
  }
}

