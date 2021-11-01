// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var search = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    
    // 4b. Save the value that was changed as a variable.
    
    // 4c. Save the id of the filter that was changed as a variable.
    let date = d3.select("#datetime").property("value").attri("id");
    let city = d3.select("#string").property("value").attri("id");
    let state = d3.select("#string").property("value").attri("id");
    let country = d3.select("#string").property("value").attri("id");
    let shape = d3.select("#string").property("value").attri("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (date) {
      filters[date] = date;
    }
    else {
      delete filters[date];
    }

    if (city) {
      filters[city] = city;
    }
    else {
      delete filters[city];
    }

    if (state) {
      filters[state] = state;
    }
    else {
      delete filters[state];
    }

    if (country) {
      filters[country] = country;
    }
    else {
      delete filters[country];
    }

    if (shape) {
      filters[shape] = shape;
    }
    else {
      delete filters[shape];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable(date, city, state, country, shape);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
      filteredData = filteredData.filter(row => row.string === city);
    };
  
    if (state) {
      filteredData = filteredData.filter(row => row.string === state);
    };

    if (country) {
      filteredData = filteredData.filter(row => row.string === country);
    };

    if (shape) {
      filteredData = filteredData.filter(row => row.string === shape);
    };

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterTable);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#input").on("change", updateFilters)
  
  // Build the table when the page loads
  buildTable(tableData);
