// counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    // Create a request object
    var request = new XMLHttp(Request);
    
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttprequest.DONE){
            // Take some action
            if (request.status === 200)
            var counte = request.responseTex;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        // Not yet done
    };
 
    // Make the request
    request.open('GET', 'http://vkalagi.imad.hasura-app.io/counter' , true);
    request.send(null);
};