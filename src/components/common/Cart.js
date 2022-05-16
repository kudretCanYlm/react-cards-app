import {
    IoIosArrowUp,
    IoIosArrowDown
} from "react-icons/io"
import ButtonRemove from "./buttons/ButtonRemove"
import PropType from "prop-types"

export default function Cart({ cart, removeFun = f => f, upfun = f => f, downFun = f => f }) {


    return (
        <div className="cart flex-row">
            <div className="left flex-row">
                <div className="img">
                    <img src={cart.imgUrl} />
                </div>
                <div className="content flex-column">
                    <h1>
                        {
                            cart.name
                        }
                    </h1>
                    <h2>
                        {
                            cart.price
                        }
                    </h2>
                    <ButtonRemove onclick={removeFun} >
                        {
                            "remove"
                        }
                    </ButtonRemove>
                </div>
            </div>
            <div className="right flex-column">
                <IoIosArrowUp className="arrow" onClick={upfun} />
                <span className="total">
                    {
                        cart.total
                    }
                </span>
                <IoIosArrowDown className="arrow" onClick={downFun} />
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropType.object.isRequired,
    removeFun: PropType.func,
    upfun: PropType.func,
    downFun: PropType.func
}
