const cells = document.querySelectorAll(".sheet-container input[type='text']");
const selectedCell = document.querySelector(".selected-cell");

cells.forEach((cell, index) => {
  cell.addEventListener('focus', function() {
    console.log(cell, index);
    const row = Math.floor(index / N);
    const col = index % N;
    
    selectedCell.textContent = `Cell: ${String.fromCharCode(64 + col)}${row}`;

    cells[index % N].id = "selected";
    cells[index - (index % N)].id = "selected";
  });
  cell.addEventListener('blur', function() {
    cells[index % N].id = 'row-header';
    cells[index - (index % N)].id = 'col-header';
  });
});