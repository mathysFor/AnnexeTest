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

  setUserWithApi : (state, action) => {
    var newUser = {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    gender: action.payload.gender,
    probability: action.payload.probability,
    
}
return newUser
  },

  setUserFinish : (state, action) =>{
    var newUser = {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    gender: action.payload.gender,
    probability: action.payload.probability,
    age: action.payload.age,
}

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

