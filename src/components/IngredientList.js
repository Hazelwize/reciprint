import Ingredient from './Ingredient'

const IngredientList = ({ingredients}) => {
    return (
        <section className='ingredList'>
            <div>
                <h3 className="recipeName">Ingredients</h3>
            </div>
            <ul className="ingred">
                {ingredients.map((ingredient,i) =>(
                    <Ingredient key={i} className="ingred" ingredient={ingredient}/>
                ))}
            </ul>
        </section>
    )
}

export default IngredientList