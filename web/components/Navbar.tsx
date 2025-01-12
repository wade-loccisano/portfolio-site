import React from 'react'

const Navbar = () => {
    return (
        <header className="section_container !py-0">
            <nav className="flex flex-row-reverse">
                <div className="p-4">
                    <button className='p-2 border'>
                        Toggle Theme
                    </button>
                </div>
            </nav>
        </header >
    )
}

export default Navbar