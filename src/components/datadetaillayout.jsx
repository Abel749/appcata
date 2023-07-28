import React from 'react';
import TopContent from '../components/topcontent';
import DetailContent from '../components/detailcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import comp from "./comp";

const DataDetailLayout = (props) => (
    <comp>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <TopContent frompage="datacenter" propName={props.propName}/>
                <DetailContent />
                <FootContent />
            </Layout>
        </Space>
    </comp>
);


export default DataDetailLayout;
