import React from 'react'

const Button = ({ name, startIcon = null, endIcon = null, onClick = () => { }, link = null, className, variant = 'filled' }) => {

    const borderType = () => {
        switch (variant) {
            case 'filled':
                return ' bg-maroon border border-transparent text-white '
            case 'border':
                return ' bg-transparent border border-maroon text-maroon hover:bg-maroon hover:text-white duration-300 transition-all ease-in-out '

            default:
                return ' bg-maroon border border-transparent text-white '
        }
    }

    return link ? (
        <a href={link} target="" rel="" className="block">
            <div className={"relative inline-display no-overflow animated-link after:bg-white rounded-md shadow-sm cursor-pointer " + borderType() + className}>
                <div className="bg-maroon text-white text-center tracking-wide text-sm lg:text-base py-3 px-4 uppercase">
                    {name}
                </div>
            </div>
        </a>
    ) : (
        <button
            type="button"
            className={"flex items-center justify-center px-4 py-2 md:py-3 rounded-md shadow-sm sm:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-maroon " + borderType() + className}
            onClick={onClick}
        >
            {startIcon}
            <span className="text-sm md:text-base">
                {name}
            </span>
            {endIcon}
        </button>
    )
}

export default Button;