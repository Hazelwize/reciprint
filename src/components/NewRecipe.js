import {useState} from 'react'
import RecipeName from './RecipeName'
import RecipeIngredients from './RecipeIngredients'

const NewRecipe = () => {
    const [page, setPage] = useState(0)
    const nextPage =  () => {
        if(page < 2) setPage(page + 1)
    }
    const prevPage = () => {
        if(page > 0) setPage(page - 1)
    }
    const makeRecipe = () => {}
    return(
        <div>
            {page === 0 && <RecipeName />}
            {page === 1 && <RecipeIngredients />}
            {/* {page === 2 && <RecipeDirections />} */}
            {page > 0 && <button type="button" onClick={() => prevPage()} >Back</button>}
            {page < 2 && <button type="button" onClick={() => nextPage()}>Next</button>}
            {page === 2 && <button type='button' onClick={()=> makeRecipe()}>Finish</button>}
        </div>
    
    )
    
}

export default NewRecipe