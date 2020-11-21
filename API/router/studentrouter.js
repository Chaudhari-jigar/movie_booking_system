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
        if(!req.body){
            console.log(req.body);
            res.status(400).send({message:"Content Can not be empty"});
        }
        const students =await new student(req.body);
        students.save();
        res.send(students);
    }
    catch(error)
    {
        console.log('error'+error);
    }
})

router.delete('/deletestudent/:id',async(req,res) => {
    try{
        const students = await student.findByIdAndDelete({_id:req.params.id});
        res.send(students);
    }catch(error){
        console.log("Deleted error !!");
    }
});

router.get('/singlestudent/:id',async(req,res) => {
    try{
        const students = await student.findById({_id:req.params.id});
        res.send(students);
    }catch(error){
        console.log("fetch error !!");
    }
});

router.put('/updatestudent/:id',async(req,res) => {
    try{
        const students = await student.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        // console.log(students);
       // students.save();
        res.send(students);
    }catch(error){
        console.log("updated error !!"+error);
    }
});

module.exports = router;