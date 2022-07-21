import { Layout } from 'antd';
import React from 'react'
import { Outlet } from 'react-router-dom';
import FooterWebsite from '../components/FooterWebsite';
import HeaderWebsite from '../components/HeaderWebsite';

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <Layout>
                <HeaderWebsite/>
                <Outlet/>
                <FooterWebsite/>
            </Layout>
        </div>
    )
}

export default WebsiteLayout