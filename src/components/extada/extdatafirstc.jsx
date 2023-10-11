import { Col, List} from 'antd';
import axios from "axios";
import React, { useState,useEffect } from 'react';
import exTaDaStyle from "../../styles/Extada.module.css";
import Link from "next/link";
import config from "../../../next.config";
const data = [];

const ExtDataFirstC = () => {
	const [dataItem, setDataItem] = useState(data);
	useEffect(() => {
		getType1().then();
	}, []);

	//一级数据类型初始化
	const getType1 = async() => {
		let detailUrl = config.baseUrl.Url + 'api/types?pagination[page]=1&pagination[pageSize]=100';
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
			let typeCode1 = item.code1;
			if(dataTypeCode1.indexOf(typeCode1) == -1) {
				dataTypeCode1.push(typeCode1);
				const dataTypeTemp = {
						code: item.code,
						code1: item.code1,
						code2: item.code2,
						name: item.type1,
						url: "/datacenter?firstType=" + item.code1,
					    logo:item.LogoSrc2,
					}
					//添加一级数据类型
				dataType1.push(dataTypeTemp);
			}
		}
		setDataItem(dataType1);

	};

	return (
		<>
			<div className={exTaDaStyle.firstData}>
				<div className={exTaDaStyle.leftClass}>
					<h1 className={exTaDaStyle.backgroundH1}>一级数据分类</h1>
					<div className={exTaDaStyle.firstBackground}></div>
				</div>
				<div className={exTaDaStyle.rightClass}>
					<List grid={{ column: 3 }}
						dataSource={dataItem}
						renderItem={(item) => (
							<List.Item className={exTaDaStyle.button1} >
								<Link href={item.url}>
									<Col aria-colspan={8} className={exTaDaStyle.linkItem}>
										<div className={exTaDaStyle.linkImg}>
											<img src={item.logo} alt="" className={exTaDaStyle.img1} />
										</div>
										<div className={exTaDaStyle.linkBun}>
											<h3>{item.name}</h3>
										</div>
									</Col>
								</Link>
							</List.Item>
						)}
					/>
				</div>
			</div>
		</>
	)
}
export default ExtDataFirstC;
