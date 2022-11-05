import React from 'react'
import {useState,useEffect} from 'react'
import Header from './components/Header'
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe'
import './App.css';



function App() {
  // const [recipe, setRecipe] = useState(async() => await JSON.parse(window.localStorage.getItem('recipe')) || {})
  const [recipes, setRecipes] = useState(() => JSON.parse(window.localStorage.getItem('recipes'))|| [])
  
  
  // useEffect(() =>{
  //   const getRecipes = async () => {
  //     const recipesFromStorage = JSON.parse(window.localStorage.getItem(recipes))
  //     setRecipes(recipesFromStorage)
  //   }
    
  //   getRecipes()
  // }, [recipes])
  async function makeRecipe(){
    try{
        const name = window.localStorage.getItem('name')
        const ingredients = await JSON.parse(window.localStorage.getItem('ingredients'))
        const directions = await JSON.parse(window.localStorage.getItem('directions'))
        console.log(directions)
        let newRecipe = {
            name: name,
            ingredients : ingredients,
            directions : directions,
        }
        setRecipes([...recipes, newRecipe])
        window.localStorage.setItem('recipes',JSON.stringify([...recipes, newRecipe]));
        
    }

    catch(err){
        console.log(err)
    }


  }
  console.log(recipes)
  return (
    <div className="App">
      <Header/>
      <NewRecipe formSubmit={makeRecipe}/>
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
