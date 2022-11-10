import React, { ChangeEvent, FC, memo, useCallback, useContext, useEffect, useState } from 'react'
import style from './Header.module.scss'
import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg'
import { ReactComponent as ArrowIcon } from '../../assets/svg/back-arrow.svg'
import { HeaderProps } from './Header.props'
import { Button, Input, Menu, Switch, NavBar, Select } from '../../components'
import { useDebounce } from '../../hooks/fakestore.hooks'
import { useGetCategoriesQuery } from '../../redux/apiSlice'
import { AppContext } from '../../context/app.context'

const Header: FC<HeaderProps> = memo<HeaderProps>(({ theme, setTheme, ...props }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { searchParams, setSearchParams } = useContext(AppContext)

  const { data: categories = [] } = useGetCategoriesQuery()

  const [isOpen, setOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>(searchParams?.get('search') ?? '')
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const category = pathname === '/' ? 'all' : pathname.replace(/[%/0-9]/gi, ' ')
  const isProductPage = pathname.replace(/[%/0-9]/gi, '') === 'product'
  const handleSetSearchValue = (e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)
  const handleSetOpen = useCallback((): void => setOpen(prev => !prev), [])
  const handleSetShowFilters = useCallback((): void => setShowFilters(prev => !prev), [])

  const debouncedSearchTerm = useDebounce(searchValue, 500)

  useEffect(() => {
    setSearchParams({ search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

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
                    {isProductPage
                      ? <Button onClick={() => navigate('/')} icon={<ArrowIcon width={28}/>}>Назад</Button>
                      : category.toUpperCase()
                    }
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
