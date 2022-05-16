import PropTypes from "prop-types";
import { AiTwotoneShopping } from "react-icons/ai"

export default function AmountIcon({ amount }) {

    return (
        <>
            <div className="shop-icon">
                <AiTwotoneShopping className="icon" >
                    
                </AiTwotoneShopping>
                <p className="amount" >
                    {
                        amount
                    }
                </p>
            </div>
        </>
    )
}

AmountIcon.propTypes = {
    amount: PropTypes.number.isRequired
}