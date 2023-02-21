import React from 'react'
import { useGlobalContext } from '../Context'

const Favorites = () => {

  const {favorites, selectMeal, removeFromFavorite} = useGlobalContext()

  return (
    <section className='favorite'>

    <div className='favorite__container'>

    <h4>Favorites</h4>
    <div className='favorite__content'>
      {
        favorites.map((item)=>{
          const {idMeal, strMealThumb: image} = item;

          return<div key={idMeal} className='favorite__item'>
          <img src={image} alt='favorite__img' className='favorite__img'/>
          <button className='favorite__btn' onClick={()=>removeFromFavorite(idMeal)}>Remove Meal</button>


          </div>
        })
      }
    </div>


    </div>
      
    </section>
  )
}

export default Favorites
