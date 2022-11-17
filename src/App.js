import React from 'react'
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe'
import RecipeDownload from './components/RecipeDownload'
import './App.css';



function App() {
  // const [recipe, setRecipe] = useState(async() => await JSON.parse(window.localStorage.getItem('recipe')) || {})
  const [recipes, setRecipes] = useState(() => JSON.parse(window.localStorage.getItem('recipes'))|| [])
  const [newForm, setNewForm] = useState(false);
  useEffect( () => {
    window.localStorage.setItem('recipes', JSON.stringify(recipes))
    },[recipes]
  )

  const deleteOne = (key) => {
    setRecipes(recipes.filter((e,i) => i !== key))
  }
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
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <div className="App">
              <Header/>
              <button className="addBtn shareBtn" type='button' onClick={() => setNewForm(!newForm)}>{newForm ? "Hide Recipe Maker" : 'Add New Recipe'}</button>
              {newForm && <NewRecipe formSubmit={makeRecipe}/>}
              <ul className='recipeList'>
                {recipes.map((el,i) => 
                    <li key={i}>
                      <Recipe recipe={el} index={i} deleteRecipe={deleteOne}/>
                    </li> 
                )}
              </ul>
            </div>
          }/>
          <Route path='/addRecipe/:recipe' element={<RecipeDownload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
