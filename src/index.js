function createLoader() {
  const loaderContainer = document.createElement("div");
  loaderContainer.className = "loader-container";

  const loadingText = document.createElement("div");
  loadingText.className = "loading-text";
  loadingText.innerHTML = 'Thinking<span class="dots"></span>';

  loaderContainer.appendChild(loadingText);
  return loaderContainer;
}

function displayLimerick(response) {
  console.log("limerick generated");

  let limerickElement = document.querySelector("#limerick");
  limerickElement.innerHTML = "";

  new Typewriter("#limerick", {
    delay: 50,
    cursor: "",
  })
    .typeString(response.data.answer)
    .start();
}

function generateLimerick(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "24f34fb24eae01907fa1460264toc5b2";
  let context =
    "You are a poem expert, and you love to write new witty limericks, following the strict AABBA rhyme scheme. You must generate a limerick in basic HTML, but do not write backticks to create a codeblock, and do not provide a title. Make sure to follow the user instructions for the topic of the limerick.";
  let prompt = `User instructions are: Generate a limerick about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let limerickElement = document.querySelector("#limerick");
  limerickElement.classList.remove("hidden");
  limerickElement.innerHTML = "";
  limerickElement.appendChild(createLoader());
  //limerickElement.innerHTML = "Thinking...";

  console.log("Genearting Limerick");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayLimerick);
}

let limerickFormElement = document.querySelector("#limerick-generator");
limerickFormElement.addEventListener("submit", generateLimerick);
