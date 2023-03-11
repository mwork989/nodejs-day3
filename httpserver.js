const http = require('http');

const app = http.createServer(function (request,response){
    response.write("welcome to node js training day3")
    response.end();
})

app.listen(3001, function(){
    console.log("server started with port number 3000");
})