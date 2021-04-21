const foodReducer = (state, action) => {
    switch(action.type){
        case "GET_ALL_FOOD":
    return {
      ...state,
      food:action.payload,
     loading:false
        }
        default: 
        return state
}
}


export default foodReducer;