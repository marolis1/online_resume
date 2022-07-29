'use strict';

const skills = Array.from(document.getElementsByClassName("skill"));
const summary = Array.from(document.getElementsByClassName("summary"));
const workHeader = Array.from(document.getElementsByClassName("work--header"));
const workDetails = Array.from(document.getElementsByClassName("work--details"));
const eduEntry = Array.from(document.getElementsByClassName("education--entry"));
const certEntry = Array.from(document.getElementsByClassName("certification--entry"));

const summaryBtn = document.getElementById("pro--summary");
const skillsBtn = document.getElementById("skills--list");
const workBtn = document.getElementById("work--history");
const eduBtn = document.getElementById("education--history");
const certBtn = document.getElementById("certification--list");

function toggleHidden(elements) {
    elements.forEach(x => {x.classList.toggle("hidden")});
}

summaryBtn.addEventListener("click", function() {
    toggleHidden(summary);
});
skillsBtn.addEventListener("click", function() {
    toggleHidden(skills);
});
workBtn.addEventListener("click", function() {
    toggleHidden(workHeader);
    toggleHidden(workDetails);
});
eduBtn.addEventListener("click", function() {
    toggleHidden(eduEntry);
});
certBtn.addEventListener("click", function() {
    toggleHidden(certEntry);
});

console.log(summaryBtn);