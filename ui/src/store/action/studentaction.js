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
            //console.log(res.data);
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

export const deletestudentdata = (id) =>{
    return async(dispatch)=>{
        dispatch({
            type:"INIT_DELETE_DATA"
        })
        await axios.delete(`http://localhost:3001/deletestudent/${id}`).then(res => {
            //console.log(res.data);
            dispatch({
                type:"INIT_SUCCESS_DELETE_DATA",
                id:id
            })
        }).catch(error=>{
            dispatch({
                type:"INIT_FAILED_DELETE_DATA",
                error:error.message
            })
        });    
    }
}

export const singleDataFetch = (id) =>{
    //console.log(id);
    return async(dispatch)=>{
        dispatch({
            type:"INIT_SINGLE_DATA"
        })
        await axios.get(`http://localhost:3001/singlestudent/${id}`).then(res => {
            //console.log(res.data);
            dispatch({
                type:"INIT_SUCCESS_SINGLE_DATA",
                student:res.data
            })
        }).catch(error=>{
            dispatch({
                type:"INIT_FAILED_SINGLE_DATA",
                error:error.message
            })
        });    
    }
}   

export const updatestudentdata = (id,put) =>{
    console.log(id);
    return async(dispatch)=>{
        dispatch({
            type:"INIT_UPDATE_DATA"
        })
        await axios.put(`http://localhost:3001/updatestudent/${id}`,put).then(res => {
            console.log(res.data);
            dispatch({
                type:"INIT_SUCCESS_UPDATE_DATA",
                students:res.data
            })
        }).catch(error=>{
            dispatch({
                type:"INIT_FAILED_UPDATE_DATA",
                error:error.message
            })
        });    
    }
}   