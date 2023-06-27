
import {Row, Col,  Image, List} from 'antd';

import axios from "axios";
import React, { useState,useEffect } from 'react';
import extadaStyles from "../styles/extada.module.css";
import Link from "next/link";
import config from "../../next.config";
const data = [];

const ExtDataFirstC = () => {
	const [dataItem, setDataItem] = useState(data);
	useEffect(() => {
		getType1();
	}, []);

	//一级数据类型初始化
	const getType1 = async() => {
		let detailUrl = config.baseUrl.Url + 'api/types?pagination[page]=1&pagination[pageSize]=100';
		const result = await axios(
			detailUrl
		);
		const dataTypes = result.data.data.map((item, index) => {
			return item.attributes;
		})
		let dataType1 = [];
		// 去除重复一级数据类型
		let dataTypeCode1 = [];
		for(let item of dataTypes) {
			let typeCode1 = item.code1;
			if(dataTypeCode1.indexOf(typeCode1) == -1) {
				dataTypeCode1.push(typeCode1);
				const dataTypeTemp = {
						code: item.code,
						code1: item.code1,
						code2: item.code2,
						name: item.type1,
						url: "/datacenter?firstType=" + item.code1,
					}
					//添加一级数据类型
				dataType1.push(dataTypeTemp);
			}

		}
		setDataItem(dataType1);

	};

	return (
		<>
			<Row>
				<Col span={8}>
					<Image src="firstc.png" alt=""/>
				</Col>
				<Col span={16}>
					<List
						grid={{
							column: 2,
						}}
						dataSource={dataItem}
						renderItem={(item) => (
							<List.Item className={extadaStyles.button1} >
								<Link href={item.url}>{item.name}</Link>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</>
	)
}
export default ExtDataFirstC;
