"use client"

import * as React from "react"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function DarkModeButton() {
  
  const { setTheme } = useTheme();
  const [mode, setMode] = React.useState('light');

  const toggleTheme = () =>{
    if(mode === 'light'){
      setTheme('dark')
      setMode('dark');
    }
    else{
      setTheme('light')
      setMode('light');
    }
  }

  return (
    <div className="text-foreground hover:text-primary mt-2 sm:mt-1">
        <button onClick={() =>toggleTheme()}>
          {mode === 'light'? <MoonStar/>: <Sun/>}
        </button>
    </div>
  )
}