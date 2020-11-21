const  initialstore = {
    students:[],
    student:{},   
    loading:false,
    error:"",
}

const store = (state = initialstore,action) =>{
    switch(action.type){
        case "INIT_FETCHDATA":
            return{
                ...state,
                loading:true,
            };
        case "INIT_SUCCESS_DATA":
            return{
                ...state,
                loading:false,
                students:action.students
            }
        case "INIT_FAILED_DATA":
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case "INIT_INSERTDATA":
                return{
                    ...state,
                    loading:true,
                };
        case "INIT_SUCCESS_INSERT_DATA":
            return{
                ...state,
                loading:false,
                
            }
        case "INIT_FAILED_INSERT_DATA":
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case "INIT_DELETE_DATA":
                return{
                    ...state,
                    loading:true,

                };
        case "INIT_SUCCESS_DELETE_DATA":
            let studentst = state.students.filter(student => student._id !== action.id);
            return{
                ...state,
                loading:false,   
                students:studentst             
            }
        case "INIT_FAILED_DELETE_DATA":
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case "INIT_SINGLE_DATA":
                return{
                    ...state,
                    loading:true,

                };
        case "INIT_SUCCESS_SINGLE_DATA":
            //console.log(action.student);
           // let studentst = state.students.filter(student => student._id !== action.id);
            return{
                ...state,
                loading:false, 
                student:action.student             
            }
        case "INIT_FAILED_SINGLE_DATA":
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case "INIT_UPDATE_DATA":
                return{
                    ...state,
                    loading:true,
                };
        case "INIT_SUCCESS_UPDATE_DATA":
        // let studentst = state.students.filter(student => student._id !== action.id);
            return{
                ...state,
                loading:false, 
            //   students:studentst             
            }
        case "INIT_FAILED_UPDATE_DATA":
            return{
                ...state,
                loading:false,
                error:action.error
            }
        default :
            return state;
    }
}

export default store;