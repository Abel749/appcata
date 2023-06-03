import React from 'react';
import TopContent from '../components/topcontent';
import ThisMonthStat from '../components/thismonthstat';
import Content2 from '../components/content2';
import FootContent from '../components/footcontent';
import AppCard from '../components/appcard';
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

const contentStyle = {
  textAlign: 'center',
  minHeight: 220,
  lineHeight: '220px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const IndexLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}><TopContent frompage="home" /></Header>
	  <Header style={contentStyle}><ThisMonthStat /></Header>
	  <Header style={contentStyle}><Content2 /></Header>
	  <Footer style={footerStyle}><FootContent /></Footer>
    </Layout>
  </Space>
  );


export default IndexLayout;
