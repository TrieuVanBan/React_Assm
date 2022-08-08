import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { filterPro, read } from '../api/product'
import { ProductType } from '../types/productType'
type Props = {}

const WebsiteDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<any>();
    const [products, setProducts] = useState<any[]>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            const { data: items } = await filterPro(data.category);
            setProducts(items);
            setProduct(data);
        }
        getProduct();
    }, [id])
    if (product) {
        return (
            <Content>
                <Menu>
                    <Menu_li> <Menu_a href="https://www.facebook.com/"><Menu_hover>Trang chủ</Menu_hover></Menu_a></Menu_li>
                    <Menu_li> <Menu_a href="https://www.facebook.com/"><Menu_hover>Giới thiệu</Menu_hover></Menu_a></Menu_li>
                    <Menu_li> <Menu_a href="https://www.facebook.com/"><Menu_hover>Liên hệ</Menu_hover></Menu_a></Menu_li>
                </Menu>
                <hr />
                <Content1>
                    <Content11>
                        <Content1_img>
                            <ProductImg src="https://picsum.photos/id/1005/367/267" alt="" />
                        </Content1_img>
                        <Content1_detail>
                            <Heading3>{product.name}</Heading3>
                            <Heading2>{product.originalPrice} đ</Heading2>
                            <Heading2>{product.saleOffPrice} đ</Heading2>

                            <HeadingP>{product.description}</HeadingP>
                            <Content11>
                                <Button className="btn">Mua ngay</Button>
                                <Button className="btn">Thêm vào giỏ hàng</Button>
                            </Content11>
                        </Content1_detail>
                    </Content11>
                </Content1>
                <Content1>
                    <HeadingP>Sản phẩm cùng loại</HeadingP>
                    <Content2>
                        {products?.map(item => {
                            return (
                                <Product key={item.id}>
                                    <ProductImg1 src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
                                    <ProductName><Link to={`/product-detail/`}>{item.name}</Link></ProductName>
                                    <Price>{item.saleOffPrice}<OriginalPrice>{item.originalPrice}</OriginalPrice></Price>
                                </Product>
                            )

                        })}

                    </Content2>
                </Content1>

            </Content>
        )
    }
}
//Example Main
const Heading3 = styled.h3`
  color: black;
  font-size: 25px;
  font-weight: bold;
`
const Heading2 = styled.h2`
  color: red;
  font-size: 20px;
  font-weight: bold;
`
const HeadingP = styled.p`
  color: black;
  font-size: 18px;
`
const Button = styled.button`
  color: red;
  font-size: 18px;
  border:2px solid #ccc;
  border-radius:5px;
  padding:3px 70px;
  margin:100px 10px
`
const Menu = styled.ul`
    display: flex;
    justify-content:space-between;
    width:20%;
    margin:auto;
    padding:0;
    font-size :20px
`
const Menu_li = styled.li`
    display: flex;
`
const Menu_a = styled.a`
`
const Menu_hover = styled.a`
    color:black;
`
const Content1 = styled.div`
    margin:60px 400px;
`
const Content2 = styled.div`
    display:flex;
    flex:wrap;
`
const Content11 = styled.div`
    display: flex;
`
const Content1_img = styled.div`
    margin-right: 60px;
`
const ProductImg = styled.img`
    width:300px;
    height:300px;
`
const ProductImg1 = styled.img`
    width:150px;
    height:150px;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
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
const Price = styled.div`
margin-top : 10px;
color : red;
font-size : 16px;
display: inline-block;
`
const Content1_detail = styled.div`
`
export default WebsiteDetail