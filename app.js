// create a variable to hold my map
/* */

var myMap;

//import the esri map library using dojo and then run a callback function
require( ["esri/map"] , function(Map){
//code starts here
//Map is a bluprint or a recipie for creating more map objects

myMap = new Map("myMapContainer" , {
    basemap:'topo',
    center: [-122.25, 37.75],
    zoom:13

});

//code ends here
} );
