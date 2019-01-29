// Step 1
  // Get table data
  var tableData = data;

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Console.log the UFO data from data.js
  console.log(data);

  // Define Function for later usage
function createTable() {
    // Arrow functions to append table data from data.js
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

// Step 2
function searchButton() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(sighting => sighting.datetime === date);
  }
  createTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
createTable(tableData);
