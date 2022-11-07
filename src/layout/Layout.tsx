import React, { FC, FunctionComponent, useState } from 'react'
import style from './Layout.module.scss'
import cn from 'classnames'
import { LayoutProps } from './Layout.props'
import Header from './Header/Header'

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
        <div className={style.wrapper} {...props}>
            <Header theme={theme} setTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
            <main className={cn(style.main, {
              [style.dark]: theme === 'dark'
            })}>
                {children}
            </main>
        </div>
  )
}

export const withLayout =
    <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
    (props: T) =>
      (
                <Layout>
                    <Component {...props} />
                </Layout>
      )
