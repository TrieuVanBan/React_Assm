import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import SiderWebsite from './SiderWebsite'
import BannerImg from '../assets/banner.png'
import ContainerWebsite from './ContainerWebsite'
type Props = {}

const MainWebsite = (props: Props) => {
  return (
    <Content>
     <Section>
      <SiderWebsite/>
      <Banner src={BannerImg}/>
     </Section>
     <ContainerWebsite/>
    </Content>
  )
}
//Example Main
const Banner = styled.img`
max-width: 1000px;
height : 382px;
margin-left: 40px;
`
const Section = styled.div`
display : flex;
padding : 10px 20px 0 200px;
margin-bottom : 52px;
`

export default MainWebsite