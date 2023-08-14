import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import ResearchContent from "./researchContent";
import comp from "./comp";

const ResearchListLayout = (props) => {
    return (
        <comp>
            <Space>
                <Layout>
                    <TopContent frompage="product" propName={props.propName} />
                    <ResearchContent />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default ResearchListLayout;
