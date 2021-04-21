import {createContext, useReducer} from "react";
import foodReducer from "../reducers/foodReducer";
import axios from "axios";

const initialState={
    loading:true,
    food:[],
    error: null
}



export const FoodContext = createContext();

const FoodContextProvider=({children}) => {
    const [state, dispatch]= useReducer(foodReducer, initialState)
    //get all food
    async function getFood() {
     const res = await axios.get("https://radiant-everglades-86669.herokuapp.com/api/v2/food")
     try{
         dispatch({
             type: "GET_ALL_FOOD",
             payload:res.data
         })
 } catch (error){
     console.log(error)
 }
    }
    return (
        <FoodContext.Provider value = {{ getFood, food:state.food}}> {children}</FoodContext.Provider>
    )
}


export default FoodContextProvider;