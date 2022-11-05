import {useState} from 'react'
import RecipeName from './RecipeName'
import RecipeIngredients from './RecipeIngredients'
import RecipeDirections from './RecipeDirections'

const NewRecipe = ({formSubmit}) => {
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
    async function handleSubmit(){
        await formSubmit()
        setPage(0)
        clearNewRecipe()
    }
    
    return(
        <div>
            {page === 0 && <RecipeName />}
            {page === 1 && <RecipeIngredients />}
            {page === 2 && <RecipeDirections />}
            {page > 0 && <button type="button" onClick={() => prevPage()} >Back</button>}
            {page < 2 && <button type="button" onClick={() => nextPage()}>Next</button>}
            {page === 2 && <button type='button' onClick={() => handleSubmit()}>Finish</button>}
        </div>
    
    )
    
}

export default NewRecipe