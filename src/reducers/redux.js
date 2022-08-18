import { configureStore, createSlice } from "@reduxjs/toolkit";

// **************** SLICE  save user **************************** 
const userSlice = createSlice({
name: 'user',
initialState: {}, 
reducers: {
  setUser : (state, action) => {
var newUser = {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
}
return newUser
},

  setUserFinish : (state, action) =>{

    var newUser = state;
     newUser.count = action.payload.count ;
     newUser.gender = action.payload.gender ;
     newUser.probability = action.payload.probability ;
     newUser.age = action.payload.age ;

     return newUser

},

  setOrigin : (state, action) =>{
    var  newUser = state 
    newUser.origin = action.payload.origin
    
return newUser
  }

}}
) ;

//************** EXPORT *******************
export const store = configureStore({
  reducer: {
    saveUser:userSlice.reducer ,
  }
})

