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
buttonpress.addEventListener("click", function () {
  count++;
  display.innerText = count;
});
