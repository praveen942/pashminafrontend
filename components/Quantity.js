import { BiMinus, BiPlus } from 'react-icons/bi'

import React from 'react'

const Quantity = ({ quantity, decrement, increment }) => {

    function handleMinus() {
        decrement()
    }

    function handlePlus() {
        increment()
    }

    return (
        <div
            className="flex items-center bg-maroon p-1 text-white rounded-md gap-x-2">
            <BiMinus
                onClick={() => handleMinus()}
                className="cursor-pointer"
            />
            <div>{quantity}</div>
            <BiPlus
                onClick={() => handlePlus()}
                className="cursor-pointer"
            />
        </div>
    )
}

export default Quantity;