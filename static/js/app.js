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
        Object.values(datarow).forEach((val) => {
            // append each value of the object ot a cell in the table
            let cell = row.append('td');
            // extracting only the text of the value from each object
            cell.text(val);
            }
        );
    });
}

