const express = require('express');
require('./database/db')


const PORT = process.env.PORT || 4000;

const app = express();

app.get("/books",(req, res)=>{
  res.json({
    "message" : "This is just testing GET method in this api"
  })
})

app.post('/books',(req, res)=>{
  res.json({
    "message" : "Data received successfully"
  })
})

app.delete("/books:id",(req, res)=>{
  res.json({
    "message" : "Data deleted successfully"
  })
})

app.patch('/books:id',(req, res)=>{
  req.json({
    "message" : "Data updated successfully"
  })
})

app.listen(PORT,()=>{
  console.log( `Server has started on port http://localhost:${PORT}`)
})