import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import {Layout, Space} from 'antd';
import ActiveContent from "./activeContent";
const ActiveListLayout = (props) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="product" propName={props.propName} />
                <ActiveContent />
                <FootContent />
            </Layout>
        </Space>
    )
};


export default ActiveListLayout;
