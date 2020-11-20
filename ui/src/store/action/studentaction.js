import axios from "axios";

export const fetchstudentdata = () =>{
    return async(dispatch)=>{
        dispatch({
            type:"INIT_FETCHDATA"

        })
        await axios.get("http://localhost:3001/getstudent").then(res => {
            dispatch({
                type:"INIT_SUCCESS_DATA",
                students:res.data
            })
        }).catch(error=>{
            dispatch({
                type:"INIT_FAILED_DATA",
                error:error.message
            })
        });        
    }
}

export const addstudentdata = (postdata) =>{
    return async(dispatch)=>{
        dispatch({
            type:"INIT_INSERTDATA"
        })
        await axios.post("http://localhost:3001/addstudent",postdata).then(res => {
            console.log(res.data);
            dispatch({
                type:"INIT_SUCCESS_INSERT_DATA",
                students:res.data
            })
        }).catch(error=>{
            dispatch({
                type:"INIT_FAILED_INSERT_DATA",
                error:error.message
            })
        });    
    }
}