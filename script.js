console.log("Hexagon Hub is loaded and ready.");

/* =========================================
   INTERN 6 (THE WIZARD)
   Task: Write a function to toggle the 'dark-mode' class on the body.
   Tip: Use document.body.classList.toggle('dark-mode');
========================================= */

// Select your toggle button (You might need to ask Intern 1 to add an ID to their button!)
// const toggleBtn = document.getElementById('...');

// Add Event Listener
// toggleBtn.addEventListener('click', () => {
//     ... your logic here ...
// });


/* =========================================
   INTERN 2 (THE MARKETER)
   Task: Make your CTA button alert "Hello" when clicked.
========================================= */


 // ================================
// Intern 6: Dark Mode Toggle Button
// ================================

// Create button
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.id = "darkModeBtn";

// Button styling
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 14px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";

// Add button to page
document.body.appendChild(toggleBtn);

// Toggle dark mode class on body
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
