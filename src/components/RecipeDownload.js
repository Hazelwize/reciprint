import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

const RecipeDownload = ({onLoad}) => {
    const [loading, setLoading] = useState(true)
    const params = useParams()


    // const underscoreToSpaces = (str) => {
    //     return str.replaceAll('_',' ');
    // }

    useEffect(() => {
        const addRecipe = async(newRecipe) => {
            try{
                console.log(newRecipe)
                let recipes = await JSON.parse(window.localStorage.getItem('recipes'))
                // const hashLink = underscoreToSpaces(newRecipe)
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
            <h1 className="addedRec">Your Recipe Was Added!</h1>
            <Link onClick={() => onLoad()} className="btn" to="/"> Go Back! </Link>
        </>
    )
}

export default RecipeDownload