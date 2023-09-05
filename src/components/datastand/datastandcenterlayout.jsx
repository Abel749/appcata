import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import Content3 from "./content3";
import { Layout, Space } from 'antd';
import comp from "../base/comp";



const DataStandCenterLayout = (props) => (
    <comp>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="product" propName={props.propName} />
                <Content3 />
                <FootContent />
            </Layout>
        </Space>
    </comp>
  );


export default DataStandCenterLayout;
