import React, { FC, FunctionComponent, useCallback, useContext } from 'react'
import style from './Layout.module.scss'
import cn from 'classnames'
import { LayoutProps } from './Layout.props'
import Header from './Header/Header'
import { AppContext, AppContextProvider, IAppContext } from '../context/app.context'

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const { theme, setTheme } = useContext(AppContext)

  const handleSetTheme = useCallback((): void => {
    if (setTheme) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }, [theme, setTheme])

  return (
        <div className={style.wrapper} {...props}>
            <Header theme={theme} setTheme={handleSetTheme}/>
            <main className={cn(style.main, {
              [style.dark]: theme === 'dark'
            })}>
                {children}
            </main>
        </div>
  )
}

export const withLayout =
    <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) =>
    (props: T) =>
      (
          <AppContextProvider theme={props.theme} setTheme={props.setTheme}>
                <Layout>
                        <Component {...props} />
                </Layout>
          </AppContextProvider>
      )
