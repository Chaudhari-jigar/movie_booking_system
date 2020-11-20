const express = require('express');
const app = express();
const student = require('../model/student');
const bodyparser = require('body-parser');
const router = new express.Router();
app.use(bodyparser.urlencoded({entended:false}));

router.get('/getstudent',async(req,res)=>{
    try{
        const user =await student.find({});
        res.send(user);
    }
    catch(error){
        console.log("error");
    }
})

router.post('/addstudent',async(req,res)=>{
    try{
        const students =await new student(req.body);
        students.save();
        res.send(students);
    }
    catch(error)
    {
        console.log('error'+error);
    }
})

module.exports = router;