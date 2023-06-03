import { Tabs,Row,Col } from 'antd';
import React from 'react';
import ExtDataFirstC from '../components/extdatafirstc';
import ExtDataSecondC from '../components/extdatasecondc';

const titleStyle = {
  height: '30px',
  color: '#000',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#ffffff',
};

const tabStyle = {
  margin:0,
  height: '440px',
  color: '#000',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#ffffff',
};

const items = [
  {
    key: '1',
    label: `一级数据类型`,
    children: <ExtDataFirstC />,
  },
  {
    key: '2',
    label: `二级数据类型`,
    children: <ExtDataSecondC />,
  },
];

const ExtDataCategory = () => (
  <div>
    <Row style={titleStyle}>
	  <Col span='24'><h1 >资产分类</h1></Col>
	</Row> 
	<Row style={titleStyle}>
	  <Col span='24'><h3>10个大类（一级数据类型）、27个小类（二级数据类型）</h3></Col>
	</Row> 
	<Row style={tabStyle}>
	  <Col span='24'>
        <Tabs tabPosition = "top" defaultActiveKey="1" items={items}  />
	  </Col>
	</Row>
  </div>
);

export default ExtDataCategory;
