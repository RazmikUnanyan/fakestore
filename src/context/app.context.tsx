import React, { createContext, PropsWithChildren, useState } from 'react'

export type ITheme = 'light' | 'dark'
export interface IAppContext {
  theme: ITheme
  setTheme?: (theme: ITheme) => void
}

export const AppContext = createContext<IAppContext>({
  theme: 'light',
  setTheme: () => {
  }
})

export const AppContextProvider = ({ theme, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [newTheme, setNewTheme] = useState<ITheme>(theme)
  const setTheme = (newTheme: ITheme): void => {
    setNewTheme(newTheme)
  }

  return (
        <AppContext.Provider value={{ theme: newTheme, setTheme }}>
            {children}
        </AppContext.Provider>
  )
}
