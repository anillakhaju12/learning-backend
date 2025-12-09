const { book } = require("../database/db")


exports.fetchData = async (req, res)=>{
  try{
    const bookList = await book.findAll()
    res.json({
    "message" : "Book list are here",
    bookList
  })
  }catch(err){
    console.log(`Error : ${err}`)
  }
}

exports.singleDataFetch = async(req, res)=>{
  const id = req.params.id;
  //there are two ways can be done to do this
  const userData = await book.findByPk(id)

  //another way but not recommed for the user with unique identity
//   const userDatas = await book.findAll({
//     where : {
//       id
//     }
//   })

res.json({
  userData
})
}

exports.addData = async (req, res)=>{
  const {Auther, Name, Price} = req.body
  if(Auther ===undefined || Name ===undefined || Price === undefined){
    res.json({
      message : "Please sent all the data"
    })
  }else{
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
  }
}

exports.deleteData = (req, res)=>{
  res.json({
    "message" : "Data deleted successfully"
  })
}
(req, res)=>{
  res.json({
    "message" : "Data updated successfully"
  })
}
exports.updateData = (req, res)=>{
  res.json({
    "message" : "Data updated successfully"
  })
}