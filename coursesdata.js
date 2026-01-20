function openCourse() {
    window.location.href = "course.html";
}
const courses = [{
    id: "prog-fund",
    title: "Programming Fundamentals",
    description: "Learn core programming concepts using C, Python and Java",
    credits: 3,
    modules: [{
            id: "c",
            title: "C Programming Basics",
            progress: 100,
            lessons: [
                "Variables & Data Types",
                "Operators",
                "Control Statements"
            ]
        },
        {
            id: "python",
            title: "Python Programming Basics",
            progress: 50,
            lessons: [
                "Syntax & Variables",
                "Loops",
                "Functions"
            ]
        },
        {
            id: "java",
            title: "Java Programming Basics",
            progress: 0,
            lessons: [
                "OOP Basics",
                "Classes & Objects",
                "Inheritance"
            ]
        }
    ]
}];