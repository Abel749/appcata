import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import ResearchContent from "./researchContent";
import comp from "../base/comp";

const ResearchListLayout = (props) => {
    return (
        <comp>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <TopContent frompage="product" propName={props.propName} />
                    <ResearchContent />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default ResearchListLayout;
