import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll, remove } from "../api/product";
import confirm from "antd/lib/modal/confirm";
const { Paragraph } = Typography

interface DataType {
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
}


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

  const DeleteProduct = async(id:any) => {
    if(window.confirm("Bạn có chắc chắn xóa không?")){
      await remove(id)
      const data = await getAll()
      setDataTable(data.data)
    }
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'name',
      render: text => <p>{text}</p>,
    },
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
      render: text => <p>{text}</p>,
    },
    {
      title: 'Giá khuyến mãi',
      dataIndex: 'saleOffPrice',
      key: 'saleOffPrice',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: image => <img src= {image}  alt="" /> 
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
      render: id => <Space>
        <Button  type="primary"><Link to={`product/edit/${id}`}>Edit</Link></Button>
        <Button  type="primary" onClick={() => DeleteProduct(id)} >Delete</Button>
      </Space>
    },
  ];

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Sản Phẩm
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