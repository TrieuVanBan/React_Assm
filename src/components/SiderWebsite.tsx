import { Menu, MenuProps, message } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { useEffect, useState } from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { CategoryType } from '../types/categoryType';
import { getAll, getProductByCate } from '../api/category';
type Props = {
  onSendCates: (data: any) => void
}
const SiderStyle: React.CSSProperties = {
  height: '380px'
}
const SiderWebsite = (props: Props) => {
  const navLink: React.CSSProperties = {
    textAlign: 'center',
    borderBottom: '2px solid black'
  }
  const { id } = useParams()
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Sider className="site-layout-background" width={220}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}>
          <Link style={navLink} to={`/`} ><Menu.Item >All</Menu.Item></Link>
        {categories && categories.map((item: any) => {
          return (
            <Link style={navLink} key={item.id} to={`/category/${item.id}`} ><Menu.Item key={item.id}>{item.name}</Menu.Item></Link>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default SiderWebsite