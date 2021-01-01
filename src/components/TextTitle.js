import React from 'react';

// TextTitle formats the text to adhere to specific sizes.
function TextTitle(props) {
    var size = ""
    switch (props.size) {
        case "title":
            size = "font-black text-3xl"
            break
        case "subtitle":
            size = "font-bold text-2xl"
            break
        case "caption":
            size = "font-light text-xs"
            break
        case "signature":
            size = "font-light text-xs italic"
            break
        default:
            break
    }
    return (
        <p className={`${size} ${!props.toggled ? "text-gray-900" : "text-gray-50"}`}>{props.children}</p>
    )
}

export default TextTitle;