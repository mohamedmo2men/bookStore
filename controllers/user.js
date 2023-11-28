const userModle = require("../schemas/user");
const bcrypt = require("bcrypt");
const jwt =require ("jsonwebtoken");


exports.register = async function (req, res) {
  try {
    let newUser = new userModle(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser.password = hashedPassword;
    let user = newUser.save();

    return res.json({
      message: "user registed ",
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

exports.login = async function (req, res) {
  try {

    let user = await userModle.findOne({email:req.body.email});
   if (!user  ){
    return res.status(401).json({ message: "authentaction failed....invalid email or password " });


   }

   if (await(user.comparePassword(req.body.password)) === false) {
    return res.status(401).json({ message: "authentaction failed....invalid email or password " });
   }

const token = jwt.sign({ name:user.name , email:user.email , _id:user.id

},"mnmnmn")

return res.json({
    message: "user logged ",
    user: { name: user.name, email: user.email, token:token, role:user.role },
  });

  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
