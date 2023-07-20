import React from 'react';
import TopContent from '../components/topcontent';
import ThisMonthStat from '../components/thismonthstat';
import Content2 from '../components/content2';
import FootContent from '../components/footcontent';
import IndexBackground from '../components/indexbackground'
import { Layout, Space } from 'antd';
import DataShare from "./datashare";
import HotList from "../components/hotlist";
import HzCsList from "./hzcsList";
import NewsCard from "./newsCard";
import {StyleProvider} from '@ant-design/cssinjs';
import comp from "./comp";



const IndexLayout = (props) => {
  return (
      <comp>
          <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout style={{ backgroundColor: '#ffffff' }}>
              <StyleProvider>
                <TopContent frompage="home" propName={props.propName} />
                <IndexBackground />
{/*                <ThisMonthStat />*/}
                <DataShare />
                <Content2 />
                <HotList />
                <NewsCard />
                <HzCsList />
                <FootContent />
              </StyleProvider>
            </Layout>
          </Space>
      </comp>
  );
}



export default IndexLayout;
