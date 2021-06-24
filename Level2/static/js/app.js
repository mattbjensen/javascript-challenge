// from data.js
var tableData = data;

// YOUR CODE HERE!
// View data in console
console.log( tableData);

var tbody = d3.select( "tbody");

// Loop to buld table
data.forEach( function( sighting) {
    console.log( sighting);
    var row = tbody.append( "tr");
    Object.entries( sighting).forEach( function( [key, value]) {
        console.log( key, value);
        var cell = tbody.append( "td");
        cell.text( value);
    });
});

// Search button click event
var button = d3.select( "#filter-btn");

button.on( "click", function( event){
    d3.event.preventDefault();
    tbody.html( "");

    // Define filters
    var inputDate = d3.select( "#datetime"); 
    var dateValue = inputDate.property( "value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // Filter search results
    var filter = tableData

    if ( dateValue) {
        filter = filter.filter(row => row.datetime === dateValue);
    }
    if (inputCity) {
        filter = filter.filter(row => row.city === inputCity);
    }
    if (inputState) {
        filter = filter.filter(row => row.state === inputState);
    }
    if (inputCountry) {
        filter = filter.filter(row => row.country === inputCountry);
    }
    if (inputShape) {
        filter = filter.filter(row => row.shape === inputShape);
    }

        filter.forEach( function( filterSelect){
            var row = tbody.append( "tr");
            Object.entries( filterSelect).forEach( function( [key, value]) {
            var cell = tbody.append( "td");
            cell.text( value);
            });
        });
});