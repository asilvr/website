import React from 'react';
import primary from '../assets/avatar_primary.jpg';
import secondary from '../assets/avatar_secondary.jpg';

// Avatar shows a photo of me depending on the toggled state.
function Avatar(props) {
    return (
        <img class="center h-auto w-auto max-h-52 sm:max-h-full rounded-full shadow-2xl" src={!props.toggled ? primary : secondary}></img>
    )
}

export default Avatar;