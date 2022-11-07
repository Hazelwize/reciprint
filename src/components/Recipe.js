import IngredientList from './IngredientList'
import Steps from './Steps'

const Recipe = ({recipe, index, deleteRecipe}) => {
    const {name,ingredients,directions} = recipe

    return (
        <section className='recipeCard'>
            <button className='deleteIcon'type="button" onClick={() => deleteRecipe(index)}>x</button>
            <h2 className='recipeName'>{name}</h2>
            
            <div className="recipeBody">
                <IngredientList  ingredients={ingredients}/>
                <Steps directions={directions}/>
            </div>
            
        </section>
    
    )
}

export default Recipe
