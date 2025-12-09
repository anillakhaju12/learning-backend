const express = require('express');
const bookRoute = require('./router/bookRouter');
require('./database/db')


const PORT = process.env.PORT || 4000;

const app = express();

//middleware for the json data(it'll help express to understand the json data)
app.use(express.json());

//middleware for the route where "api" is concat with the bookRoute like if bookRoute contains /books then API will be localhost:5000/api/books
app.use("/api/",bookRoute)

app.listen(PORT,()=>{
  console.log( `Server has started on port http://localhost:${PORT}`)
})