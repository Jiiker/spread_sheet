const cells = document.querySelectorAll(".sheet-container input[type='text']");
const selectedCell = document.querySelector(".selected-cell");

cells.forEach((cell, index) => {
  cell.addEventListener('focus', function() {
    const row = Math.floor(index / N);
    const col = index % N;
    
    selectedCell.textContent = `Cell: ${String.fromCharCode(64 + col)}${row}`;

    cells[index % N].style.backgroundColor = "lightblue";
    cells[index - (index % N)].style.backgroundColor = "lightblue";
  });
  cell.addEventListener('blur', function() {
    cells[index % N].style.backgroundColor = '';
    cells[index - (index % N)].style.backgroundColor = '';
  });
});

