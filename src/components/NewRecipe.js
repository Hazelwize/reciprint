import {useEffect, useState} from 'react'
import RecipeName from './RecipeName'
import RecipeIngredients from './RecipeIngredients'
import RecipeDirections from './RecipeDirections'
import Alert from './Alert'

const NewRecipe = ({formSubmit}) => {
    const [page, setPage] = useState(0)
    const [alert, setAlert] = useState(false)

    const checkInput = async() => {
        let value = await window.localStorage.getItem(pageName[page])
        return value !== '' && value !== '[]'
    }

    const nextPage = async() => {
        let value = await checkInput()
        if(value){
            if(page < 2)setPage(page + 1)
            setAlert(false)
        }else{
            setAlert(true)
        }
    }
    const pageName = ["name", "ingredients", "directions"]

    const prevPage = () => {
        setAlert(false)
        if(page > 0) setPage(page - 1)
    }

    const clearNewRecipe = () => {
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('ingredients')
        window.localStorage.removeItem('directions')
    }

    async function handleSubmit(){
        let value = await checkInput()
        if(value){
            await formSubmit()
            setPage(0)
            clearNewRecipe()
        }else{
            setAlert(true)
        }
    }
    
    return(
        <div className="recipeForm">
            {alert && <Alert name={pageName[page]}/>}
            {page === 0 && <RecipeName />}
            {page === 1 && <RecipeIngredients />}
            {page === 2 && <RecipeDirections />}
            {page > 0 && <button className="btn" type="button" onClick={() => prevPage()} >Back</button>}
            {page < 2 && <button className="btn" type="button" onClick={() => nextPage()}>Next</button>}
            {page === 2 && <button className="btn" type='button' onClick={() => handleSubmit()}>Finish</button>}
        </div>
    
    )
    
}

export default NewRecipe