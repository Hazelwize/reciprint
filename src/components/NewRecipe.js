import {useState} from 'react'
import RecipeName from './RecipeName'
import RecipeIngredients from './RecipeIngredients'
import RecipeDirections from './RecipeDirections'

const NewRecipe = () => {
    const [page, setPage] = useState(0)
    const nextPage =  () => {
        if(page < 2) setPage(page + 1)
    }
    const prevPage = () => {
        if(page > 0) setPage(page - 1)
    }
    const clearNewRecipe = () => {
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('ingredients')
        window.localStorage.removeItem('directions')
    }
    const makeRecipe = async () => {
        try{
            const name = window.localStorage.getItem('name')
            const ingredients = await JSON.parse(window.localStorage.getItem('ingredients'))
            const directions = await JSON.parse(window.localStorage.getItem('directions'))
            let newRecipe = {
                name: name,
                ingredients : ingredients,
                directions : directions
            }
            let recipes = JSON.parse(window.localStorage.getItem('recipes')) || []
            window.localStorage.setItem('recipes',JSON.stringify([...recipes, newRecipe]));
            clearNewRecipe()
            setPage(0)
        }

        catch(err){
            console.log(err)
        }
        
        
    }
    
    return(
        <div>
            {page === 0 && <RecipeName />}
            {page === 1 && <RecipeIngredients />}
            {page === 2 && <RecipeDirections />}
            {page > 0 && <button type="button" onClick={() => prevPage()} >Back</button>}
            {page < 2 && <button type="button" onClick={() => nextPage()}>Next</button>}
            {page === 2 && <button type='button' onClick={() => makeRecipe()}>Finish</button>}
        </div>
    
    )
    
}

export default NewRecipe