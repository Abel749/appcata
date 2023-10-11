import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import ResearchDetail from "./researchDetail";

const NewsDetailLayout = (props) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="product" propName={props.propName} />
                <ResearchDetail />
                <FootContent />
            </Layout>
        </Space>
    )
};


export default NewsDetailLayout;
