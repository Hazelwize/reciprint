import {useState, useEffect} from 'react'

const RecipeName = () => {
    const [name, setName] = useState(() => window.localStorage.getItem('name') || '')
    
    useEffect(() => {
        window.localStorage.setItem('name', name)
    },[name])
    return (
        <section>
            <h2>Name your recipe:</h2>
            <input value={name} onChange={(event) => setName(event.target.value)}></input>
        </section>
    )
}

export default RecipeName