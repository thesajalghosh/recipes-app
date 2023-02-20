import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../Context'
import '../CssFiles/Search.css'

const Search = () => {

const [text, setText] = useState('');
const {setSearchTerm} = useGlobalContext();
const {fatchRandomMeals} = useGlobalContext();

const handleChange = (e) =>{
  setText(e.target.value);
  console.log(e.target.value)
}

const handleSubmit = (e) =>{
  e.preventDefault()

  if(text)
  {
    setSearchTerm(text);
    // setText('');
  }
}
const handleRandomMeal = () =>{
  setSearchTerm()
  setText('')
  fatchRandomMeals();
}



  return (
    <div className="search-container">

    <form className='heading' onSubmit={handleSubmit}>

      <input type='text' onChange={handleChange} placeholder="type your favorite meal" className='input' value={text} />
      <button className='button' >Search</button>
      <button className='suprise-btn' onClick={handleRandomMeal}>Suprise Me!</button>
    </form>
      
    </div>
  )
}

export default Search
