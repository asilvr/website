import React from 'react';

// TopPill is the top half of the pill card.
function TopPill(props) {
    return (
        <div className={`${!props.toggled ? "bg-primary-fg" : "bg-secondary-fg"} transition ease-in-out duration-500 rounded-xl rounded-b-none p-10 w-full shadow-lg text-center`}>
            {props.children}
        </div>
    )
}

export default TopPill;
