import { Routes, Route } from 'react-router-dom'

import {Header} from './components/header'
import {Footer} from './components/footer'
import {Products} from './components/products'
import {Product} from './components/product'
import {Categories} from './components/categories'
import {Category} from './components/category'
import {Cart} from './components/cart'
import {Main} from './components/main'

function App() {
  const endpoint = 'http://localhost:3333';
  const target_products_all = '/products/all';
  const target_categories_all = '/categories/all';
  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products endpoint={endpoint} target={target_products_all}/>} />
        <Route path="/products/:id" element={<Product endpoint={endpoint}/>} />
        <Route path="/categories" element={<Categories endpoint={endpoint} target={target_categories_all}/>} />
        <Route path="categories/:id" element={<Category endpoint={endpoint}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
