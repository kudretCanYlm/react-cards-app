import React from "react";
import PropTypes from "prop-types"
import AmountIcon from "../common/icons/AmountIcon";

export default function NavBar({ title, amount }) {

    return (
        <div className="nav-bar flex-row">
            <h1>
                {
                    title
                }
            </h1>
            <AmountIcon amount={amount} />
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}