import React,{useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {updatestudentdata,singleDataFetch} from '../../store/action/studentaction';
import {connect} from 'react-redux';

const EditForm = (props) => {
  const [obj,setMyObj1]= useState({
    _id:"",
    name:"",
    age:"",
    city:""
  })
      if(props.student.name && !obj.name){
        setMyObj1(props.student); 
      } 
    
  const handleSubmit = async () =>{
   console.log(props.student);   
     console.log(obj._id);
     await props.updatestudentdata(obj._id,obj);

     props.history.replace(`/student`);
  }

  const HandleChange = (e,name) =>{
     let olddata = {...obj};
     olddata[name] = e.target.value;
     setMyObj1(olddata);
  }
    
  return (
    <>
    <div><h2>Edit Student DATA</h2></div>
    <FormControl noValidate autoComplete="off">
      <Input type="hidden" name="_id" value={obj._id}  onChange={(e)=>{HandleChange(e,"_id")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Input type="text" placeholder="enter name" name="name" value={obj.name}  onChange={(e)=>{HandleChange(e,"name")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Input type="number" placeholder="enter age"  name="age" value={obj.age} onChange={(e)=>{HandleChange(e,"age")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Input type="text" placeholder="enter city"  name="city" value={obj.city} onChange={(e)=>{HandleChange(e,"city")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Button name="submit" style={{backgroundColor:"red"}} onClick={handleSubmit}>Submit</Button>
    </FormControl>
    </>
  );
}
const mapStateToProps =  (state) => ({
    err:state.Studentreducer.error,
    student:state.Studentreducer.student
})

const mapDispatchToProps = dispatch =>{
  return{
    updatestudentdata: (postdata,put) => dispatch(updatestudentdata(postdata,put)),
    singleDataFetch:(id)=>dispatch(singleDataFetch(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditForm);
