import Step from './Step'

const Steps = ({directions}) => {
    return (
        <section>
            <div>
                <h3>Directions</h3>
            </div>
            <ol>
                {directions.map((step,i) =>(
                    <Step key={i} step={step}/>
                ))}
            </ol>
        </section>
    )
}

export default Steps