// create a variable to hold my map
/* */

var myMap;

//import the esri map library and then run a callback function
require( ["esri/map"] , function(Map){
//code starts here
//Map is a bluprint or a recipie for creating more map objects

//when you create a new map, you need two things
//an id of an  element that acts as a container, in this case a div with an id of myMapContainer
//AND an options object that has all the various options like type of basemap, center, zoom etc
myMap = new Map("myMapContainer" , {
    basemap:'topo',
    center: [-122.25, 37.75],
    zoom:13

});

//code ends here
} );
