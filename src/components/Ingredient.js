const Ingredient = ({ingredient}) => {
    const {qty, item} = ingredient
    return(
        <li>
            <span>{qty} </span>
            <span>{item}</span>
        </li>
    )
}

export default Ingredient