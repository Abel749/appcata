import { Tabs,Row } from 'antd';
import React from 'react';
import ExtDataFirstC from '../components/extdatafirstc';
import ExtDataSecondC from '../components/extdatasecondc';
import exTaDaStyle from "../styles/extada.module.css";


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
	<div className={exTaDaStyle.baseCard}>
			<h1  className={exTaDaStyle.titleH1}>资产分类</h1>
			<h3 className={exTaDaStyle.titleH2}>10个大类（一级数据类型）、27个小类（二级数据类型）</h3>
			<Row className={exTaDaStyle.categoryTab}>
				<Tabs tabPosition = "top" defaultActiveKey="1" items={items}  />
			</Row>
	</div>
);

export default ExtDataCategory;
