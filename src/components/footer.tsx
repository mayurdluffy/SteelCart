import React from 'react'

export const Footer = () => {
  return (
    <div className='h-[40vh] flex flex-col border-t-2 border-gray-300 justify-center items-center'>
      <p className='text-foreground text-xl  text-semibold text-center'>footer</p>
      <div className='flex gap-1 text-sm text-foreground py-1 px-4 justify-end w-full opacity-25 fixed bottom-1'>
        <p>Made by <span className='font-semibold'>mayurdluffy</span>&nbsp;|</p>
        <p>Powered by <span className='font-semibold'>Next.js</span></p>
      </div>
    </div>
  )
}
