import React, { createContext, PropsWithChildren, useState } from 'react'

export interface IAppContext {
  theme: 'light' | 'dark'
  setTheme?: (theme: 'light' | 'dark') => void
}

export const AppContext = createContext<IAppContext>({
  theme: 'light',
  setTheme: () => {
  }
})

export const AppContextProvider = ({ theme, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [newTheme, setNewTheme] = useState<'light' | 'dark'>(theme)
  const setTheme = (newTheme: 'light' | 'dark'): void => {
    setNewTheme(newTheme)
  }

  return (
        <AppContext.Provider value={{ theme: newTheme, setTheme }}>
            {children}
        </AppContext.Provider>
  )
}
