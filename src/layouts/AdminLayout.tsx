import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import AdminSider from '../components/AdminSider'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <Layout>
      <AdminHeader />
      <AdminSider/>
      {/* <Outlet /> */}
    </Layout>
  )
}

export default AdminLayout
