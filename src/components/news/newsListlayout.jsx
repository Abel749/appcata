import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import NewsContent from "./newsContent";

const NewsListLayout = (props) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="newsList" propName={props.propName} />
                <NewsContent />
                <FootContent />
            </Layout>
        </Space>
    )
};


export default NewsListLayout;
