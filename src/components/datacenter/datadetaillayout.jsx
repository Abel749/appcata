import React from 'react';
import TopContent from '../base/topcontent';
import DetailContent from './detailcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import comp from "../base/comp";

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
