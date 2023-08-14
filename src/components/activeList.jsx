import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import ActiveContent from "./activeContent";
import comp from "./comp";

const ActiveListLayout = (props) => {
    return (
        <comp>
            <Space>
                <Layout>
                    <TopContent frompage="product" propName={props.propName} />
                    <ActiveContent />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default ActiveListLayout;
