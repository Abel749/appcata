import { Col, List} from 'antd';
import axios from "axios";
import React, { useState,useEffect } from 'react';
import dataStandStyle from "../../styles/datastand.module.css";
import Link from "next/link";
import config from "../../../next.config";
const data = [];

const DataStandFirstC = () => {
	const [dataItem, setDataItem] = useState(data);
	useEffect(() => {
		getType1().then();
	}, []);

	//一级数据类型初始化
	const getType1 = async() => {
		let detailUrl = config.baseUrl.Url + 'api/themes?pagination[page]=1&pagination[pageSize]=100';
		const result = await axios(
			detailUrl
		);
		const dataTypes = result.data.data.map((item) => {
			return item.attributes;
		})
		let dataType1 = [];
		// 去除重复一级数据类型
		let dataTypeCode1 = [];
		for(let item of dataTypes) {
			debugger;
			let typeCode1 = item.subjectCode1;
			if(dataTypeCode1.indexOf(typeCode1) == -1) {
				dataTypeCode1.push(typeCode1);
				const dataTypeTemp = {
						code1: item.code,
						code2: item.subjectCode1,
						name: item.name,
						url: "/datastandcenter?firstType=" + item.subjectCode1,
					    logo:item.logoSrc,
					}
					//添加一级数据类型
				dataType1.push(dataTypeTemp);
			}
		}
		setDataItem(dataType1);

	};

	return (
		<>
			<div className={dataStandStyle.firstData}>
				<div className={dataStandStyle.leftClass}>
					<h1 className={dataStandStyle.backgroundH1}>标准主题</h1>
					<div className={dataStandStyle.firstBackground}>
						<img src="/datastand/firstc.png" className={dataStandStyle.firstBackground} />
					</div>
				</div>
				<div className={dataStandStyle.rightClass}>
					<List grid={{ column: 2 }}
						dataSource={dataItem}
						renderItem={(item) => (
							<List.Item className={dataStandStyle.button1} >
								<Link href={item.url}>
									<div className={dataStandStyle.linkItem}>
										<div className={dataStandStyle.linkImg}>
											<img src={item.logo} alt="" className={dataStandStyle.img1} />
										</div>
										<div className={dataStandStyle.linkBun}>
											<h3>{item.name}</h3>
										</div>
									</div>
								</Link>
							</List.Item>
						)}
					/>
				</div>
			</div>
		</>
	)
}
export default DataStandFirstC;
