let color = "black";

initiateFillButtons();
updateGrid(16);

function initiateFillButtons() {
  // spread operator used to ensure that 'fillButtons' is an actual array
  const fillButtons = [...document.getElementsByClassName("button-fill")];

  fillButtons.forEach((fillButton) =>
    fillButton.addEventListener("click", function (e) {
      color = e.target.id;
    })
  );
}

function updateGrid(dim) {
  const container = document.getElementById("container");
  resetGrid(container);
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

function resetGrid(container) {
  const oldGridSquares = [...container.getElementsByClassName("grid-square")];
  oldGridSquares.forEach((gridSquare) => container.removeChild(gridSquare));
}

function initiateGridSquare(gridSquare) {
  gridSquare.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "black";
  });
}
