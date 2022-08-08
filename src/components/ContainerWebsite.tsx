import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getAll } from "../api/product";

type Props = {
  productCates: any
};
const WebsiteContainer = (props: Props) => {

  return (
    <ContainerStyle>
      <Heading3>Điện thoại nổi bật nhất</Heading3>
      <Grid>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
        <Product>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link to={`/product-detail/`}>Iphone 13</Link></ProductName>
          <Price>1000<OriginalPrice>2000</OriginalPrice></Price>
          <Description>Điện thoại ip 13 chính hãng, được sản xuất từ nhật bản</Description>
        </Product>
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
          <br/><br/>
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
display: inline-block
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
