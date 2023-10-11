import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import ResearchMain from "./researchmain";
import Researcher from "./researcher";

const researchPageLayout = (props) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="product" propName={props.propName}/>
                <ResearchMain />
                <Researcher />
                <FootContent />
            </Layout>
        </Space>
    )
};


export default researchPageLayout;
