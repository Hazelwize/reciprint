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
        <section className="ingredTable center">
            <h2 className="recipeName">Add your Ingredients: </h2>
            <table className='center'>
                <thead>
                    <tr>
                        <th className="recipeName">Quantity</th>
                        <th className="recipeName">Item</th>
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
           
            <form className="ingredForm" onSubmit={addIngredient}>
                <section className="inputContainer">
                    <label className="inputLabel">Qty</label>
                    <input 
                        className="recipeInputs center" 
                        value={quantity}    
                        onChange={(event)=>setQty(event.target.value)} 
                        ref={inputRef}></input>
                    <label className="recipeLabel">Item</label>
                    <input
                        className="recipeInputs center" 
                        value={item} 
                        onChange={(event)=>setItem(event.target.value)}>
                    </input>
                </section>
                
                <button className="center btn" type="submit">+</button>
            </form>
            
            
           
        </section>
    )
}

export default RecipeIngredients