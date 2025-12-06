
//creating books tables here
const booksModel = (sequelize, DataTypes)=>{
  const book = sequelize.define("books",{
    bookAuther : {
      type : DataTypes.STRING,
      defaultValues : "Aynonomuns"
    },
    bookName : {
      type : DataTypes.STRING,
      allowNull : false
    },
    bookPrice : {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  })

  return book;
}

module.exports = booksModel