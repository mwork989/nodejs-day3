const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// request end point or index route
app.get('/',  (req, res) => {
  res.send('Hello World from express')
})

// html1 route or we can call this as named route
app.get('/html1',  (req, res) => {
    // __dirname is an environment variable which provides absolute path of the directory
    //of current executed file
    res.sendFile(path.join(__dirname,'index.html'))
})

// named route
app.get('/getMovies', (req, res) => {
    fs.readFile('./data/db.json',(err,result)=>{
       if(err){
         res.send(err)
       }else{
      
        res.send(JSON.parse(result))
       }
    })
})

// named parameterized route 

app.get('/getMovies/:id', (req, res) => {

 
  fs.readFile('./data/db.json',(err,result)=>{
     if(err){
       res.send(err)
     }else{
      if(req.params.id){
        const returnObject = null;
        const data = JSON.parse(result);
         for (let index = 0; index < data.length; index++) {
          if(req.params.id === data[index]._id){
            returnObject =  data[index]
          }
          
         }

         if(returnObject){
          res.send(returnObject)
         }else{
          res.send("data not found")
         }
         

      }else{
        res.send("id not passed")
      }
     
     }
  })
})

app.listen(3000)