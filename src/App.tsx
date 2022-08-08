import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import ListProduct from './pages/ListProduct'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import ListCategory from './pages/ListCategory'
import AddCategory from './pages/AddCategory'
import UpdateCategory from './pages/UpdateCategory'
import ListUser from './pages/ListUser'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/AddUser'
import MainWebsite from './components/MainWebsite'
import WebsiteDetail from './components/WebsiteDetail'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Routes>
        {/* Client */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<MainWebsite />} />
          <Route path="category/:id" element={< MainWebsite/>} />
          <Route path=":id/detail" element={< WebsiteDetail/>} />
        </Route>
        
        <Route path="/login" element={< Login/>} />
        <Route path="/register" element={< RegisterPage/>} />
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ListProduct />} />
      
          <Route path="product">
            <Route path="create" element={<AddProduct />} />
            <Route path="edit/:id" element={<UpdateProduct />} />
          </Route>
          <Route path="category">
            <Route index element={<ListCategory />} />
            <Route path="create" element={<AddCategory />} />
            <Route path="edit/:id" element={<UpdateCategory />} />
          </Route>
          <Route path="users">
            <Route index element={<ListUser />} />
            <Route path="create" element={<AddUser />} />
            <Route path="edit/:id" element={<UpdateUser />} />
          </Route>
        </Route>
      </Routes>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width:1777px;
  margin: 0 auto;
  font-family: 'Arial, Helvetica, sans-serif';
`

export default App
