import axios from "axios"
import {createContext, useReducer} from "react";
import userReducer from "../reducers/userReducers";


const initialState={
    isPending:true,
    user:{},
    error: null,
}


export const UserContext = createContext();

const UserContextProvider=({children}) => {
    const [state, dispatch]= useReducer(userReducer, initialState)
  
    //user login
    async function loginUser(user) {
        const config = {
            headers:{
                "Content-Type" : "application/json",
            },
        };

        const data= await axios.post("https://radiant-everglades-86669.herokuapp.com/api/v1/users/login" , user, config
    );
    
            
            localStorage.setItem("userInfo", data.data)
            dispatch({
                type: "LOGIN_USER",
                payload:data
            });
        console.log(data)
    }

return (
    <UserContext.Provider value = {{ loginUser, user:state.user, isPending: state.isPending}}> 
    {children}
    </UserContext.Provider>
)
}

 export default UserContextProvider;