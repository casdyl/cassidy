const aboutButton = document.querySelector(".about");
const aboutBody = document.querySelector(".aboutBody");

const experienceButton = document.querySelector(".experience");
const experienceBody = document.querySelector(".experienceBody");

const contactButton = document.querySelector(".contact");
const contactBody = document.querySelector(".contactBody");

const moreButton = document.querySelector(".more");
const moreBody = document.querySelector(".moreBody");

const buttonArray = [aboutButton, experienceButton, contactButton, moreButton];
const bodyArray = [aboutBody, experienceBody, contactBody, moreBody];

// @handleDisplay HELPER 1
/* Change + to - on click and ensure only one element is selected and open at a time */
function togglePlus(div) {
  buttonArray
    .filter((button) => button !== div)
    .forEach((button) => {
      button.lastElementChild.innerHTML = "+";
    });
  div.lastElementChild.innerHTML === "-"
    ? (div.lastElementChild.innerHTML = "+")
    : (div.lastElementChild.innerHTML = "-");
}

// @handleDisplay HELPER 2
/* When navigation element is clicked, display details (body) */
function displayBody(div) {
  bodyArray
    .filter((body) => body !== div)
    .forEach((body) => {
      body.style.display = "none";
    });
  div.style.display === "flex"
    ? (div.style.display = "none")
    : (div.style.display = "flex");
}

function handleDisplay(button, body) {
  togglePlus(button);
  displayBody(body);
}
