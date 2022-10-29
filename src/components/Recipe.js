import IngredientList from './IngredientList'
import Steps from './Steps'

const Recipe = ({recipe}) => {
    const {name,ingredients,directions} = recipe

    return (
        <section className='recipeCard'>
            <h2>{name}</h2>
            <IngredientList className='ingredList' ingredients={ingredients}/>
            <Steps directions={directions}/>
        </section>
    )
}

export default Recipe