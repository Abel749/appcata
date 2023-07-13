import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import NewsContent from "./newsContent";
import comp from "./comp";

const NewsListLayout = (props) => {
    return (
        <comp>
            <Space>
                <Layout>
                    <TopContent frompage="newsList" propName={props.propName} />
                    <NewsContent />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default NewsListLayout;
