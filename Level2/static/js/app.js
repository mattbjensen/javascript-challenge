// from data.js
var tableData = data;

// YOUR CODE HERE!
// View data in console
console.log( tableData);

var tbody = d3.select( "tbody");

data.forEach( function( sighting) {
    console.log( sighting);
    var row = tbody.append( "tr");
    Object.entries( sighting).forEach( function( [key, value]) {
        console.log( key, value);
        var cell = tbody.append( "td");
        cell.text( value);
    });
});

var button = d3.select( "#filter-btn");

button.on( "click", function( event){
    d3.event.preventDefault();
    tbody.html( "");

var inputDate = d3.select( "#datetime"); 
var inputValue = inputDate.property( "value");

var filter = tableData.filter( tableData => tableData.datetime === inputValue);
filter.forEach( function( dateData){
    var row = tbody.append( "tr");
    Object.entries( dateData).forEach( function( [key, value]) {
    var cell = tbody.append( "td");
    cell.text( value);
        });
    });
});