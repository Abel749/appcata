import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import ResearchDetail from "./ResearchDetail";

const NewsDetailLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <TopContent frompage="product" propName={props.propName} />
            <ResearchDetail />
            <FootContent />
        </Layout>
    </Space>
);


export default NewsDetailLayout;
