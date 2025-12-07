const express = require('express');
const { book } = require('./database/db');
require('./database/db')


const PORT = process.env.PORT || 4000;

const app = express();

//middleware
app.use(express.json());

app.get("/books",async (req, res)=>{
  try{
    const bookList = await book.findAll()
    res.json({
    "message" : "Book list are here",
    bookList
  })
  }catch(err){
    console.log(`Error : ${err}`)
  }

})

app.post('/books',async (req, res)=>{
  const {Auther, Name, Price} = req.body
  console.log(`${Auther} ${Name} ${Price}`)
  try{
    await book.create({
      bookAuther : Auther,
      bookName : Name,
      bookPrice : Price
    })
    res.json({
      "message" : "Data received successfully"
    })
  }catch(err){
    console.log(`Error ${err}`)
  }
})

app.delete("/books/:id",(req, res)=>{
  res.json({
    "message" : "Data deleted successfully"
  })
})

app.patch('/books/:id',(req, res)=>{
  res.json({
    "message" : "Data updated successfully"
  })
})

app.listen(PORT,()=>{
  console.log( `Server has started on port http://localhost:${PORT}`)
})