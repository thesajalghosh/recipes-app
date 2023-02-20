import React from 'react'
import { useGlobalContext } from '../Context'
import '../CssFiles/Model.css'


const Modal = () => {

const {selectedMeal, closeModel} = useGlobalContext();

const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal

  return (
    <aside className="main-layout">
    <div className='model-container scrollbar-width'>
    <img src={image} alt={title} className="model__img"/>
    <div className='model__content'>
      <h4 className='model__title'>{title}</h4>
      <p className='model__text'>Cooking Instruction :</p>
      <p className='model__text'>{text}</p>
      <a href={source} target='_blank' className='model__link' rel="noopener noreferrer" >Origianl Source</a>

    </div>

    <button className='model__btn'  onClick={closeModel}> close</button>

    </div>


    </aside>
  )
}

export default Modal
