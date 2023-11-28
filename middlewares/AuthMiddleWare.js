const jwt = require("jsonwebtoken");


module.exports =(req,res,next)=>{
 try {

    const fullToken = req.headeres.authoraization
    const token = fullToken?.split("")
    console.log( "token Example:" + token);
    if (!token) 
    return  res.status(403).send("Access denied")
   const decodedToken =jwt.verify(token , "mnmnmn")
   console.log(decodedToken)
    req.user = decodedToken

    next()

 } catch (error) {
    console.log(error);
    res.status(400).send("invalid token")
 }

} 