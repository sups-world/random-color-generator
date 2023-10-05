const containerElement = document.querySelector(".container");

for (let index = 0; index < 45; index++) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}

// to get all color containers
const colorContainerElements = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContainerElements.forEach((eachElement) => {
    const newColorCode = randomColor();
    eachElement.style.backgroundColor = "#" + newColorCode;
    eachElement.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode);
  }
  return colorCode;
}
