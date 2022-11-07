const Alert = ({name}) => {
    return(
        <div className="redAlert">
            <span>You can't leave {name} empty!</span>
        </div>
    )
}

export default Alert