import React from 'react';
import TopContent from './base/topcontent';
import Content2 from './index/content2';
import FootContent from './base/footcontent';
import IndexBackground from './index/indexbackground'
import { Layout, Space } from 'antd';
import HotList from "./index/hotlist";
import HzCsList from "./index/hzcsList";
import NewsCard from "./index/newsCard";

const IndexLayout = (props) => {
  return (
          <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
                <TopContent frompage="home" propName={props.propName} />
                <IndexBackground/>
                <Content2/>
                <HotList/>
                <NewsCard/>
                <HzCsList/>
                <FootContent/>
            </Layout>
          </Space>
  );
}



export default IndexLayout;
