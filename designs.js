$(document).ready(function(){
   
});


var color
var height
var width 

$("#sizePicker").submit(function(event){
    event.preventDefault();
    // Select color input
    color = $("#colorPicker").val();
    
    // Select size input
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    alert(color);
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
