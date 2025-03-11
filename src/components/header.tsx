"use client"

import React from 'react'
import { DarkModeButton } from './custom_components/DarkModeButton'
import Link from 'next/link'
import NavMenu from './custom_components/NavMenu'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SignInDialogueBox from './custom_components/SignInDialogueBox'

export const Header = () => {
  return (
    <div>
      <div className='px-3 py-2 flex justify-between border-b-[0.5px] border-gray-300 shadow-b-2xl w-full fixed top-0'>
        <div className='flex gap-2'>
          {/* -------------------- logo ----------------------------- */}
          <Link href={`/`}>
            <div className='text-foreground text-2xl 
            font-semibold font-sans hover:text-primary'>
              <p className='flex flex-wrap '>
                <span>SteelCart</span>
              </p>
            </div>
          </Link>

          {/* ----------------------nav links------------------------------- */}

          {/* <Navlink value={'Products'} url={'/products'}></Navlink> */}
          <NavMenu />

          {/* ---------------------------------------------------------------- */}
        </div>
        <div className='flex gap-1'>
          <Input type="email" placeholder="Search..."
            className='rounded-2xl mx-2 h-[30px] my-1 border-2'
          />
          {/* <Button variant="outline" className='rounded-2xl border-2 h-[30px] my-1 mr-2'>Sign Up</Button> */}
          <SignInDialogueBox/>
          <DarkModeButton />
        </div>
      </div>
    </div>
  )
}
