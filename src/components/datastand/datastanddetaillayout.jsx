import React from 'react';
import TopContent from '../base/topcontent';
import FootContent from '../base/footcontent';
import DetailStandContent from "./detailstandcontent";
import { Layout, Space } from 'antd';
import comp from "../base/comp";


const DataStandDetailLayout = (props) => (
    <comp>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <TopContent frompage="product" propName={props.propName}/>
                <DetailStandContent />
                <FootContent />
            </Layout>
        </Space>
    </comp>
);


export default DataStandDetailLayout;
