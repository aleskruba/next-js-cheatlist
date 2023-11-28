"use client"

import {  useThemeContext } from '@/contexts/theme-context'
import { useThemeContext2 } from '@/contexts/theme2-context'
import React from 'react'


function Logo() {
    const {theme,setTheme} = useThemeContext()
    const {theme2,setTheme2} = useThemeContext2()
  return (
    <div className={theme2 ? 'w-full bg-gray-200 text-black' :'w-full bg-gray-800 text-white'}>
        <h1>Logo</h1>
        <div className={theme == 'light' ? 'flex justify-around bg-red-200' : 'flex justify-around bg-yellow-200'}>
            <div>
                <button onClick={()=>setTheme('light')}>Light</button>
            </div>
            <div >
                <button  onClick={()=>setTheme('dark')}>Dark</button>
            </div>
        </div>
    <div className='border-b border-black'>

    </div>
    <div className='max-w-xs'>
                <button className='max-w-xs bg-blue-500' onClick={()=>setTheme2(!theme2)}>
                    {theme2 ? 'Dark' :  'Light'}                    
                    </button>
            </div>
    </div>
  )
}

export default Logo