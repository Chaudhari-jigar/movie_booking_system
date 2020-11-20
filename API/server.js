const express = require('express');
const app = express(); 
const cors = require('cors');
require('./model/mongoose');
const studentrouter = require('./router/studentrouter');
app.use(express.json());
app.use(studentrouter);
app.use(cors());
// app.get("/",(req,res) =>{
//     res.send("Hello world !!");
// });

app.listen(3001,() =>{
    console.log("Server is running 3001");
});