import {useState, useEffect} from 'react';

const RecipeDirections = () => {
    const [step, setStep] = useState(JSON.parse(window.localStorage.getItem('step')) || "")
    const [directions, setDirections] = useState(() => JSON.parse(window.localStorage.getItem('directions')) || [])

    useEffect( () => {
        window.localStorage.setItem('directions', JSON.stringify(directions))
        },[directions]
    )
    const addDirections = (event) => {
        event.preventDefault()
        setDirections([...directions, step])
        setStep('')
    }

    return(
        <section className="center">
            <h2>Add your Directions: </h2>
            <ol>
                {directions.map(( step , i ) => 
                    <li key={i}>
                        <p>{step}</p>
                    </li>
                )}
            </ol>
            <form onSubmit={addDirections}>
                <label>Step<textarea value={step} onChange={(event)=>setStep(event.target.value)}></textarea></label>
                <button type="submit">Add Another</button>
            </form>  
           
        </section>
    )
}

export default RecipeDirections;