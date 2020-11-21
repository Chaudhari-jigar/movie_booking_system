// import React,{useState,useEffect} from 'react';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import EditForm1 from '../components/All Form/editForm';
// import {singleDataFetch} from '../store/action/studentaction';
// import {connect} from 'react-redux';

// const EditForm = (props) => {
//     useEffect(()=>{
//       console.log(props.match.params.id);
//       props.singleDataFetch(props.match.params.id);
//         console.log(props.student);
//       },[props.match.params.id,props.student])
//   return (
//     <>
//     <div><h2>Edit Student DATA</h2></div>
//     <EditForm1 student={props.student} />
//     </>
//   );
// }
// const mapStateToProps =  (state) => ({
//     err:state.Studentreducer.error,
//     student:state.Studentreducer.student
// })

// const mapDispatchToProps = dispatch =>{
//   return{
//     //updatestudentdata: (postdata,put) => dispatch(updatestudentdata(postdata,put)),
//     singleDataFetch:(id)=>dispatch(singleDataFetch(id))
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(EditForm);
