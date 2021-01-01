import React from 'react';

// BottomPill is the bottom half of the pill card.
function BottomPill(props) {
    return (
        <div className={`${!props.toggled ? "bg-blue-200" : "bg-gray-900"} transition ease-in-out duration-500 rounded-xl rounded-t-none px-4 py-8 w-full shadow-lg text-center`}>
            {props.children}
        </div>
    )
}

export default BottomPill;