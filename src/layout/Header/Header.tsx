import React, { FC, useEffect, useState } from 'react'
import style from './Header.module.scss'
import cn from 'classnames'
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg'
import { HeaderProps } from './Header.props'
import { Button, Input, Menu, Switch, NavBar, Select } from '../../components'
import { useDebounce } from '../../hooks/fakestore.hooks'
import { useGetCategoriesQuery } from '../../redux/apiSlice'

const Header: FC<HeaderProps> = ({ theme, setTheme, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const debouncedSearchTerm = useDebounce(searchValue, 500)
  const { data: categories = [] } = useGetCategoriesQuery()

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      console.log(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
        <header className={cn(style.header, {
          [style.dark]: theme === 'dark'
        })}
                {...props}
        >
            <div className={style.search}>
                <Input placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                <Menu isOpen={isOpen} onClick={() => setOpen(prev => !prev)}/>
            </div>
            {isOpen && (
                <NavBar categories={categories}/>
            )}
            <div className={style.headerBottom}>
                <div className={style.categories}>
                    Computer & Office
                </div>
                <div className={style.buttons}>
                    <Switch onClick={setTheme} theme={theme}/>
                    <Button
                        onClick={() => setShowFilters(prev => !prev)}
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
}

export default Header
