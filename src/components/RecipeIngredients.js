import {useState, useEffect} from 'react'

const RecipeIngredients = () => {
    const [quantity, setQty] = useState('')
    const [item, setItem] = useState('')
    const [ingredients, setIngredient] = useState(() => JSON.parse(window.localStorage.getItem('ingredients')) || [])
   
    useEffect(() => {
        window.localStorage.setItem('ingredients', JSON.stringify(ingredients))
    },[ingredients])

    const addIngredient = (event) => {
        event.preventDefault()
        setIngredient([...ingredients, {qty: quantity, item: item}])
        setItem('')
        setQty('')
    }
    return (
        <section className="center">
            <h2>Add your Ingredients: </h2>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(( _ , i ) => 
                        <tr>
                            <td key={`${i}qty`}>{ingredients[i].qty}</td>
                            <td key={`${i}item`}>{ingredients[i].item}</td>
                        </tr>
                    )}
                </tbody>
            </table>
           
            <form onSubmit={addIngredient}>
                <label>Qty<input value={quantity} onChange={(event)=>setQty(event.target.value)}></input></label>
                <label>Item<input value={item} onChange={(event)=>setItem(event.target.value)}></input></label>
                <button type="submit">Add Another</button>
            </form>
            
            
           
        </section>
    )
}

export default RecipeIngredients