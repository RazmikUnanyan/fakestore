import React, { FC } from 'react'
import { withLayout } from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Product from './pages/Product/Product'

const App: FC = () => {
  return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:category" element={<Main/>}/>
            <Route path="/product/:idProduct" element={<Product/>}/>
        </Routes>
  )
}

export default withLayout(App)
