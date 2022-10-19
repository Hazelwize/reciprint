const Ingredient = ({ingredient}) => {
    const [quantity, name] = ingredient
    return(
        <li>
            <span>{quantity} </span>
            <span>{name}</span>
        </li>
    )
}

export default Ingredient