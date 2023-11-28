const express = require("express")

const router = express.Router()

const bookController = require("../controllers/books")

const authMiddleWare = require("../middlewares/AuthMiddleWare")



router.get("/api/books" ,authMiddleWare, bookController.getAllBooks) // get All books
router.get("/api/books/:id" ,authMiddleWare, bookController.getOneBook) // get one book by id
router.delete("/api/books/:id" ,authMiddleWare, bookController.deleteBook) // delete one book by id
router.put("/api/books/:id" , authMiddleWare, bookController.updateBook) // update one book by id
router.post("/api/books" ,authMiddleWare,  bookController.addBook) //create(add) new book

module.exports = router


