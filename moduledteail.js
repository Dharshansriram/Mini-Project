const course = courses[0];
const moduleId = localStorage.getItem("selectedModule");

const module = course.modules.find(m => m.id === moduleId);

document.getElementById("moduleTitle").innerText = module.title;

const lessonList = document.getElementById("lessonList");

module.lessons.forEach(lesson => {
    lessonList.innerHTML += < li > $ { lesson } < /li>;
});