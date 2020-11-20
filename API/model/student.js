const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{
        type:String,
        require:true}
    ,
    age:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    }

})
const student = mongoose.model("student",scheme)
module.exports = student
