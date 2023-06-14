import React from 'react';
import axios from 'axios';
import {List, Radio, Form, Row, Col} from 'antd';
import { useState, useEffect } from 'react';
import styles from '../styles/Form.module.css';
import Image from "next/image";
import Link from "next/link";

const firstLevelMap_temp = [{ code: '', name: '',code1 :'',ItemName :'',ApplicationScenario:'' ,DataSources:'',Src1:'',DDSSrc:''}];
const secondLevelMap_temp = [{ code: '', name: '' ,code2 :''}];
const data = [];
const Content1 = (props) => {
	const [firstLevelMap, setFirstLevelMap] = useState(firstLevelMap_temp);
	const [secondLevelMap, setSecondLevelMap] = useState(secondLevelMap_temp);
	const [firstLevel, setFirstLevel] = useState();
	const [secondLevel, setSecondLevel] = useState();
	const [sortOrder, setSortOrder] = useState();
	const [keywords, setKeywords] = useState();
	const [position, setPosition] = useState('bottom');
	const [align, setAlign] = useState('center');
	const [dataItem, setDataItem] = useState(data);

	//一级数据类型初始化
	const getType1 = async() => {
		const result = await axios(
			'http://localhost:1337/api/types',
		);
		const dataTypes = result.data.data.map((item, index) => {
			return item.attributes;
		})
		let dataType1 = [];
		let dataType2 = [];
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
					}
					//添加一级数据类型
				dataType1.push(dataTypeTemp);

				//添加二级数据类型
				let firstTypeCode = dataTypes[0].code1;
				if(typeCode1 == firstTypeCode) {
					const dataTypeTemp = {
						code: item.code,
						code1: item.code1,
						code2: item.code2,
						name: item.type2,
					}
					dataType2.push(dataTypeTemp);
				}
			}
		}
		setFirstLevelMap(dataType1);
		setSecondLevelMap(dataType2);
	};

	//根据一级类型获取二级类型
	const getType2 = async(firstLevel) => {
		if('' != firstLevel && undefined != firstLevel) {
			let url = 'http://localhost:1337/api/types?[filters][code1][$eq]=' + firstLevel;
			const result = await axios(
				url,
			);
			const dataTypes = result.data.data.map((item, index) => {
				return item.attributes;
			})
			let dataTypeName2 = [];
			for(let item of dataTypes) {
				const dataTypeTemp = {
					code: item.code,
					code1: item.code1,
					code2: item.code2,
					name: item.type2,
				}
				dataTypeName2.push(dataTypeTemp);
				setSecondLevelMap(dataTypeName2);
			}
		}
	};

	//数据产品明细
	const fetchData = async(level, typeCode) => {
		let url = 'http://localhost:1337/api/items';
		if( 0 == level ) {
			url = url + '?populate[type][filters]*';
		}
		if( 1 == level ) {
			url = url + '?populate[type][filters][code1][$eq]=' + typeCode;
		}
		if( 2 == level ) {
			url = url + '?populate[type][filters][code2][$eq]=' + typeCode;
		}
		const result = await axios(
			url
		);
		const dataItems = result.data.data.map((item, index) => {
			item.attributes.id = item.id;
			return item.attributes;
		});
		const dataList = [];
		for(let item of dataItems) {

			if(null != item.type && undefined != item.type.data) {
				let types = item.type.data;
				item.code1 = types.attributes.code1;
				item.type1 = types.attributes.type1;
				item.code2 = types.attributes.code1;
				item.type2 = types.attributes.type2;
				item.Src1 = types.attributes.LogoSrc;
				item.url = '/datadetail?itemId=' + item.id
				dataList.push(item);
			}
		}
		if( 1 == level) {
			setFirstLevel(typeCode);
		}
		if( 2 == level && dataList.length > 0) {
			getType2(dataList[0].code1).then();
		}
		setDataItem(dataList);
	};

	useEffect(() => {
		getType1().then();
		let url = window.location.href.toString();
		if(url.indexOf('firstType') > 0) {
			let arr = url.split('=');
			let typeCode = arr[1]
			setFirstLevel(typeCode);
		} else if(url.indexOf('secondType') > 0) {
			let arr = url.split('=');
			let typeCode = arr[1];
			setSecondLevel(typeCode);
		} else {
			fetchData(0, null).then();
		}

	}, []);

	const handleKeyChange = (e) => {
		console.log(e.target.value);
	};

	//二级数据类型
	const handlesecondLevel = (e) => {
		setSecondLevel(e.target.value);
		fetchData(2, e.target.value).then();
	};

	//一级数据类型
	const handlefirstLevel = (e) => {
		setFirstLevel(e.target.value);
		fetchData(1, e.target.value).then();
	};

	useEffect(() => {
		if( undefined != firstLevel) {
			getType2(firstLevel).then();
			fetchData(1, firstLevel).then();
		}
	}, [firstLevel]);

	useEffect(() => {
		if( undefined != secondLevel) {
			fetchData(2, secondLevel).then();
		}
	}, [secondLevel]);

	//排序规则
	const handleSortChange = (e) => {
		console.log(e.target.value);
	};

  return (
	<>
		<Form  className={styles.form} >
			<Row className={styles.row}  >
				<Col className={styles.label}> 一级数据类型 </Col>
				<Col className={styles.list}>
					<Radio.Group  value={firstLevel}  onChange={ handlefirstLevel }>
						{firstLevelMap.map((item)=>
						<Radio.Button key = {item.code1} value={item.code1}>{item.name}</Radio.Button>
					)}
					</Radio.Group>
				</Col>
			</Row>
			<Row className={styles.row}   >
				<Col className={styles.label}> 二级数据类型  </Col>
				<Col className={styles.list}>
					<Radio.Group value={secondLevel} onChange={handlesecondLevel}>
					{secondLevelMap.map((item)=>
						<Radio.Button  key = {item.code2} value={item.code2}>{item.name}</Radio.Button>
					)}
					</Radio.Group>
				</Col>
			</Row>

			<Row className={styles.row}   >
				<Col className={styles.label}> 排序规则 </Col>
				<Col className={styles.list}>
				<Radio.Group value={sortOrder} onChange={handleSortChange}>
					<Radio.Button value="hot">最热</Radio.Button>
					<Radio.Button value="reCom">推荐</Radio.Button>
					<Radio.Button value="new">最新</Radio.Button>
				</Radio.Group>
				</Col>
			</Row>
			<Row className={styles.row}   >
				<Col className={styles.label}> 关键词  </Col>
				<Col className={styles.list}>
					<Radio.Group value={keywords} onChange={handleKeyChange}>
						<Radio.Button value="identify">身份识别</Radio.Button>
						<Radio.Button value="finance">金融信贷</Radio.Button>
						<Radio.Button value="riskCon">风控核验</Radio.Button>
						<Radio.Button value="customer">客户营销</Radio.Button>
						<Radio.Button value="custMarket">精准获客</Radio.Button>
						<Radio.Button value="inclufin">普惠金融</Radio.Button>
						<Radio.Button value="credit">信用评估</Radio.Button>
						<Radio.Button value="risk">风险监控</Radio.Button>
						<Radio.Button value="hedgepro">避险产品</Radio.Button>
						<Radio.Button value="finanpro">金融产品</Radio.Button>
						<Radio.Button value="insure">保险</Radio.Button>
						<Radio.Button value="riskWarn">风险预警</Radio.Button>
					</Radio.Group>
				</Col>
			</Row>
		</Form>

		<List pagination={{ position, align,defaultPageSize:6 } }
			grid={{ gutter: 10, column: 3, }}
			dataSource={dataItem}
			renderItem={(item) => (
				<List.Item >
					<Link href = {item.url} >
						<div className={styles.pss} >
							<Row>
								<div className={styles.top}>
									<Image src={item.DDSSrc} alt="" width={200} height={54} priority />
								</div>
							</Row>
							<Row style ={{height:20}}></Row>
							<Row>
								<Col>
								<div className={styles.left}>
									<Row>
									<Image src={item.Src1} alt="" width={150} height={185} priority />
									</Row>
								</div>
								</Col>
								<Col style={{width:4}}></Col>
								<Col>
									<div className={styles.right}>
										<Row>
											<h3>{item.ItemName}</h3>
										</Row>
										<Row className={styles.height6}></Row>
										<Row>
											&nbsp;<span><button>{item.type1}</button> &nbsp;&nbsp;<button>{item.type2}</button></span>
										</Row>
										<Row className={styles.height24}></Row>
										<Row>
											<textarea className={styles.dataSource}>{item.ApplicationScenario}</textarea>
										</Row>
										<Row className={styles.height36}></Row>
										<Row>
											<h4>{item.DataSources}</h4>
										</Row>
									</div>
								</Col>
							</Row>
						</div>
					</Link>
				</List.Item>
			)}
		/>
	</>
);

};

export default Content1;
