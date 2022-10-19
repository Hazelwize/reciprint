import {useState,useEffect} from 'react'
import Header from './components/Header'
import IngredientList from './components/IngredientList'
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe'
import './App.css';


function App() {
  const recipe = {
    name: 'bread',
    type: 'bake',
    ingredients: [['1/3c','all purpose flour'],['1/2c','brown sugar'], ['1/2c','unsalted butter'],['2 tsp','baking powder']],
    cookTime: 60,
    directions:['preheat oven','mix all ingledients', 'pour in hotwok', "cook til' satisfy"],
  }
  return (
    <div className="App">
      <Header/>
      <NewRecipe />
      <Recipe recipe={recipe}/>
      
    </div>
  );
}

export default App;
