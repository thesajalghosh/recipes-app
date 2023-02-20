import React, { useContext, useEffect, useState } from "react"
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setloading]  = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModel, setShowModel]  = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    

    const fetchMeals = async(url) =>{
        setloading(true)
        try{
            const {data} = await axios(url)
           if(data.meals)
           {
           setMeals(data.meals)
           }
           else
           {
               setMeals([])
           }
           
        }
        catch(error)
        {
            console.log(error);
        }
        setloading(false)
    }

    const fatchRandomMeals = ()=>{
        fetchMeals(randomMealUrl)
    }

    useEffect(() =>{
      
        fatchRandomMeals(allMealsUrl);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const selectMeal = (idMeal, favoriteMeal) =>{
        let meal;
        meal = meals.find((meal) =>meal.idMeal === idMeal)
        setSelectedMeal(meal);
        setShowModel(true)
    }

    const closeModel = ()=>{
        setShowModel(false);
    }

    useEffect(()=>{
        // if(!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`);
    },[searchTerm])


    return(<AppContext.Provider value={{ loading, meals, setSearchTerm, fatchRandomMeals, showModel, selectedMeal, selectMeal, closeModel}}>
    
   {children}
    
    </AppContext.Provider>)
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};
