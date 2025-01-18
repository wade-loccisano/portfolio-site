import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterLink = ({
  linkHref,
  linkIconSrc
}: {
  linkHref: string,
  linkIconSrc: string,
}) => {
  return (
    <>
      <Link
        className="p-2"
        href={linkHref}
        target='_blank'
        key={1}
      >
        <button className="transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
          <Image
            className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] dark:invert"
            src={linkIconSrc}
            alt="logo"
            width={30}
            height={30}
            priority
          />
        </button>
      </Link>
    </>
  )
}

export default FooterLink