import React from 'react';
import TextTitle from './TextTitle';

// IconButton is a button with an icon and a caption.
function IconButton(props) {
    var href = ""
    var svg = ""
    var caption = ""

    // Icons here are courtesy of HeroIcons (https://heroicons.com/)
    switch (props.icon) {
        case "resume":
            href = "https://s3-us-west-2.amazonaws.com/static.asilvr.com/resume.pdf"
            svg = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            caption = "Resume"
            break
        case "linkedin":
            href = "https://linkedin.com/in/alexaaronsilver"
            svg = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            caption = "LinkedIn"
            break
        case "github":
            href = "https://github.com/asilvr"
            svg = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            caption = "GitHub"
            break
        case "twitter":
            href = "https://twitter.com/silvr"
            svg = <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            caption = "Twitter"
            break
        case "medium":
            href = "https://asilvr.medium.com"
            svg = <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            caption = "Medium"
            break
        default:
            break
    }
    return (
        <a href={href} target="_blank">
            <div class="inline-grid hover:opacity-80">
                <div className={`font-light text-md ${!props.toggled ? "bg-forest-biome text-gray-100" : "bg-pink-a-boo text-gray-900"} rounded-full w-12 h-12 p-3 shadow-md inline-grid`}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {svg}
                    </svg>
                </div>
                <div class="pt-1 text-center">
                    <TextTitle toggled={props.toggled} size="caption">
                        {caption}
                    </TextTitle>
                </div>
            </div>
        </a>
    )
}

export default IconButton;