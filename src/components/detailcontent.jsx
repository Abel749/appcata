import React from 'react';
import axios from 'axios';
import {Card, List, Radio, Form, Row, Table, Avatar, Col, Menu,Descriptions} from 'antd';
import { useState,useEffect } from 'react';
import Image from "next/image";
const h1Style = {
	color: 'black',
	marginLeft: '350px',
	fontSize: '30px',
};
const imageStyle1 = {
	marginLeft: '395px',
	marginTop: '35px',

};

const imageStyle2 = {
	marginLeft: '700px',
	marginTop: '-335px',
};

const productInfoStyle = {
	marginLeft: '700px',
	marginTop: '-265px',
};

const publicStyle = {
	marginLeft: '395px',
};

const h2Style = {
	color: 'black',
	marginLeft: '395px',
	fontSize: '16px',
	backgroundColor: '#E6F1FB',
	height: '35px',
	width: '950px',
	display: 'flex',
	alignItems: 'center',
};

const imageStyle3 = {
	marginLeft: '365px',
	float: 'left',
};

const data = [];
const type = [];
const DetailContent = (props) => {
	const [dataItem, setDataItem] = useState(data);
	const [dataType, setDataType] = useState(type);
	``
	useEffect(() => {
		getItemDetail();

	}, []);

	const getItemDetail = async() => {
		let detailUrl = window.location.href.toString();
		if(detailUrl.indexOf('itemId') > 0) {
			let arr = detailUrl.split('=');
			detailUrl = "http://localhost:1337/api/items/" + arr[1] + "?populate=*";
		}
		const result = await axios(
			detailUrl
		);
		const dataDetail = result.data.data.attributes;
		const itemType = result.data.data.attributes.type.data.attributes;
		setDataItem(dataDetail);
		setDataType(itemType);
	};


return (

        <>
            <div>
                <Image src="/detail_baner.jpg" width={1550} height={500} priority/>
            </div>
            <div>
                <h1 style={h1Style}>产品说明</h1>
            </div>
            <Descriptions column={1} contentStyle={imageStyle1}>
                <Descriptions.Item label=""><Image src="/product_card.jpg" width={240} height={300}
                                                   priority/></Descriptions.Item>
            </Descriptions>
            <Descriptions column={1} contentStyle={imageStyle2}>
                <Descriptions.Item label=""><Image src="/product_title.jpg" width={150} height={80} priority/>
                </Descriptions.Item>
            </Descriptions>
            <Descriptions column={1} contentStyle={productInfoStyle}>
                <Descriptions.Item label="">{dataItem.ItemName}</Descriptions.Item>
                <Descriptions.Item label="">{dataType.type1}</Descriptions.Item>
                <Descriptions.Item label="">{dataItem.ApplicationScenario}</Descriptions.Item>
                <Descriptions.Item label="">{dataItem.ContractNum}</Descriptions.Item>
                <Descriptions.Item label="">{dataItem.DataSources}</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>基本信息</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="产品名称">{dataItem.ItemName}</Descriptions.Item>
                <Descriptions.Item label="数据来源">{dataItem.DataSources}</Descriptions.Item>
                <Descriptions.Item label="一级数据类型">{dataType.type1}</Descriptions.Item>
                <Descriptions.Item label="二级数据类型">{dataType.type2}</Descriptions.Item>
                <Descriptions.Item label="协议编码">{dataItem.AgreementNum}</Descriptions.Item>
                <Descriptions.Item label="合同编号">{dataItem.ContractNum}</Descriptions.Item>
                <Descriptions.Item
                    label="产品描述">{dataItem.Description}</Descriptions.Item>
                <Descriptions.Item label="关键词">{dataItem.KeyWords}</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>使用案例</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="">1、网络应收贷、网络预付贷、电子保函等业务今昔大数据风险检验；</Descriptions.Item>
                <Descriptions.Item label="">2、对工产品放款环节进行校验。</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>物理信息</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="接入方式">{dataItem.AccessMode}</Descriptions.Item>
                <Descriptions.Item label="下游系统">{dataItem.FollowSys}</Descriptions.Item>
                <Descriptions.Item label="下游业务">{dataItem.FollowBuss}</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>问题咨询</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="接入方式">{dataItem.AccessMode}</Descriptions.Item>
                <Descriptions.Item label="下游系统">{dataItem.FollowSys}</Descriptions.Item>
                <Descriptions.Item label="下游业务">{dataItem.FollowBuss}</Descriptions.Item>
            </Descriptions>
        </>
    )
    };
export default DetailContent;