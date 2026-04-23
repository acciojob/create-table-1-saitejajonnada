function insert_Row() {
  let table = document.getElementById("sampleTable");

  // Get current number of rows
  let rowCount = table.rows.length;

  // Create new row at the end
  let row = table.insertRow(rowCount);

  // Insert cells
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  // Add text
  cell1.innerHTML = "Row" + (rowCount + 1) + " cell1";
  cell2.innerHTML = "Row" + (rowCount + 1) + " cell2";
}