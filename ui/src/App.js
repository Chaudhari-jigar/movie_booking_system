import './App.css';
import React,{useState,useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {addstudentdata,fetchstudentdata} from './store/action/studentaction';
import {connect} from 'react-redux';
import StudentList from './components/studentList';

const App = (props) => {
  useEffect(()=>{
    props.fetchstudentdata();
    console.log(props.students);
  },[props.fetchstudentdata])
  const [obj,setMyObj]= useState({
    name:"",
    age:0,
    city:""
  })

  const handleSubmit = async () =>{
    console.log(props.students);
    // console.log(obj);
    // await props.addstudentdata(obj);
    // console.log("Called")
  }

  const HandleChange = (e,name) =>{
     let olddata = {...obj};
     olddata[name] = e.target.value;
     console.log(olddata);
     setMyObj(olddata);
  }

  return (
    <>
    <div><h2>Hello World !!</h2></div>
    <FormControl noValidate autoComplete="off">
    <Input type="text" placeholder="enter name" name="name" onChange={(e)=>{HandleChange(e,"name")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
    <Input type="number" placeholder="enter age"  name="age" onChange={(e)=>{HandleChange(e,"age")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
    <Input type="text" placeholder="enter city"  name="city" onChange={(e)=>{HandleChange(e,"city")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
    <Button name="submit" style={{backgroundColor:"red"}} onClick={handleSubmit} >Submit</Button>
    </FormControl>
    </>
  );
}

const mapStateToProps =  (state) => ({
  err:state.Studentreducer.error,
  students:state.Studentreducer.students
})

const mapDispatchToProps = dispatch =>{
  return{
    addstudentdata: (postdata) => dispatch(addstudentdata(postdata)),
    fetchstudentdata:()=>dispatch(fetchstudentdata())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
