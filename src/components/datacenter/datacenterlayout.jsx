import React from 'react';
import TopContent from '../base/topcontent';
import Content1 from './content1';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';

const DataCenterLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout style={{ backgroundColor: '#ffffff' }}>
            <TopContent frompage="datacenter" propName={props.propName} />
            <Content1 />
            <FootContent />
        </Layout>
    </Space>
  );


export default DataCenterLayout;
