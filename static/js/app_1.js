// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build a table
function buildTable(data) {
    //clear the data to create a blank canvas for a table
    tbody.html("");

    // create a forEach function to loop through the data array
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table body
        let row = tbody.append('tr');

        // function to reference one object from ufo sightings, put value in datarow, one object per row
        Object.values(dataRow).forEach((val) => {
            // append each value of the object ot a cell in the table
            let cell = row.append('td');
            // extracting only the text of the value from each object
            cell.text(val);
            }
        );
    });
};

// function to handle actions after a click
function handleClick() {
    // use D3 to look for "datetime" id in HTML and grab that information using property("value")
    let date = d3.select('#datetime').property('value');
    // create a default filter to set the filtered data variable to our raw data
    let filteredData = tableData;

    // write if statement to check for a date, if present, return only the data with that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using fitered data. If no date was entered, then filteredData will just ber the original tableData
    buildTable(filteredData);
};

// linking our code directly to the filter button. creating an HTML tag with 'filter-btn' to link to
d3.selectAll("#filter-btn").on("click", handleClick);

// call the function to build the final table
buildTable(tableData);


