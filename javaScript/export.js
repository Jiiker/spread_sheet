const exportBtn = document.querySelector(".export-btn");
const inputCell = document.querySelectorAll("#input-cell");

const spreadsheet = makeSpreadsheet();

function makeSpreadsheet() {
  let arr = [];
  let outer_str = "";
  for (let row = 0; row < N - 1; row++) {
    let inner_str = "";
    for (let col = 0; col < N - 1; col++) {
      let index = row * (N - 1) + col;
      if (col != 0)
        inner_str += ",";
      inner_str += inputCell[index].value;
    }
    if (row != 0)
      outer_str += '\n';
    outer_str += inner_str;
  }
  arr.push(outer_str);
  return arr;
}

exportBtn.addEventListener("click", function() {
  const blob = new Blob(spreadsheet);
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'spreadsheet.csv';
  a.click();
});