import React from 'react'
import FooterLink from './FooterLink'

const links = [
    {
        "href": `https://github.com/wade-loccisano`,
        "imgSrc": `/github-icon.png`,
    },
    {
        "href": `mailto:wade.loccisano@gmail.com`,
        "imgSrc": `/gmail-icon.png`,
    },
]

const Footer = () => {
    return (
        <div className='h-20 z-10 section_container'>
            <div className='flex justify-center'>
                {links.map((link) => {
                    return (
                        <FooterLink
                            linkHref={link.href}
                            linkIconSrc={link.imgSrc}
                        ></FooterLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer