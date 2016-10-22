// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    // Make a request to the counte end point
    
    // Capture the response and store it in a variable
    
    // Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.inerHTML = counter.toString();
};