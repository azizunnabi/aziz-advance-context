import React from 'react'
import { createContext,useReducer } from 'react'
export const  Shop= createContext()
const initState={allProducts: [], loading: true}
const Reducer = (state, action)=>{
  const {type,payLoad} = action

  switch(type){
    case "START_LOADER" :
      return {...state, loading: payLoad}
  
  break;

  case "CLOSE_LOADER" :
    return {...state, loading : payLoad}
  break;

    case "PRODUCTS" :
      return {...state, AllProducts : payLoad}

      break ;
  default :


  return state
}}
const Store = (props) => {
    const [state, dispatch]=useReducer(Reducer, initState)
    

  return (
   <Shop.Provider  value={{state,dispatch}}>
   {props.children}
   </Shop.Provider>
  )
}

export default Store