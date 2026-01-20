const courseId = localStorage.getItem("selectedCourse");
const course = courses.find(c => c.id === courseId);

document.getElementById("courseTitle").innerText = course.title;
document.getElementById("courseDesc").innerText = course.description;

const modulesContainer = document.getElementById("modulesContainer");

course.modules.forEach(module => {
    const locked = module.progress === 0 ? "locked" : "";

    modulesContainer.innerHTML += `
    <div class="module-card ${locked}"
    onclick="openModule('${module.id}', ${module.progress})">

    <h4>${module.title}</h4>

<div class="progress-bar">
        <div class="progress" style="width:${module.progress}%"></div>
    </div>

    <p>${module.progress}% Completed</p>
    </div> `;
});

function openModule(moduleId, progress) {
    if (progress === 0) {
        alert("Complete previous modules first!");
        return;
    }
    localStorage.setItem("selectedModule", moduleId);
    window.location.href = "module-details.html";
}