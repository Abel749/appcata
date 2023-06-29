import React from 'react';
import TopContent from '../components/topcontent';
import ExtDataStat from '../components/extdatastat';
import ExtDataCategory from '../components/extdatacategory';
import DataListShow from '../components/datalistshow';
import FootContent from '../components/footcontent';
import ExtDataBackground from '../components/extdatabackground';
import { Layout, Space } from 'antd';
import ExtDataReginData from "../components/extdataregiondata";
import ExtDataCoverage from "../components/extdatacoverage";
import ExtDataRequestMessage from "../components/extdatarequestmessage";
import ExtDataWhere from "../components/extdatawhere";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 80,
  paddingInline: 50,
  lineHeight: '80px',
  backgroundColor: '#036ED6',
};
const ExtDataBackgroundStyle = {
  height: 600,
  borderTopWidth:'1px',
  borderTopStyle:'solid',
  borderTopColor:'aliceblue',
  backgroundColor: '#036ED6',
};
const ExtDataStatStyle = {
  textAlign: 'center',
  minHeight: 80,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const ExtDataCategoryStyle = {
  textAlign: 'center',
  minHeight: 770,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
  marginTop:'50px',
};

const DataListShowStyle = {
  textAlign: 'center',
  minHeight: 560,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#036ED6',
  marginTop:'30px',
};

const ExtDataReginDataStyle = {
  textAlign: 'center',
  minHeight: 800,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
  marginTop:'50px',
};

const ExtDataCoverageStyle = {
  textAlign: 'center',
  minHeight: 600,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
  marginTop:'50px',
};

const ExtDataWhereStyle = {
  textAlign: 'center',
  minHeight: 400,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const ExtDataRequestMessageStyle = {
  textAlign: 'center',
  minHeight: 650,
  lineHeight: '20px',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#555555',
};

const DataCenterLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <Header style={headerStyle}><TopContent frompage="home" /></Header>
      <div style={ExtDataBackgroundStyle}><ExtDataBackground /></div>
      <Header style={ExtDataStatStyle}><ExtDataStat /></Header>
	  <Header style={ExtDataCategoryStyle}><ExtDataCategory /></Header>
      <Header style={ExtDataReginDataStyle}><ExtDataReginData/></Header>
      <Header style={ExtDataCoverageStyle}><ExtDataCoverage/></Header>
      <Header style={ExtDataWhereStyle}><ExtDataWhere/></Header>
      <Header style={ExtDataRequestMessageStyle}><ExtDataRequestMessage/></Header>
	  <div style={footerStyle}><FootContent /></div>
    </Layout>
  </Space>
  );


export default DataCenterLayout;
