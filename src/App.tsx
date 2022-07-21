import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import ListProduct from './pages/ListProduct'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ListProduct />} />
          <Route path="product/create" element={<AddProduct />} />
          <Route path="product/edit/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width:1777px;
  margin: 0 auto;
  background-color:#E5E5E5;;
  font-family: 'Roboto';
`

export default App
