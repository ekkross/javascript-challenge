// from data.js
var tableData = data;

// YOUR CODE HERE!
function writeToPage(data) {

	var tbody = d3.select("tbody");

	data.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) => {

	var row = tbody.append("tr");

	row.append("td").text(datetime);
	row.append("td").text(city);
	row.append("td").text(state);
	row.append("td").text(country);
	row.append("td").text(shape);
	row.append("td").text(durationMinutes);
	row.append("td").text(comments);
	});
}

writeToPage(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {
	d3.select("tbody").html("");
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	var filteredData = tableData.filter(v => v.datetime === inputValue);

	writeToPage(filteredData);
});

