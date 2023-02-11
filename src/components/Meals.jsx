import React from 'react'
import { useGlobalContext } from '../Context'
import '../CssFiles/Meals.css'
import {  FcLike } from 'react-icons/fc';


const Meals = () => {

  const {loading, meals} = useGlobalContext();

 if(loading)
 return(<div className="loading">
   <h4>Loading...</h4>
 </div>)

 if(meals.length<1)
 {
   return(
     <h4>No meals matched to your search value, Please try again</h4>
   )
 }
  
  return (
    <div className="container">
    <div className="main">
      {meals.map((singleMeal) =>{
        console.log(singleMeal)
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal
        return(
          <div key={idMeal} className='singlemeal'>
          <img src={image} alt='this is meal ' className="picture"/>
          <div className="footer">
          
         <h3 className="title">{title}</h3>
         <div className="lower-title">
         <button className='btn'>Show More About Dish</button>
         <FcLike className="icon"></FcLike>
         </div>
         </div>
        
        </div>
       
        
        )

      })}
      </div>
    </div>
  )
}

export default Meals
