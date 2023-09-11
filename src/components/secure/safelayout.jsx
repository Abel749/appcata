import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import SafeBackground from "./safebackground";
import SafeClass from "./safeclass";
import LifeCycle from "./lifecycle";
import Notice from "./notice";

const SafeLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout style={{ backgroundColor: '#ffffff' }}>
            <TopContent frompage="product" propName={props.propName}/>
            <SafeBackground/>
            <SafeClass/>
            <LifeCycle/>
            <Notice/>
            <FootContent/>
        </Layout>
    </Space>
  );


export default SafeLayout;
