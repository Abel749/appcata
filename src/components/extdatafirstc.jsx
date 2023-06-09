
import {Row, Col,  Image, List} from 'antd';

import axios from "axios";
import React, { useState,useEffect } from 'react';
import styles from "../styles/extada.module.css";
import Link from "next/link";
const data =[];

const ExtDataFirstC = () => {
	const [dataItem, setDataItem] = useState(data);
	useEffect(() => {
		getType1();
	}, []);

	//一级数据类型初始化
	const getType1 = async () => {
		const result = await axios(
			'http://localhost:1337/api/types',
		);
		const dataTypes = result.data.data.map((item,index) => {
			return   item.attributes;
		})
		let dataType1 =[];
		// 去除重复一级数据类型
		let dataTypeName1 =[];
		for (let item of dataTypes) {
			let code = item.code;
			let typeName1 = item.type1;
			if(dataTypeName1.indexOf(typeName1) == -1 ){
				dataTypeName1.push(typeName1);
				const dataTypeTemp = {
					code: code,
					name: typeName1,
					url: "/datacenter?firstType="+code,
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
							<List.Item className={styles.button1} >
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
