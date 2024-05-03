function generatePoem(event) {
  event.preventDefault();

  let apiKey = "b0aa3bbe4a50o046t63f82874a31fac6";
  let context =
    "You are a poet who writes short and funny poems which rhyme. The answer you provide is in HTML format. The answer is maximum 4 lines of poetry. In the answer after the poem you show your fictional signature. Show the poem only, without its title. The answer is in font Briem Handin. In the answer the lines brake always after the rhymes. ";
  let input = document.querySelector("#generator-input");

  let prompt = `Generate a poem about ${input.value}  `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
