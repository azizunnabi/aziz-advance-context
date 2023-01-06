import React from 'react'
import { useEffect ,useContext} from 'react'
import axios from 'axios'
import { Shop } from './Store'

export const Products = () => {
    const {state,dispatch} =useContext(Shop)
    

useEffect(() =>{
    dispatch({type: "START_LOADER", payLoad : true})
axios.get(`https://fakestoreapi.com/products/`).then(({data})=>{
    dispatch({type:"CLOSE_LOADER",payLoad : true})
    dispatch({type: 'PRODUCTS',payLoad : data})
})

},[])

  return (
    <div>
    {state.Loading ? "Loading" : 

    <div>
     {state.allProducts.map((item)=>{
        
        console.log(item)
        

        return (
            <div>
            <div><img src={item.image} /></div>
            </div>

        )
     })}
     </div>

}
 
</div> )
}
