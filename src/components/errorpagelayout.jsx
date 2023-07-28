import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import ErrorPage from "./errorpage";

const ErrorPageLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <TopContent frompage="product" propName={props.propName}/>
            <ErrorPage />
            <FootContent />
        </Layout>
    </Space>
);


export default ErrorPageLayout;
