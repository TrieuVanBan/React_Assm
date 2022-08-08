import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { getAll,filterPro } from "../api/product";

type Props = {
  productCates: any
};

const WebsiteContainer = (props: Props) => {
  ;
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
              <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
              <ProductName><Link to={`/${item.id}/detail`}>{item.name}</Link></ProductName>
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
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
          </Content1>
        </Content1>
        <Content1>
          <br /><br />
          <Heading3>Linh kiện máy tính</Heading3>
          <Content1>
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
            <ProductImg1 src="https://picsum.photos/id/1005/367/267" alt="" />
          </Content1>
        </Content1>
      </Content>
    </ContainerStyle>
  );
};
const Heading3 = styled.h3`
  color: black;
  font-size: 18px;
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
`
export default WebsiteContainer;
