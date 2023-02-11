import React, { useContext, useEffect, useState } from "react"
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=d'
const randomMealUrl = 'www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setloading]  = useState(false);

    const fetchMeals = async() =>{
        setloading(true)
        try{
            const {data} = await axios(allMealsUrl)
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

    useEffect(()=>{
        
        fetchMeals();
    },[])


    return(<AppContext.Provider value={{ loading, meals}}>
    
   {children}
    
    </AppContext.Provider>)
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};
