function generatePoem(event) {
  event.preventDefault();
  alert("Generating Poem");
  /*let poemBox = document.querySelector("#poem");
  poemBox.innerHTML = "The poem will be displayed here";*/

  new Typewriter("#poem", {
    strings: "The poem will be displayed here",
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
