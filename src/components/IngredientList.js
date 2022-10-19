import Ingredient from './Ingredient'

const IngredientList = ({ingredients}) => {
    return (
        <section>
            <div>
                <h3>Ingredients</h3>
            </div>
            <ul>
                {ingredients.map(ingredient =>(
                    <Ingredient className="ingred" ingredient={ingredient}/>
                ))}
            </ul>
        </section>
    )
}

export default IngredientList