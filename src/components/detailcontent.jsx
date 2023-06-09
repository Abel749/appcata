import React from 'react';
import axios from 'axios';
import {Card, List, Radio, Form, Row, Table, Avatar, Col, Menu,Descriptions} from 'antd';
import { useState,useEffect } from 'react';
import styles from '../styles/Form.module.css';
import Image from "next/image";
import SearchButton from "./searchbutton";
import AvatarLogin from "./avatarlogin";
const h1Style = {
    color:'black',
    marginLeft:'350px',
    fontSize:'30px',
};
const imageStyle1 = {
    marginLeft:'395px',
    marginTop:'35px',

};

const imageStyle2 = {
    marginLeft:'700px',
    marginTop:'-335px',
};

const productInfoStyle = {
    marginLeft:'700px',
    marginTop:'-265px',
};

const publicStyle = {
    marginLeft:'395px',
};

const h2Style = {
    color:'black',
    marginLeft:'395px',
    fontSize:'16px',
    backgroundColor:'#7dbcea',
    height:'35px',
    width:'950px',
    display:'flex',
    alignItems:'center',
};

const imageStyle3 = {
    marginLeft:'365px',
    float:'left',
};



const data ={
    code: "111",


};



const DetailContent = (props) =>
    (

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
                <Descriptions.Item label="">{data.code}</Descriptions.Item>
                <Descriptions.Item label="">检验类数据</Descriptions.Item>
                <Descriptions.Itemcode
                    label="">检验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍、学历核验、发票核验、驾驶证核验等数据。</Descriptions.Itemcode>
                <Descriptions.Item label="">KJHT2021100012</Descriptions.Item>
                <Descriptions.Item label="">金蝶征信有限公司</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>基本信息</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="产品名称">金碟征信</Descriptions.Item>
                <Descriptions.Item label="数据来源">金蝶征信有限公司</Descriptions.Item>
                <Descriptions.Item label="一级数据类型">核验类数据</Descriptions.Item>
                <Descriptions.Item label="二级数据类型">发票类</Descriptions.Item>
                <Descriptions.Item label="协议编码">KJHT2021100012</Descriptions.Item>
                <Descriptions.Item label="合同编号">KJHT2021100012</Descriptions.Item>
                <Descriptions.Item
                    label="产品描述">检验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍、学历核验、发票核验、驾驶证核验等数据。</Descriptions.Item>
                <Descriptions.Item label="关键词">征信</Descriptions.Item>
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
                <Descriptions.Item label="接入方式">金碟征信</Descriptions.Item>
                <Descriptions.Item label="下游系统">接口类</Descriptions.Item>
                <Descriptions.Item label="下游业务">核验类数据</Descriptions.Item>
            </Descriptions>
            <div>
                <Image src="/u2613.svg" style={imageStyle3} width={6} height={35} priority/>
                <h1 style={h2Style}>问题咨询</h1>
            </div>
            <Descriptions column={1} style={publicStyle}>
                <Descriptions.Item label="接入方式">金碟征信</Descriptions.Item>
                <Descriptions.Item label="下游系统">接口类</Descriptions.Item>
                <Descriptions.Item label="下游业务">核验类数据</Descriptions.Item>
            </Descriptions>


        </>
    );
export default DetailContent;