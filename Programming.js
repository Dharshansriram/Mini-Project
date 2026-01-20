const courseId = localStorage.getItem("selectedCourse");
const course = courses.find(c => c.id === courseId);

document.getElementById("course").innerText = course.title;

const moduleList = document.getElementById("moduleList");

course.modules.forEach(module => {
    moduleList.innerHTML += `<li onclick="openModule('${module.name}')">${module.name}</li>`;
});

function openModule(moduleName) {
    localStorage.setItem("language", moduleName);
    window.location.href = "editor.html";
}