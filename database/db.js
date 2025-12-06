//connection of db here

const {Sequelize, DataTypes} = require('sequelize');
const booksModel = require('./models/books.model');

const connection = process.env.connection;

const sequelize = new Sequelize(connection);

sequelize.authenticate().then(()=>{
  console.log("Db connection successful")
}).catch(err =>{
  console.log(`Error : ${err}`)
})

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.book = booksModel(sequelize, DataTypes);

//migrating to db
sequelize.sync({alter:false}).then(()=>{
  console.log("Data migrated successfull ");
}).catch(err =>{
  console.log(`Error : ${err}`)
})
module.exports = db;