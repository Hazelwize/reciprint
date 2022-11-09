import IngredientList from './IngredientList'
import Steps from './Steps'
import QRCode from './QRCode'
import {useState} from 'react'

const Recipe = ({recipe, index, deleteRecipe}) => {
    const [share, setShare] = useState(false)
    const {name,ingredients,directions} = recipe


    return (
        <section className='recipeCard'>
            <button className='deleteIcon'type="button" onClick={() => deleteRecipe(index)}>x</button>
            <h2 className='recipeName'>{name}</h2>
            
            <div className="recipeBody">
                <IngredientList  ingredients={ingredients}/>
                <Steps directions={directions}/>
            </div>
            {share && <QRCode recipe={recipe}/>}
            <button type="button" onClick={() => {setShare(!share)}}>Share</button>
            
        </section>
    
    )
}

export default Recipe
