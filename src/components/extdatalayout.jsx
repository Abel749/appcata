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
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const ExtDataBackgroundStyle = {
  height: 500,
  borderTopWidth:'1px',
  borderTopStyle:'solid',
  borderTopColor:'aliceblue',
};
const ExtDataStatStyle = {
  textAlign: 'center',
  minHeight: 80,
  lineHeight: '20px',
  color: '#fff',
  //backgroundColor: '#108ee9',
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
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const DataCenterLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}><TopContent frompage="home" /></Header>
      <div style={ExtDataBackgroundStyle}><ExtDataBackground /></div>
      <Header style={ExtDataStatStyle}><ExtDataStat /></Header>
	  <Header style={ExtDataCategoryStyle}><ExtDataCategory /></Header>
	  <Header style={DataListShowStyle}><DataListShow /></Header>
	  <Footer style={footerStyle}><FootContent /></Footer>
    </Layout>
  </Space>
  );


export default DataCenterLayout;
