import {useParams, Navigate, useNavigate, useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'

const RecipeDownload = () => {
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const addRecipe = async(newRecipe) => {
            try{
                let recipes = await JSON.parse(window.localStorage.getItem('recipes'))
                newRecipe = await JSON.parse(newRecipe)
                await window.localStorage.setItem('recipes', JSON.stringify([...recipes, newRecipe]))
            }
            catch(err){
                console.log(err)
            }
        }
        addRecipe(params.recipe)
        setLoading(false)
    })
    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <>
            <h1>Your Recipe Was Added!</h1>
            <button type="button" onClick={() => navigate(-1)}> Go back! </button>
        </>
    )
}

export default RecipeDownload