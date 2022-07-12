import React from 'react'
const Discount = () => {
  return (
    <div>
      <div className="flex  w-full justify-center mb-10 mt-4 mx-auto ">
        <input
          placeholder="Enter Coupon Code"
          type="text"
          className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          className="bg-maroon ml-2 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
         Apply
        </button>
      </div>
    </div>
  )
}

export default Discount
