import React from 'react';

// Toggle is the button which changes the toggled state.
function Toggle(props) {
    return (
        <button type="button" aria-pressed="false" onClick={() => props.setToggled(!props.toggled)} className={`${!props.toggled ? "bg-blue-sky" : "bg-gray-deep"} relative inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent rounded-full shadow-lg cursor-pointer transition-colors ease-in-out duration-500`}>
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" className={`${!props.toggled ? "translate-x-0 bg-forest-biome" : "translate-x-8 bg-pink-a-boo"} inline-block h-7 w-7 rounded-full shadow transform ring-0 transition ease-in-out duration-500`}></span>
        </button>
    )
}

export default Toggle;
