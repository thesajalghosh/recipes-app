import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../Context'
import '../CssFiles/Search.css'

const Search = () => {
  return (
    <div className="search-container">

    <form className='heading'>

      <input type='text' placeholder="type your favorite meal" className='input'/>
      <button className='button'>Search</button>
      <button className='suprise-btn'>Suprise Me!</button>
    </form>
      
    </div>
  )
}

export default Search
