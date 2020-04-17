/* START WRITING YOUR JS HERE */
// single line commment
/*
line1
line2
*/

var myTitle = document.title;
console.log(myTitle);

myTitle = 'Blah Blah Blah';

//this sets tthe documents title property
document.title = myTitle;

console.log(document.title);

document.getElementById('ayanDiv').innerHTML = 'some regular text';

//calling my function
var myFnOutput = concatenateText('Ayan', 'Mitra');
//print this variable out to the console
console.log(myFnOutput);

//Function declaration
function concatenateText(word1, word2){
    //concatenates two numbers
    var fullWord = word1 + ' ' + word2;
    
    //returns some output
    return fullWord;
}