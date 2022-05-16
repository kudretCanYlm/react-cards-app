import PropType from "prop-types"

const ButtonClear = ({ children }) => {

    return (
        <button className="btn btn-clear">
            {
                children
            }
        </button>
    )
}

ButtonClear.propTypes={
    children:PropType.object.isRequired
}

export default ButtonClear;