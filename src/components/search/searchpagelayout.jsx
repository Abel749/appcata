import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import { Layout, Space } from 'antd';
import SearchData from "./searchdata";
import comp from "../base/comp";

const SearchPageLayout = (props) => {
    return (
        <comp>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <TopContent frompage="searchPage" propName={props.propName} />
                    <SearchData />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default SearchPageLayout;

