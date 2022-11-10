import React, { createContext, PropsWithChildren, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export type ITheme = 'light' | 'dark'
export interface IAppContext {
  theme: ITheme
  setTheme?: (theme: ITheme) => void
  searchParams?: URLSearchParams
  setSearchParams?: any
}

export const AppContext = createContext<IAppContext>({
  theme: 'light',
  setTheme: () => {
  }
})

export const AppContextProvider = ({ theme, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [newTheme, setNewTheme] = useState<ITheme>(theme)
  const [searchParams, setSearchParams] = useSearchParams({})
  const setTheme = (newTheme: ITheme): void => {
    setNewTheme(newTheme)
  }

  return (
        <AppContext.Provider value={{ theme: newTheme, setTheme, setSearchParams, searchParams }}>
            {children}
        </AppContext.Provider>
  )
}
