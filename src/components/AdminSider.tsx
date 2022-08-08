import { Menu } from 'antd'
import '../css/app.css';
import Layout, { Content, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import {
  CustomerServiceOutlined,
  LaptopOutlined,
  MobileOutlined,
  TabletOutlined,
} from '@ant-design/icons';

type Props = {}
const sider : React.CSSProperties = {
  backgroundColor: 'white'
}

const AdminSider = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="sider">
      <Layout>
        <Sider style={sider} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <MobileOutlined />,
                label: <Link to="/admin">Sản Phẩm</Link>,
              },
              {
                key: '2',
                icon: <LaptopOutlined />,
                label: <Link to="/admin/category">Danh mục</Link>,
              },
              {
                key: '3', 
                icon: <TabletOutlined />,
                label: <Link to="/admin/users">Tài khoản</Link>,
              },
              {
                key: '4',
                icon: <CustomerServiceOutlined />,
                label: 'Giỏ hàng',
              },
            ]}
          />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  )
}

export default AdminSider;

