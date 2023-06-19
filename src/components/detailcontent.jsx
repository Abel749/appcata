import React from 'react';
import axios from 'axios';
import {Card, List, Radio, Form, Row, Table, Avatar, Col, Menu,Descriptions} from 'antd';
import { Input, Space } from 'antd';
import { useState,useEffect } from 'react';
import Image from "next/image";


const parentDevStyle={
    borderTop:'1px',
    borderTopStyle:'solid',
    backgroundColor: '#036ED6',
}

const imageDivStyle ={

    //background:'url(/detail_baner.jpg) no-repeat',
    background:'url(/dataDetail/detail-baner.png) no-repeat',
    height: '320px',
    width: '1700px',
};

const h1Style = {
    color:'black',
    marginLeft:'450px',
    fontSize:'30px',
};
const imageStyle1 = {
    marginLeft:'495px',
    marginTop:'50px',
};

const imageStyle2 = {
    marginLeft:'736px',
    marginTop:'-300px',
};

const productInfoStyle = {
    marginLeft:'760px',
    marginTop:'-260px',
};

const itemNameStyle ={
    fontSize:'22px',
    fontWeight:'600',
};

const type1Style = {
    marginTop:'19px',
    fontSize:'10px',
    //background:'url(/u2606.svg) no-repeat',
    paddingInline:'6px',
    //height: '10px',
};

const applicationStyle = {
    marginTop:'-230px',
    fontSize:'16px',
    fontcolor:'#f7f7f7',
};

const contractStyle = {
    fontSize:'10px',
    marginTop:'-175px',
    fontcolor:'#f7f7f7',
    fontWeight:'500',
};

const dataSourcesSyle = {
    fontSize:'10px',
    marginTop:'-165px',
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

const itemNameP1Style={
    marginLeft:'580px',
    marginTop:'-160px',
    fontSize:'16px',
    fontWeight:'600',
    textAlign:'center',

};
const contractP2Style={
    marginLeft:'535px',
    marginTop:'-100px',
    fontSize:'10px'
};

const searchStyle={
    width:'450px',

}

const h0Style={
    fontSize:'22px',
    fontWeight:'600',
}

const searchDivStyle={
    paddingTop:'140px',
    marginLeft:'750px',
}


const { Search } = Input;

const onSearch = (value) => console.log(value);




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
            <div style={parentDevStyle}>
                <div style={imageDivStyle}>
                    <div style={searchDivStyle}>
                        <h6 style={h0Style}>恒必应</h6>
                        <Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton style={searchStyle} />
                    </div>
                </div>
            </div>
            <div>
                <h1 style={h1Style}>产品说明</h1>
            </div>



            <Descriptions column={1}  >
                <Descriptions.Item label="" contentStyle={imageStyle1} ><Image src="/dataDetail/product.png" width={240} height={300}
                                                   priority/>

                </Descriptions.Item>
                <Descriptions.Item contentStyle={itemNameP1Style} >{dataItem.ItemName}</Descriptions.Item>
                <Descriptions.Item contentStyle={contractP2Style}>合同编号：{dataItem.ContractNum}</Descriptions.Item>

            </Descriptions>
            <Descriptions column={1} contentStyle={imageStyle2}>
                <Descriptions.Item label=""><Image src="/product_title.jpg" width={240} height={65} priority/>
                </Descriptions.Item>

            </Descriptions>
            <Descriptions column={1} contentStyle={productInfoStyle}>
                <Descriptions.Item label="" contentStyle={itemNameStyle}>{dataItem.ItemName}</Descriptions.Item>
                <span ><button style={type1Style}>{dataType.type1}</button></span>
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
                <div>
                    <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                    <h1 style={h2Style}>使用案例</h1>
                </div>
                <Descriptions column={1} style={publicStyle}>
                    <Descriptions.Item contentStyle={descItemStyle}>
                        1、网络应收贷、网络预付贷、电子保函等业务今昔大数据风险检验；<br/>
                        2、对工产品放款环节进行校验。
                    </Descriptions.Item>
                </Descriptions>
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