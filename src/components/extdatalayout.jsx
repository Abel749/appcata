import React from 'react';
import TopContent from '../components/topcontent';
import ExtDataStat from '../components/extdatastat';
import ExtDataCategory from '../components/extdatacategory';
import DataListShow from '../components/datalistshow';
import FootContent from '../components/footcontent';
import ExtDataBackground from '../components/extdatabackground';
import { Layout, Space } from 'antd';
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
  minHeight: 510,
  lineHeight: '20px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const DataListShowStyle = {
  textAlign: 'center',
  minHeight: 520,
  lineHeight: '20px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#555555',
};

const DataCenterLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}><TopContent frompage="home" /></Header>
      <div style={ExtDataBackgroundStyle}><ExtDataBackground /></div>
      <Header style={ExtDataStatStyle}><ExtDataStat /></Header>
	  <Header style={ExtDataCategoryStyle}><ExtDataCategory /></Header>
	  <Header style={DataListShowStyle}><DataListShow /></Header>
	  <div style={footerStyle}><FootContent /></div>
    </Layout>
  </Space>
  );


export default DataCenterLayout;
