"use client"

import React,{createContext,useState,useContext} from 'react'


type ThemeContext2ProviderProps = {
    children: React.ReactNode;
}

type Theme2 = boolean ;

type ThemeContext2 = {
    theme2: Theme2 ;
    setTheme2: React.Dispatch<React.SetStateAction<Theme2>>;
}

export const ThemeContext2 = createContext<ThemeContext2 | null>(null)

export default function ThemeContext2Provider({children}:ThemeContext2ProviderProps) {
    const [theme2,setTheme2] = useState<Theme2>(false)

  return (
        <ThemeContext2.Provider 
            value={{theme2,setTheme2}}>
                
                {children}

        </ThemeContext2.Provider>
  )
}


export function useThemeContext2() {
    const context = useContext(ThemeContext2);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}