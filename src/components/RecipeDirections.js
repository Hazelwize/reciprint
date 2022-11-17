import {useState, useEffect, useRef} from 'react';


const RecipeDirections = () => {
    const [step, setStep] = useState(() => JSON.parse(window.localStorage.getItem('step')) || "")
    const [directions, setDirections] = useState(() => JSON.parse(window.localStorage.getItem('directions')) || [])

    const inputRef = useRef()
    useEffect( () => {
        window.localStorage.setItem('directions', JSON.stringify(directions))
        },[directions]
    )
    const deleteOne = (key) => {
        setDirections( directions.filter((e,i) => i !== key))
    }
    const addDirections = (event) => {
        event.preventDefault()
        setDirections([...directions, step])
        setStep('')
        inputRef.current?.focus()
    }

    return(
        <section className="center">
            <h2 className="recipeName">Add your Directions: </h2>
            <ol>
                {directions.map(( step , i ) => 
                    <li className='stepsList'key={i}>
                        <p>{step}</p>
                        <button key={i} onClick={() => deleteOne(i)}>-</button>
                    </li>
                )}
            </ol>
            <form className="ingredForm" onSubmit={(e) => addDirections(e)}>
                <label>Add each step:</label>
                    <textarea ref={inputRef} className="textareaInput" value={step} onChange={(event)=>setStep(event.target.value)}></textarea>
                <button className="center btn" type="submit">+</button>
            </form>  
           
        </section>
    )
}

export default RecipeDirections;