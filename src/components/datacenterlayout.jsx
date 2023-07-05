import React from 'react';
import TopContent from '../components/topcontent';
import Content1 from '../components/content1';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import DataCenterBackground from "./datacenterbackground";
import comp from "./comp";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 80,
  paddingInline: 50,
  lineHeight: '80px',
  backgroundColor: '#036ED6',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 820,
  lineHeight: '220px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  //color: '#fff',
  backgroundColor: '#555555',
};

const DataCenterBackgroundStyle = {
  background:'url(/dataDetail/detail-baner.png) no-repeat ',
  height: '300px',
  width: '1700px',
};
const BackGroundCorolStyle = {
  borderTopWidth:'1px',
  borderTopStyle:'solid',
  borderTopColor:'aliceblue',
  backgroundColor: '#036ED6',
}

const DataCenterLayout = (props) => (
  <comp>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}><TopContent frompage="datacenter" propName={props.propName} /></Header>
        <div style={BackGroundCorolStyle}>
          <div style={DataCenterBackgroundStyle}><DataCenterBackground /></div>
        </div>
        <Header style={contentStyle}><Content1 /></Header>
        <Footer style={footerStyle}><FootContent /></Footer>
      </Layout>
    </Space>
  </comp>
  );


export default DataCenterLayout;
