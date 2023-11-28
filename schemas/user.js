const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const userSchema = new Schema({

name:String,
email:{type:String , unique:true},
password:String,
role:String


})


userSchema.methods.comparePassword = async function (userPssword) {

    return await bcrypt.compare(userPssword , this.password)
    
}
module.exports = mongoose.model("Users", userSchema) 