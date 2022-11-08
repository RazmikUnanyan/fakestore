import React, { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react'
import style from './Header.module.scss'
import cn from 'classnames'
import { useLocation } from 'react-router-dom'
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg'
import { HeaderProps } from './Header.props'
import { Button, Input, Menu, Switch, NavBar, Select } from '../../components'
import { useDebounce } from '../../hooks/fakestore.hooks'
import { useGetCategoriesQuery } from '../../redux/apiSlice'

const Header: FC<HeaderProps> = memo<HeaderProps>(({ theme, setTheme, ...props }) => {
  const { pathname } = useLocation()

  const { data: categories = [] } = useGetCategoriesQuery()

  const [isOpen, setOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const debouncedSearchTerm = useDebounce(searchValue, 500)

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      console.log(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const category = pathname === '/' ? 'all' : pathname.replace(/[%/0-9]/gi, ' ')

  const handleSetSearchValue = (e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)
  const handleSetOpen = useCallback((): void => setOpen(prev => !prev), [])
  const handleSetShowFilters = useCallback((): void => setShowFilters(prev => !prev), [])

  return (
        <header className={cn(style.header, {
          [style.dark]: theme === 'dark'
        })}
                {...props}
        >
            <div className={style.search}>
                <Input placeholder="Search" value={searchValue} onChange={handleSetSearchValue}/>
                <Menu isOpen={isOpen} onClick={handleSetOpen}/>
            </div>
            {isOpen && (
                <NavBar categories={categories} onClick={handleSetOpen}/>
            )}
            <div className={style.headerBottom}>
                <div className={style.categories}>
                    {category.toUpperCase()}
                </div>
                <div className={style.buttons}>
                    <Switch onClick={setTheme} theme={theme}/>
                    <Button
                        onClick={handleSetShowFilters}
                        icon={<FilterIcon width={30}/>}
                    >
                        filter
                    </Button>
                </div>
            </div>
            {showFilters && (
                <div className={style.filters}>
                    {[...new Array(4)].map((f, index) => (
                        <Select key={index}>
                            <option value="0">filters:</option>
                            <option value="1">filter 1</option>
                            <option value="2">filter 2</option>
                            <option value="3">filter 3</option>
                            <option value="4">filter 4</option>
                        </Select>
                    ))}
                </div>
            )}
        </header>
  )
})

export default Header
