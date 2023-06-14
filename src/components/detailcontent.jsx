import React from 'react';
import axios from 'axios';
import {Card, List, Radio, Form, Row, Table, Avatar, Col, Menu,Descriptions} from 'antd';
import { useState,useEffect } from 'react';
import Image from "next/image";

const imageDivStyle ={
    borderTop:'1px',
    borderTopStyle:'solid',
};

const h1Style = {
    color:'black',
    marginLeft:'450px', // 350
    fontSize:'30px',
};
const imageStyle1 = {
    marginLeft:'495px', // 395
    marginTop:'35px',

};

const imageStyle2 = {
    marginLeft:'736px', // 636
    marginTop:'-270px',
};

const productInfoStyle = {
    marginLeft:'760px', // 660
    marginTop:'-215px',
};

const itemNameStyle ={
    fontSize:'22px',
    fontWeight:'600',
};

const type1Style = {
    marginTop:'-195px',
    fontSize:'10px',
    background:'url(/u2606.svg) no-repeat',
    paddingInline:'6px',
};

const applicationStyle = {
    marginTop:'-190px',
    fontSize:'16px',
    fontcolor:'#f7f7f7',
};

const contractStyle = {
    fontSize:'10px',
    marginTop:'-145px',
    fontcolor:'#f7f7f7',
    fontWeight:'500',
};

const dataSourcesSyle = {
    fontSize:'10px',
    marginTop:'-135px',
    fontWeight:'500',
};

const publicStyle = {
    marginLeft:'495px', // 395
    //borderSpacing:'5px',
};

const h2Style = {
    color:'black',
    marginLeft:'495px', // 395
    fontSize:'16px',
    backgroundColor:'#E6F1FB',
    height:'35px',
    width:'950px',
    display:'flex',
    alignItems:'center',
};

const imageStyle3 = {
    marginLeft:'465px', // 365
    float:'left',
};

const baseInfoDevStyle ={
    marginTop:'-80px',
};

const descItemStyle ={
    fontSize:'13px'
    //lineHeight
};



const data =[];
const type =[];
const DetailContent = (props) =>
    {
        const [dataItem, setDataItem] = useState(data);
        const [dataType, setDataType] = useState(type);
        useEffect(() => {
            getItemDetail();

        }, []);

        const getItemDetail = async () => {
            let detailUrl = window.location.href.toString();
            if(detailUrl.indexOf('itemId') >0){
                let arr = detailUrl.split('=');
                detailUrl = "http://localhost:1337/api/items/"+arr[1]+"?populate=*";
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
            <div style={imageDivStyle}>
                <Image src="/detail_baner.jpg"  width={1700} height={500} priority/>
            </div>
            <div>
                <h1 style={h1Style}>产品说明</h1>
            </div>
            <Descriptions column={1} contentStyle={imageStyle1}>
                <Descriptions.Item label=""><Image src="/product_card.jpg" width={240} height={300}
                                                   priority/></Descriptions.Item>
            </Descriptions>
            <Descriptions column={1} contentStyle={imageStyle2}>
                <Descriptions.Item label=""><Image src="/product_title.jpg" width={240} height={65} priority/>
                </Descriptions.Item>
            </Descriptions>
            <Descriptions column={1} contentStyle={productInfoStyle}>
                <Descriptions.Item label="" contentStyle={itemNameStyle}>{dataItem.ItemName}</Descriptions.Item>
                <Descriptions.Item label="" contentStyle={type1Style}>{dataType.type1}</Descriptions.Item>
                <Descriptions.Item label="" contentStyle={applicationStyle}>{dataItem.ApplicationScenario}</Descriptions.Item>
                <Descriptions.Item label="" contentStyle={contractStyle}>{dataItem.ContractNum}</Descriptions.Item>
                <Descriptions.Item label="" contentStyle={dataSourcesSyle}>{dataItem.DataSources}</Descriptions.Item>
            </Descriptions>
            <div style={baseInfoDevStyle}>
                <div>
                    <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                    <h1 style={h2Style}>基本信息</h1>
                </div>
                <Descriptions column={1} style={publicStyle}>
                    <Descriptions.Item contentStyle={descItemStyle}>
                        产品名称: {dataItem.ItemName} <br/>
                        数据来源: {dataItem.DataSources} <br/>
                        一级数据类型: {dataType.type1} <br/>
                        二级数据类型: {dataType.type2} <br/>
                        协议编码: {dataItem.AgreementNum} <br/>
                        合同编号: {dataItem.ContractNum} <br/>
                        产品描述: {dataItem.Description} <br/>
                        关键词: {dataItem.KeyWords}
                    </Descriptions.Item>
                </Descriptions>
                {/*<div>
                    <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                    <h1 style={h2Style}>使用案例</h1>
                </div>
                <Descriptions column={1} style={publicStyle}>
                    <Descriptions.Item label="">1、网络应收贷、网络预付贷、电子保函等业务今昔大数据风险检验；</Descriptions.Item>
                    <Descriptions.Item label="">2、对工产品放款环节进行校验。</Descriptions.Item>
                </Descriptions>*/}
                <div>
                    <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                    <h1 style={h2Style}>物理信息</h1>
                </div>
                <Descriptions column={1} style={publicStyle}>
                    <Descriptions.Item contentStyle={descItemStyle}>
                        接入方式: {dataItem.AccessMode} <br/>
                        下游系统: {dataItem.FollowSys} <br/>
                        下游业务: {dataItem.FollowBuss}
                    </Descriptions.Item>
                </Descriptions>
                {/*<div>
                    <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                    <h1 style={h2Style}>问题咨询</h1>
                </div>
                <Descriptions column={1} style={publicStyle}>
                    <Descriptions.Item label="接入方式">{dataItem.AccessMode}</Descriptions.Item>
                    <Descriptions.Item label="下游系统">{dataItem.FollowSys}</Descriptions.Item>
                    <Descriptions.Item label="下游业务">{dataItem.FollowBuss}</Descriptions.Item>
                </Descriptions>*/}
            </div>
        </>
    )
    };
export default DetailContent;