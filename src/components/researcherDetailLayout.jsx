import React from 'react';
import TopContent from '../components/topcontent';
import ResearcherInfo from "./researcherInfo";
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import comp from "./comp";

const ResearcherDetailLayout = (props) => (
    <comp>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <TopContent frompage="product" propName={props.propName}/>
                <ResearcherInfo />
                <FootContent />
            </Layout>
        </Space>
    </comp>
);


export default ResearcherDetailLayout;
