import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-16 z-10'>
            <header className="section_container !py-0">
                <nav className="flex flex-row-reverse">
                    <div className="p-4">
                        <button className='p-2 border'>
                            Toggle Theme
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar