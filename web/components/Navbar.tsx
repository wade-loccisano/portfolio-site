import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-16 z-10'>
            <header className="section_container !py-0">
                <nav className="flex flex-row-reverse">
                    <ThemeSwitch></ThemeSwitch>
                </nav>
            </header>
        </div>
    )
}

export default Navbar