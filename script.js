const container = document.getElementById("container");

let color = "black";

initiateDimensionsRange();
initiateFillButtons();
initiateClearButton();
updateGrid(16);

function initiateDimensionsRange() {
  const dimensionsRange = document.getElementById("dimensions-range");
  dimensionsRange.addEventListener("change", function (e) {
    updateGrid(parseInt(e.target.value));
  });
}

function initiateFillButtons() {
  // spread operator used to ensure that 'fillButtons' is an actual array
  const fillButtons = [...document.getElementsByClassName("button-fill")];

  fillButtons.forEach((fillButton) => {
    console.log(fillButton);
    fillButton.addEventListener("click", function (e) {
      color = e.target.id;

      fillButtons.forEach((fillButton) =>
        fillButton.classList.remove("selected-button-fill")
      );

      e.target.classList.add("selected-button-fill");
    });
  });
}

function initiateClearButton() {
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function () {
    const gridSquares = [...container.getElementsByClassName("grid-square")];
    gridSquares.forEach(
      (gridSquare) => (gridSquare.style.backgroundColor = "white")
    );
  });
}

function updateGrid(dim) {
  resetGrid();
  updateDimLabel(dim);

  document.documentElement.style.setProperty("--dim", dim);

  for (let r = 0; r < dim; r++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    container.appendChild(gridRow);
    for (let c = 0; c < dim; c++) {
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      initiateGridSquare(gridSquare);
      gridRow.appendChild(gridSquare);
    }
  }
}

function resetGrid() {
  const formerGridRows = [...container.getElementsByClassName("grid-row")];
  formerGridRows.forEach((gridRow) => container.removeChild(gridRow));
}

function updateDimLabel(dim) {
  const dimensionsLabelSize = document.getElementById("dimensions");
  dimensionsLabelSize.textContent = `${dim} x ${dim}`;
}

function initiateGridSquare(gridSquare) {
  gridSquare.addEventListener("mouseenter", function (e) {
    const gridSquareStyle = e.target.style;
    if (color === "random") {
      gridSquareStyle.backgroundColor = randomColor();
    } else if (color === "black") {
      gridSquareStyle.backgroundColor = "black";
    } else {
      gridSquareStyle.backgroundColor = "white";
    }
  });
}

function randomColor() {
  const randomRed = Math.random() * 255 + 1;
  const randomGreen = Math.random() * 255 + 1;
  const randomBlue = Math.random() * 255 + 1;
  const opacity = Math.random() * 10;
  return `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${opacity})`; // random rgb values and random opacity
}
