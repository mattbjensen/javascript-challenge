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

// Filter search results
var filter = tableData.filter( tableData => tableData.datetime === dateValue);
filter.forEach( function( dateSelect){
    var row = tbody.append( "tr");
    Object.entries( dateSelect).forEach( function( [key, value]) {
    var cell = tbody.append( "td");
    cell.text( value);
        });
    });
});