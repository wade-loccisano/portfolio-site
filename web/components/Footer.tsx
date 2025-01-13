'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter();

    return (
        <div className='h-20 z-10 section_container'>
            <div className='flex justify-center'>
                <Link
                    className="p-2"
                    href={`https://github.com/wade-loccisano`}
                    target='_blank'
                    key={1}
                >
                    <button className="transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                        <Image
                            className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                            src={`/github-icon.png`}
                            alt="logo"
                            width={30}
                            height={30}
                            priority
                        />
                    </button>
                </Link>
                <Link
                    className="p-2"
                    href={`mailto:wade.loccisano@gmail.com`}
                    target='_blank'
                    key={2}
                >
                    <button className="transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                        <Image
                            className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                            src={`/gmail-icon.png`}
                            alt="logo"
                            width={30}
                            height={30}
                            priority
                        />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Footer