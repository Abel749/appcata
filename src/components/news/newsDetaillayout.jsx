import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import NewsDetail from "./newsdetail";
import comp from "../base/comp";

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
