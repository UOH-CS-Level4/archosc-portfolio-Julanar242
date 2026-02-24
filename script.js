const myName =
document.querySelector("h1");

console.log(myName);

// Select the toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Add click listener
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});