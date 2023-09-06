const cells = document.querySelectorAll(".cell-box");
const selectedCell = document.querySelector(".selected-cell");

cells.forEach((cell, index) => {
  cell.addEventListener('focus', function() {
    const row = Math.floor(index / N);
    const col = index % N;
    
    selectedCell.textContent = `Cell: ${String.fromCharCode(64 + col)}${row}`;

    cells[index % N].id = "selected";
    cells[index - (index % N)].id = "selected";
  });
  cell.addEventListener('focusout', function() {
    cells[index % N].id = 'row-header';
    cells[index - (index % N)].id = 'col-header';
  });

  cell.addEventListener("input", function() {
    let data = "" + cell.value;
    let row = Math.floor(index / N);
    let col = index % N;
    const inputData = [col, row, data];

    let key = `${String.fromCharCode(64 + col)}${row}`;

    localStorage.setItem(key, inputData);
    if (localStorage.getItem(key).split(',')[2] == "")
      localStorage.removeItem(key);
  });
});

function loadStorage() {
  const keys = Object.keys(window.localStorage);
  for (const key of keys) {
    const savedData = localStorage.getItem(key).split(','); 
    const col = parseInt(savedData[0]);
    const row = parseInt(savedData[1]);
    const data = savedData[2];
    const index = row * N + col;

    cells[index].value = data;
  }
}

loadStorage();