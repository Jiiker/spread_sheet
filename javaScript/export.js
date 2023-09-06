const exportBtn = document.querySelector(".export-btn");
const spreadsheet = makeSpreadsheet();

function makeSpreadsheet() {
  const keys = Object.keys(window.localStorage);
  let arr = [];
  for (const key of keys) {
    const savedData = localStorage.getItem(key).split(','); 
    const col = parseInt(savedData[0]);
    const row = parseInt(savedData[1]);
    const data = savedData[2];

    arr.push([col, row, data]);
  }
  return arr;
}

exportBtn.addEventListener("click", function() {

});