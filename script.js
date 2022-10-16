const container = document.getElementById("container");
const darkModeButton = document.getElementById("darkmode-toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");


if (container.classList.contains("light-mode")) {
    moon.style.display = "block";
    sun.style.display = "none";
} else {
    moon.style.display = "none";
    sun.style.display = "block";
}


function lightDarkToggle() {
    if (container.classList.contains("light-mode")) {
        container.classList.remove("light-mode");
        container.classList.add("dark-mode")
        moon.style.display = "none";
        sun.style.display = "block";
    } else if (container.classList.contains("dark-mode")) {
        container.classList.remove("dark-mode");
        container.classList.add("light-mode");
        moon.style.display = "block";
        sun.style.display = "none";
    }
}
