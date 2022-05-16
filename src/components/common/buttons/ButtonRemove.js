import PropType from "prop-types"

const ButtonRemove = ({ children, onclick = f => f }) => {

    return (
        <button className="btn btn-remove" onClick={onclick}>
            {
                children
            }
        </button>
    )
}

ButtonRemove.propTypes={
    children:PropType.object.isRequired,
    onclick:PropType.func
}

export default ButtonRemove;