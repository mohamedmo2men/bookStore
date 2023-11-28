const bookModle = require("../schemas/book");


exports.getAllBooks = async function (req, res) {
  try {
    const Books = await bookModle.find();

    return res.json({
      message: "Done",
      data: Books,
    });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

exports.getOneBook = async function (req, res) {
  try {
    const book = await bookModle.find({ _id: req.params.id });
    if (!book) {
      return res.json({
        message: "not Found",
        data: book,
      });
    } else {
      return res.json({
        message: "finded it",
        data: book,
      });
    }
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
exports.deleteBook = async function (req, res) {
  try {
  const Role = user.req.Role

  if (Role=== "Admin") {
    await bookModle.findByIdAndDelete(req.params.id);

    return res.json({
      message: "deletded it",
      data: [],
    });
   
  }
  else{

    return  res.status(403).json({message:"Access denied"})
  }
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
exports.updateBook = async function (req, res) {
  try {
    const Role = user.req.Role

    if (Role=== "Admin"){
    await bookModle.findByIdAndUpdate(req.params.id, req.body);

    return res.json({
      message: "updated done",
      data: [],
    });}
    else{

      return  res.status(403).json({message:"Access denied"})
    }

  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
exports.addBook = async function (req, res) {
  try {


    const Role = user.req.Role

    if (Role=== "Admin"){
    const newBook = await bookModle.create(req.body);

    return res.json({
      message: "created done",
      data: newBook,
    });}

    else{

      return  res.status(403).json({message:"Access denied"})
    }
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
