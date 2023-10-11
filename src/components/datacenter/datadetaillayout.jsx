import React from 'react';
import TopContent from '../base/topcontent';
import DetailContent from './detailcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';

const DataDetailLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <TopContent frompage="datacenter" propName={props.propName}/>
            <DetailContent />
            <FootContent />
        </Layout>
    </Space>
);


export default DataDetailLayout;
