import Step from './Step'

const Steps = ({directions}) => {
    return (
        <section className="directionsList">
            <div>
                <h3 className="recipeName">Directions</h3>
            </div>
            <ol>
                {directions != null && directions.map((step,i) =>(
                    <Step key={i} step={step}/>
                ))}
            </ol>
        </section>
    )
}

export default Steps