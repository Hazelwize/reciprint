
import Header from './components/Header'
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe'
import './App.css';


function App() {
  const recipes = JSON.parse(window.localStorage.getItem('recipes'))

  return (
    <div className="App">
      <Header/>
      <NewRecipe/>
      <ul>
        {recipes.map((el,i) => 
            <li key={i}>
              <Recipe recipe={el}/>
            </li> 
        )}
      </ul>
    </div>
  );
}

export default App;
