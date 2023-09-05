import React from 'react';
import TopContent from '../base/topcontent';
import ExtDataStat from './extdatastat';
import ExtDataCategory from './extdatacategory';
import FootContent from '../base/footcontent';
import ExtDataBackground from './extdatabackground';
import { Layout, Space } from 'antd';
import ExtDataReGinData from "./extdataregiondata";
import ExtDataCoverage from "./extdatacoverage";
import ExtDataRequestMessage from "./extdatarequestmessage";
import ExtDataWhere from "./extdatawhere";

const DataCenterLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout style={{ backgroundColor: '#ffffff' }}>
            <TopContent frompage="product" propName={props.propName}/>
            <ExtDataBackground/>
            <ExtDataStat/>
            <ExtDataCategory/>
            <ExtDataReGinData/>
            <ExtDataCoverage/>
            <ExtDataWhere/>
            <ExtDataRequestMessage/>
            <FootContent />
        </Layout>
    </Space>
  );


export default DataCenterLayout;
