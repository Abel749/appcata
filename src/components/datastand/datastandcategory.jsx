import { Tabs,Row } from 'antd';
import React from 'react';
import DataStandFirstC from "./datastandfirstc";
import dataStandStyle from "../../styles/datastand.module.css";

const items = [
  {
    key: '1',
    label: `标准主题`,
    children: <DataStandFirstC />,
  },
];

const DataStandCategory = () => (
	<div className={dataStandStyle.baseCard}>
			<h1  className={dataStandStyle.titleH1}>主题域分类</h1>
			<h3 className={dataStandStyle.titleH2}>8大类（标准主题）、61小类（标准大类）</h3>
			<Row className={dataStandStyle.categoryTab}>
				<Tabs tabPosition = "top" defaultActiveKey="1" items={items}  />
			</Row>
	</div>
);

export default DataStandCategory;
