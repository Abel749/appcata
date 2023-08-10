import React from 'react';
import TopContent from '../components/topcontent';
import ExtDataStat from '../components/extdatastat';
import ExtDataCategory from '../components/extdatacategory';
import FootContent from '../components/footcontent';
import ExtDataBackground from '../components/extdatabackground';
import { Layout, Space } from 'antd';
import ExtDataReGinData from "../components/extdataregiondata";
import ExtDataCoverage from "../components/extdatacoverage";
import ExtDataRequestMessage from "../components/extdatarequestmessage";
import ExtDataWhere from "../components/extdatawhere";

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
