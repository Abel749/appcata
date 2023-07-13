import React from 'react';
import TopContent from '../components/topcontent';
import Content1 from '../components/content1';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import DataCenterBackground from "./datacenterbackground";
import comp from "./comp";
import {StyleProvider} from "@ant-design/cssinjs";


const DataCenterLayout = (props) => (
  <comp>
    <Space>
      <Layout>
        <StyleProvider>
          <TopContent frompage="home" propName={props.propName} />
          <DataCenterBackground />
          <Content1 />
          <FootContent />
        </StyleProvider>
      </Layout>
    </Space>
  </comp>
  );


export default DataCenterLayout;
