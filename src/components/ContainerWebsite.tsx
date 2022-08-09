import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { getAll,filterPro } from "../api/product";

type Props = {
  productCates: any
};

const WebsiteContainer = (props: Props) => {
  const [products, setProducts]: any = useState([]);
  const { id } = useParams();
  if (props.productCates) {
    setProducts(props.productCates.products)
  }
  else {
    useEffect(() => {
      const getProducts = async () => {
        if (id) {
          try {
            const { data } = await filterPro(id)
            console.log(data);
            
            setProducts(data)
          } catch (error) {
            message.error('Có lỗi xảy ra!')
          }
        } else {
          try {
            const { data } = await getAll()
            setProducts(data)
          } catch (error) {
            message.error('Có lỗi xảy ra!')
          }
        }
      }
      getProducts()
    }, [id])
  }
  return (
    <ContainerStyle>
      <Heading3>Điện thoại nổi bật nhất</Heading3>
      <Grid>
        {products.map((item: any) => {
          return (
            <Product key={item.id}>
              <ProductImg src={item.image} alt="" />
              <ProductName className="prd"><Link to={`/${item.id}/detail`}>{item.name}</Link></ProductName>
              <Price>{item.saleOffPrice}đ<OriginalPrice>{item.originalPrice}đ</OriginalPrice></Price>
              <Description>{item.feature}</Description>
            </Product>
          )
        })}
      </Grid>
      <Content>
        <Content1>
          <Heading3>Phụ kiện</Heading3>
          <Content1>
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yX_IlH4mPCrWu3An9m0JRUFQI9JQAct3mQ&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sDJF2_3-Ycz8zYBS-7EDSBE0Vmy7zSrw_g&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDmJNjZZGLuAve0fdFO6-Y-ZviRaPCt6cSg&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLcaoGFtNEnlZ23HI6ATizNYQRB4YmHW-9Q&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZo6dq_vtyC2LkAYZqBso1N0kR31h3HtasPw&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhOKubONnK2mV45p6wy0lkmLSyH55jw_a5A&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HaalYiMioswJ0sdmU_3wNw4Qq8IamDjw6w&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6m6ZFEo2aao8SRZ7TDiGOyY5kKcrkdJHRNw&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYJs2Vz_4E0HwN3njpgHKwrlgclYDIT4_wQ&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMu0_KIaGUZNETmVmHPFds7oIJPSWZDPEpA&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXVbM9xLAXPYN5P_1k7om93ivfB5YozOJrg&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt51Fo-fx1yRLZVDTq9Cu1Mq_31bYPjoeSg&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhapJa3O8O2sRni7-s_ccpj5DlfUxFdCqUA&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbXle3OqaSbQQb92G4qcXNw0pcDbY8BeuTA&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPX3__VerDjfAj7QqAfbECi-PHK5Wmy1UmVw&usqp=CAU" alt="" />
          </Content1>
        </Content1>
        <Content1>
          <br /><br />
          <Heading3>Linh kiện máy tính</Heading3>
          <Content1>
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8fJzPirn3pVajPKN9arAof8fbqHuGVwGFQ&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4VV5rZ5YBt2mmuSeDrCOh6dvbKYeZ-Mjog&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55nrJ6PPO-wurxJXisaG8TSgRGwwTUD-Idw&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOCK_b01YI5fDy1VCHIY5_5PJX-on6Da07g&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NmatQBYtcOhd3W2V_gURv_uz2_KdjItMRw&usqp=CAU" alt="" />
            <ProductImg1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bLkPah6vjohQreeZyqeRABUIsmwHhbXnSQ&usqp=CAU" alt="" />
          </Content1>
        </Content1>
      </Content>
    </ContainerStyle>
  );
};
const Heading3 = styled.h3`
  color: blue;
  font-size: 25px;
  font-weight: bold;
  padding-left:13 0px;
`
const Grid = styled.div`
display : grid ;
grid-template-columns : 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Content = styled.div`
  padding: 0px 200px 80px 200px;
`
const Content1 = styled.div`
margin-left: 0 20px;
`
const ContainerStyle = styled.div`
padding : 0 100px;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
`
const ProductImg = styled.img`
border:1px solid #ccc;
border-radius :3px;
width:150px;
height:150px
`
const ProductImg1 = styled.img`
width : 9%;
height : 10%;
border: 1px solid #ccc;
border-radius: 5px;
margin : 3px;
`
const Price = styled.div`
margin-top : 10px;
color : red;
font-size : 16px;
display: inline-block;
`
const Description = styled.p`
margin-top : 10px;
color : black;
font-size : 16px;
display: inline-block;
`
const OriginalPrice = styled.span`
color : black;
font-size : 13px;
margin-left : 15px;
text-decoration: line-through;
`
const ProductName = styled.span`
display :block;
margin-top : 10px;
font-size : 15px;
font-weight:bold
`
export default WebsiteContainer;
