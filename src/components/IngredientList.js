import Ingredient from './Ingredient'

const IngredientList = ({ingredients}) => {
    return (
        <section>
            <div>
                <h3>Ingredients</h3>
            </div>
            <ul>
                {ingredients.map((ingredient,i) =>(
                    <Ingredient key={i} className="ingred" ingredient={ingredient}/>
                ))}
            </ul>
        </section>
    )
}

export default IngredientList