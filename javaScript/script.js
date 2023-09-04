const sheetContainer = document.querySelector(".sheet-container");
const N = 4;

function makeSheet(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const cell = document.createElement("input");
      cell.type = "text";
      sheetContainer.appendChild(cell);

      cell.style.gridColumn = j + 1;
      cell.style.gridRow = i + 1;

      cell.className = "row-header";
      cell.id = "col-header";
      if (i != 0)
        cell.className = String.fromCharCode(64 + j);
      if (j != 0)
        cell.id = `${i}`;
      
      if (cell.className == "row-header" && j != 0)
        cell.placeholder = String.fromCharCode(64 + j);
      if (cell.id == "col-header" && i != 0)
        cell.placeholder = `${i}`;

      if (i == 0 || j == 0)
        cell.disabled = true;
    }
  }
}

makeSheet(N);