import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import NewsDetail from "./NewsDetail";
import comp from "./comp";

const NewsDetailLayout = (props) => {
    return (
        <comp>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <TopContent frompage="newsList" propName={props.propName} />
                    <NewsDetail />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default NewsDetailLayout;
