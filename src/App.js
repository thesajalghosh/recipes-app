import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Model from './components/Model'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
    <Search/>
    {/* <Favorites/> */}
    <Meals/>
    {/* <Model/> */}
    
      
    </div>
  );
}

export default App;
