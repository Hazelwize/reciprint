import IngredientList from './IngredientList'
import Steps from './Steps'

const Recipe = ({recipe}) => {
    return (
        <section className='recipeCard'>
            <h2>{recipe.name}</h2>
            <IngredientList className='ingredList' ingredients={recipe.ingredients}/>
            <Steps directions={recipe.directions}/>
        </section>
    )
}

export default Recipe