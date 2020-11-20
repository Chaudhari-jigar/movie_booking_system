const  initialstore = {
    students:[],    
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
            default :
                return state;
    }
}

export default store;