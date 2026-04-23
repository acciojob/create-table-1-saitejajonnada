function insert_Row() {
  let table = document.getElementById("sampleTable");

  let rowCount = table.rows.length;

  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  // Fixed values as per requirement
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}