import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import NewsDetail from "./NewsDetail";

const NewsDetailLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <TopContent frompage="newsDetail" propName={props.propName} />
            <NewsDetail />
            <FootContent />
        </Layout>
    </Space>
);


export default NewsDetailLayout;
