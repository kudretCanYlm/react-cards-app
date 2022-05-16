import { useContext, useEffect, useState } from "react"
import ShoppingCartContext from "../contexts/ShoppingCartContext"
import {
    GET_ALL,
    GET_TOTAL_AMOUNT,
    DELETE_CARD,
    CHANGE_CART_TOTAL
} from "../actions/CartActions"
import Cart from "../components/common/Cart";
import "../styles/style.css";
import NavBar from "../components/main/NavBar"

export default function CartRoute() {

    let funs = useContext(ShoppingCartContext);
    let [carts, setCarts] = useState(funs(GET_ALL));

    let [amount, setAmount] = useState(funs(GET_TOTAL_AMOUNT));

    useEffect(() => {
        setAmount(funs(GET_TOTAL_AMOUNT));
    }, [carts])

    const removeCard = (cart) => {

        setCarts(funs(DELETE_CARD, { id: cart.id }))
    }

    const downCardTotal = (cart) => {
        if (cart.total - 1 !== 0) {

            let total = cart.total - 1;

            setCarts(funs(CHANGE_CART_TOTAL, { id: cart.id, total }))

            console.log(carts)
        }
    }

    const upCardTotal = (cart) => {

        let total = cart.total + 1;

        setCarts(funs(CHANGE_CART_TOTAL, { id: cart.id, total }))
        console.log(carts)
    }

    return (
        <div className="cart-route flex-column">
            <NavBar
                amount={amount}
                title="Use Reducer"
            />
            <div className="carts flex-column">
                {
                    carts.map(cart => (
                        <>
                            <Cart
                                removeFun={() => removeCard(cart)}
                                upfun={() => upCardTotal(cart)}
                                downFun={() => downCardTotal(cart)}
                                cart={cart} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}