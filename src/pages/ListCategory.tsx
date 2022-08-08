import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll, remove } from "../api/category";
import confirm from "antd/lib/modal/confirm";
const { Paragraph } = Typography

interface DataType {
  name: string;
}


const ListCategory = () => {
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

  const DeleteCategory = async(id:any) => {
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
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Chức năng',
      dataIndex: 'id',
      key : 'id',
      render: id => <Space>
        <Button type="primary"><Link to={`edit/${id}`}>Edit</Link></Button>
        <Button type="primary" onClick={() => DeleteCategory(id)} >Delete</Button>
      </Space>
    },
  ];

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Danh Mục
        </Typography.Title>
        <Link to="/admin/category/create">
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

export default ListCategory