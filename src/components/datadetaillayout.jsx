import React from 'react';
import TopContent from '../components/topcontent';
import DetailContent from '../components/detailcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import ThisMonthStat from "./thismonthstat";
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
    //textAlign: 'center',
    height: '100%',
    color: '#fff',
    padding:0,
    //backgroundColor: '#108ee9',
    backgroundColor: '#ffffff',
};

const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#555555',
};

const DataDetailLayout = () => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <Header style={headerStyle}><TopContent frompage="datadetail" /></Header>
            <Header style={contentStyle}><DetailContent /></Header>
            <div style={footerStyle}><FootContent /></div>
        </Layout>
    </Space>
);


export default DataDetailLayout;
