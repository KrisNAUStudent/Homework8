console.log("Hello World!");

let hasDownloadedResume = false;

let button = document.getElementById("thebutton");

button.addEventListener("click", function () {
  if (!hasDownloadedResume) {
    alert("Your resume is downloaded successfully!");
    hasDownloadedResume = true;
  }
});

const name = "Kris";

function showGreeting() {
  alert("Hello, my name is " + name + "! Welcome to my portfolio!");
}
showGreeting();

const today = new Date();

const futureDate = new Date();
futureDate.setDate(today.getDate() + 3);

const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
const utc2 = Date.UTC(
  futureDate.getFullYear(),
  futureDate.getMonth(),
  futureDate.getDate(),
);

const timeDiff = Math.abs(utc2 - utc1);

const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

document.getElementById("deadline").textContent =
  `Days until deadline is ${today.toDateString()} and ${futureDate.toDateString()}: ${daysDiff} days`;


function skill() {
  const input = document.getElementById('new-skill');
  const skillList = document.getElementById('list-of-skills');
  const skilltextadd = input.value.trim();

  const newLi = document.createElement("li");

  newLi.textContent = skilltextadd;
  skillList.appendChild(newLi);
  input.value = "";
}

let count = 0;
const buttonpress = document.getElementById("thebutton");
const display = document.getElementById("buttonCount");

button.addEventListener("click", function () {
  count ++;
  display.innerText = count;
});

const projecttitles = ["Navajo Childrens Coloring Book 1", "Navajo Childrens Coloring Book 2", "Book Title Cover For Andy Branham"];

const projectdesc = ["Illustrations for the first Navajo Coloring book", "Illustrations for the second Navajo Coloring book", "Art for Andy's up and coming Definitive Edition"];

const projdeadlines = ["2026-08-01" , "2026-09-01" , "2025-12-25"];

const projectbox = document.getElementById("projects-list");

for (let i = 0; i < projecttitles.length; i++) {
const projectHTML = `
  <div class="project-items">
  <p>Title:</p> ${projecttitles[i]}<br>
  <p>Description:</p> ${projectdesc[i]}<br>
  <p>Deadline:</p> ${projdeadlines[i]}
  </div>
  `;
  projectbox.innerHTML += projectHTML;
}