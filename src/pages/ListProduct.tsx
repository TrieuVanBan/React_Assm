import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll } from "../api/product";
const { Paragraph } = Typography

interface DataType {
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Đặc điểm',
    dataIndex: 'feature',
    key: 'feature',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Giá khuyến mãi',
    dataIndex: 'saleOffPrice',
    key: 'saleOffPrice',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Chức năng',
    dataIndex: 'id',
    key : 'id',
    render: id => <Button type="primary"><Link to={`product/edit/${id}`}>Edit</Link></Button>
  },
];



const ListProduct = () => {
  const [dataTable, setDataTable] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAll()
        // console.log(data)
        setDataTable(data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
        <Link to="/admin/product/create">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ListProduct