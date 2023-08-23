import React from 'react';
import TopContent from '../topcontent';
import FootContent from '../footcontent';
import { Layout, Space } from 'antd';
import DataStandBackground from "./datastandbackground";
import DataStandStat from "./datastandstat";
import DataStandCategory from "./datastandcategory";
import DataStandCoverage from "./datastandcoverage";
import DataUpload from "./datastandupload";

const DataStandLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout style={{ backgroundColor: '#ffffff' }}>
            <TopContent frompage="product" propName={props.propName}/>
            <DataStandBackground/>
            <DataStandStat/>
            <DataStandCategory/>
            <DataStandCoverage/>
            <DataUpload/>
            <FootContent />
        </Layout>
    </Space>
  );


export default DataStandLayout;
