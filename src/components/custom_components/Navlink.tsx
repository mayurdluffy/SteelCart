import Link from 'next/link'
import React from 'react'

interface IPropType {
    value: String,
    url: String,
}

export const Navlink = ({ value, url }: IPropType) => {
    return (
        <Link href={`${url}`}>
            <div className='text-foreground text-xl  mx-4
            font-semibold font-sans hover:text-primary'>
                <p className='flex flex-wrap '>
                    <span>{`${value}`}</span>
                </p>
            </div>
        </Link>
    )
}
