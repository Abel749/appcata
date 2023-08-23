import React from 'react';
import TopContent from '../../components/topcontent';
import FootContent from '../../components/footcontent';
import DetailStandContent from "./detailstandcontent";
import { Layout, Space } from 'antd';
import comp from ".././comp";


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
