const { fetchData, addData, deleteData, updateData, singleDataFetch } = require('../controller/bookcontroller');


const router = require('express').Router();

//good practice to route api
router.route("/books").get(fetchData).post(addData)
router.route("/books/:id").delete(deleteData).patch(updateData).get(singleDataFetch)

//can also be done like this
// router.get("/books",fetchData)
// router.post("/books",addData)
// router.delete("/books/:id", deleteData)
// router.patch("/books/:id", updateData)

module.exports = router