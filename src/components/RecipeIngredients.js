import {useState, useEffect, useRef} from 'react'

const RecipeIngredients = () => {
    const [quantity, setQty] = useState('')
    const [item, setItem] = useState('')
    const [ingredients, setIngredient] = useState(() => JSON.parse(window.localStorage.getItem('ingredients')) || [])
   
    useEffect(() => {
        window.localStorage.setItem('ingredients', JSON.stringify(ingredients))
    },[ingredients])

    const inputRef = useRef()

    const addIngredient = (event) => {
        event.preventDefault()
        setIngredient([...ingredients, {qty: quantity, item: item}])
        setItem('')
        setQty('')
        inputRef.current?.focus()  
    }
    const deleteOne = (key) => {
        setIngredient( ingredients.filter((e,i) => i !== key))
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
                        <tr key={i}>
                            <td key={`${i}qty`}>{ingredients[i].qty}</td>
                            <td key={`${i}item`}>{ingredients[i].item}</td>
                            <button key={i} onClick={() => deleteOne(i)}>-</button>
                        </tr>
                    )}
                </tbody>
            </table>
           
            <form onSubmit={addIngredient}>
                <label>Qty<input 
                    className="recipeInputs" 
                    value={quantity}    
                    onChange={(event)=>setQty(event.target.value)} 
                    ref={inputRef}></input></label>
                <label>Item<input
                    className="recipeInputs" 
                    value={item} 
                    onChange={(event)=>setItem(event.target.value)}>
                            </input></label>
                <button className="btn" type="submit">+</button>
            </form>
            
            
           
        </section>
    )
}

export default RecipeIngredients