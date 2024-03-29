import React from 'react';
import TopContent from '../base/topcontent';
import ResearcherInfo from "./researcherInfo";
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import comp from "../base/comp";

const ResearcherDetailLayout = (props) => {
    return (
        <comp>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <TopContent frompage="product" propName={props.propName}/>
                    <ResearcherInfo />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default ResearcherDetailLayout;
