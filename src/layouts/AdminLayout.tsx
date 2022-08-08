import { Layout } from 'antd'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import AdminSider from '../components/AdminSider'

type Props = {}

const AdminLayout = () => {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      return (
        <Layout>
          <AdminHeader />
          <AdminSider />
          {/* <Outlet /> */}
        </Layout>
      )
    }
  } else {
    return <Navigate to="/login" />
  }
}

export default AdminLayout
