import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {addstudentdata,fetchstudentdata,deletestudentdata,singleDataFetch} from '../../store/action/studentaction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const StudentList = (props) => {
  // console.log(props);
  useEffect(()=>{
    props.fetchstudentdata();
    //console.log(props.student);
  },[props.fetchstudentdata])
  const [obj,setMyObj]= useState({
    name:"",
    age:0,
    city:""
  })

  const handleSubmit = async () =>{
    //console.log(props.students);
     console.log(obj);
     await props.addstudentdata(obj);
     //console.log("Called")
  }

  const HandleChange = (e,name) =>{
     let olddata = {...obj};
     olddata[name] = e.target.value;
     //console.log(olddata);
     setMyObj(olddata);
  }

  const updateHandler = async (id) =>{
    //await props.singleDataFetch(id);
    await props.singleDataFetch(id);
    props.history.replace(`/studentEdit/${id}`);
    //console.log(id);
  }
  
  const deleteHandler =async (id) =>{
    await props.deletestudentdata(id);
    //console.log(id);
  }

  const renderTableData = () => {
    return props.students.map((student, index) => {
       const { _id, name, age, city } = student
       return (
          <tr key={_id}>
             <td>{_id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{city}</td>
             <td><Button onClick={() => updateHandler(_id)}>UPDATE</Button></td>
             <td><Button onClick={() => deleteHandler(_id)}>Delete</Button></td>
          </tr>
       )
    })
 }

  return (
    <>
    {/* <div><h2>Hello World !!</h2></div> */}
    {/* <FormControl noValidate autoComplete="off">
      <Input type="text" placeholder="enter name" name="name" onChange={(e)=>{HandleChange(e,"name")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Input type="number" placeholder="enter age"  name="age" onChange={(e)=>{HandleChange(e,"age")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Input type="text" placeholder="enter city"  name="city" onChange={(e)=>{HandleChange(e,"city")}}/>
    </FormControl>
    <FormControl noValidate autoComplete="off">
      <Button name="submit" style={{backgroundColor:"red"}} onClick={handleSubmit}>Submit</Button>
    </FormControl> */}
    <div>
      <div>
          <h1 id='title'>Students Data</h1>
            <table id='students'>
               <tbody>
                  {renderTableData()}
               </tbody>
            </table>
            <Button as={Link} to="/studentAdd">Add Students DATA</Button>
      </div>
    </div>
    </>
  );
}

const mapStateToProps =  (state) => ({
  err:state.Studentreducer.error,
  students:state.Studentreducer.students,
  student:state.Studentreducer.student
})

const mapDispatchToProps = dispatch =>{
  return{
    addstudentdata: (postdata) => dispatch(addstudentdata(postdata)),
    fetchstudentdata:()=>dispatch(fetchstudentdata()),
    deletestudentdata:(id)=>dispatch(deletestudentdata(id)),
    singleDataFetch:(id)=>dispatch(singleDataFetch(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
