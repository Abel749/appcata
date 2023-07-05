import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import NewsDetail from "./NewsDetail";
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
    height: '100%',
    color: '#fff',
    padding:0,
    backgroundColor: '#ffffff',
};

const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#555555',
};

const NewsDetailLayout = (props) => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <Header style={headerStyle}><TopContent frompage="newsDetail" propName={props.propName}/></Header>
            <Content style={contentStyle}><NewsDetail /></Content>
            <Footer style={footerStyle}><FootContent /></Footer>
        </Layout>
    </Space>
);


export default NewsDetailLayout;
