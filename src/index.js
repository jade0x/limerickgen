function generateLimerick(event) {
  event.preventDefault();

  new Typewriter("#limerick", {
    delay: 50,
    cursor: "",
  })
    .typeString(
      "There was an Old Man with a beard, <br>Who said, 'It is just as I feared!<br>Two Owls and a Hen,<br>Four Larks and a Wren, <br>Have all built their nests in my beard!'"
    )
    .start();
}

let limerickFormElement = document.querySelector("#limerick-generator");
limerickFormElement.addEventListener("submit", generateLimerick);
