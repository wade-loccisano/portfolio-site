import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-16 z-10 section_container'>
            <div className='flex justify-center'>
                <Link
                    className=''
                    href={ }
                    target='_blank'
                    key={ }
                >
                    <button className="p-2 transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                        <Image
                            className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                            src={ }
                            alt="logo"
                            width={45}
                            height={45}
                            priority
                        />
                    </button>
                </Link>
                <button>
                    GMail
                </button>
            </div>
        </div>
    )
}

export default Footer