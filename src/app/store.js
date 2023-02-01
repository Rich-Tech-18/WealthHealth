import { createStore } from "redux";


const initialState = {
    user : [

    ]
};



export const dataUser = (data) => ({
  type: "newUser",
  payload: data
})


function reducer(state, action){
    
    // if(action.type === "name"){
    //     const first = action.payload.firstName;
    //     return{
    //         ...state,
    //         firstName: first
    // }
    // }
    if(action.type === "newUser"){
      return{
        ...state,
        user: [...state.user, action.payload]

      }
    }
    return state;
    
}


export const store = createStore(reducer, initialState);
