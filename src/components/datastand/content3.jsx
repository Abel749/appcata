import React from 'react';
import axios from 'axios';
import {List, Radio, Row, Col, Input} from 'antd';
import { useState, useEffect } from 'react';
import dataCenterStyle from '../../styles/dataCenter.module.css';
import dataStandStyle from '../../styles/datastand.module.css';
import Link from "next/link";
import config from "next.config";
import searchDataStyle from "../../styles/searchdata.module.css";
const { Search } = Input;


const firstLevelMap_temp = [{ code: '', name: '',code1 :'',ItemName :'',ApplicationScenario:'' ,DataSources:'',Src1:'',DDSSrc:''}];
const secondLevelMap_temp = [{ code: '', name: '' ,code2 :''}];
const data = [];
const Content3 = (props) => {
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
		let baseUrl = config.baseUrl.Url + 'api/themes?pagination[page]=1&pagination[pageSize]=1000';
		const result = await axios(
			baseUrl
		);
		const dataTypes = result.data.data.map((item, index) => {
			return item.attributes;
		})
		let dataType1 = [];
		let dataType2 = [];
		// 去除重复一级数据类型
		let dataTypeCode1 = [];
		for(let item of dataTypes) {
			let typeCode1 = item.subjectCode1;
			if(dataTypeCode1.indexOf(typeCode1) == -1) {
				dataTypeCode1.push(typeCode1);
				const dataTypeTemp = {
					code: item.code,
					code1: item.subjectCode1,
					code2: item.subjectCode2,
					name: item.name,
				}
				//添加一级数据类型
				dataType1.push(dataTypeTemp);
			}
			//添加二级数据类型
			let firstTypeCode = dataTypes[0].subjectCode1;
			if(typeCode1 == firstTypeCode) {
				const dataTypeTemp = {
					code: item.code,
					code1: item.subjectCode1,
					code2: item.subjectCode2,
					name: item.subjectName1,
				}
				dataType2.push(dataTypeTemp);
			}
		}
		setFirstLevelMap(dataType1);
		setSecondLevelMap(dataType2);
	};

	//根据一级类型获取二级类型
	const getType2 = async(firstLevel) => {
		if('' != firstLevel && undefined != firstLevel) {
			let baseUrl = config.baseUrl.Url + 'api/themes?[filters][subjectCode1][$eq]=' + firstLevel +'&pagination[page]=1&pagination[pageSize]=100';
			const result = await axios(
				baseUrl,
			);
			const dataTypes = result.data.data.map((item, index) => {
				return item.attributes;
			})
			let dataTypeName2 = [];
			for(let item of dataTypes) {
				const dataTypeTemp = {
					code: item.code,
					code1: item.subjectCode1,
					code2: item.subjectCode2,
					name1: item.subjectName1,
				}
				dataTypeName2.push(dataTypeTemp);
			}
			setSecondLevelMap(dataTypeName2);
		}
	};

	//数据产品明细
	const fetchData = async(level, typeCode) => {
		let url;
		let baseUrl = config.baseUrl.Url + 'api/stands';
		if( 0 == level ) {
			url = baseUrl + '?populate[theme][filters]*&pagination[page]=1&pagination[pageSize]=100';
		}
		if( 1 == level ) {
			url = baseUrl + '?filters[theme][subjectCode1][$eq]='+typeCode+'&populate[theme][filters][subjectCode1][$eq]='+typeCode +'&pagination[page]=1&pagination[pageSize]=100';
		}
		if( 2 == level ) {
			url = baseUrl + '?filters[theme][subjectCode2][$eq]='+typeCode+'&populate[theme][filters][subjectCode2][$eq]='+typeCode +'&pagination[page]=1&pagination[pageSize]=100';
		}
		const result = await axios(
			url
		);
		const dataItems = result.data.data.map((item,) => {
			item.attributes.id = item.id;
			return item.attributes;
		});
		const dataList = [];
		for(let item of dataItems) {
			if(null != item.theme && undefined != item.theme.data) {
				let types = item.theme.data;
				item.code1 = types.attributes.subjectCode1;
				item.type1 = types.attributes.name;
				item.code2 = types.attributes.subjectCode2;
				item.type2 = types.attributes.subjectName1;
				item.url = '/datastanddetail?itemId=' + item.id
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
			let typeCode = arr[1];
			setFirstLevel(typeCode);
			fetchData(1, null).then();
		}

	}, []);// eslint-disable-line

	const handleKeyChange = (e) => {
		console.log(e.target.value);
	};

	//二级数据类型
	const handlesecondLevel = (e) => {
		setSecondLevel(e.target.value);
		fetchData(2, e.target.value);
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
	}, [firstLevel]);// eslint-disable-line

	useEffect(() => {
		if( undefined != secondLevel) {
			fetchData(2, secondLevel).then();
		}
	}, [secondLevel]);// eslint-disable-line

	//排序规则
	const handleSortChange = (e) => {
		console.log(e.target.value);
	};

	const onSearch = async (value) => {
		console.log(value);
		let baseUrl = config.baseUrl.Url2 + 'searchpage?searchCode='+ value;
		window.location.href= baseUrl;
	};

	return (
		<>
			<div className={searchDataStyle.baseDiv}>
				<div id = "banner" className={dataCenterStyle.banner}></div>
				<div className={dataCenterStyle.bannerBox}>
					<h3 className={dataCenterStyle.titleT3}>恒必应</h3>
					<Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton  />
				</div>
			</div>
			<h1 className={dataCenterStyle.titleH1}>数据标准</h1>
			<div  className={dataCenterStyle.baseCard} >
				<Row className={dataCenterStyle.row}  >
					<Col className={dataCenterStyle.label}>主题域</Col>
					<Col className={dataCenterStyle.list1}>
						<Radio.Group  className={dataCenterStyle.radioButton} value={firstLevel}  onChange={ handlefirstLevel }>
							{firstLevelMap.map((item)=>
								<Radio.Button key = {item.code1} value={item.code1}>{item.name}</Radio.Button>
							)}
						</Radio.Group>
					</Col>
				</Row>

				<Row className={dataCenterStyle.row}   >
					<Col className={dataCenterStyle.label}>标准大类</Col>
					<Col className={dataCenterStyle.list2}>
						<Radio.Group className={dataCenterStyle.radioButton} value={secondLevel} onChange={handlesecondLevel}>
							{secondLevelMap.map((item)=>
								<Radio.Button  key = {item.code2} value={item.code2}>{item.name1}</Radio.Button>
							)}
						</Radio.Group>
					</Col>
				</Row>

				{/*<Row className={dataCenterStyle.row}   >
					<Col className={dataCenterStyle.label}> 排序规则 </Col>
					<Col className={dataCenterStyle.list1}>
						<Radio.Group className={dataCenterStyle.radioButton} value={sortOrder} onChange={handleSortChange}>
							<Radio.Button value="hot">最热</Radio.Button>
							<Radio.Button value="reCom">推荐</Radio.Button>
							<Radio.Button value="new">最新</Radio.Button>
						</Radio.Group>
					</Col>
				</Row>*/}
			</div>
			<div className={dataCenterStyle.baseCard} >
				<List pagination={{ position, align,defaultPageSize:12 ,pageSize:12} }
					  grid={{ column: 3, }}
					  dataSource={dataItem}
					  renderItem={(item) => (
						  <List.Item>
							  <div className={dataStandStyle.item}>
								  <h3>{item.name}</h3>
								  <p>{item.englishName}</p>
								  <button style={{backgroundColor:"#036ED6",color:"white"}}>{item.type1}</button> &nbsp;&nbsp;<button>{item.type2}</button>
								  <textarea disabled readOnly={true} value={item.def}></textarea>
								  <p  className={dataStandStyle.itemDept}>{item.dept}</p>
								  <Link href = {item.url}><p className={dataStandStyle.itemLink}>查看详情 &gt;</p></Link>
								  <p><span>&nbsp;</span></p>
							  </div>
						  </List.Item>
					  )}
				/>
			</div>
		</>
	);

};

export default Content3;
