'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const { setTheme, resolvedTheme } = useTheme();

    const activateDarkClick = () => {
        setTheme('dark');
    };

    const activateLightClick = () => {
        setTheme('light');
    };

    return (
        <>
            {mounted && <div className="p-4">
                {resolvedTheme === 'light' && <button
                    className='p-2 border'
                    onClick={() => activateDarkClick()}
                >
                    Dark Theme
                </button>}
                {resolvedTheme === 'dark' && <button
                    className='p-2 border'
                    onClick={() => activateLightClick()}
                >
                    Light Theme
                </button>}
            </div>}
        </>
    )
}

export default ThemeSwitch