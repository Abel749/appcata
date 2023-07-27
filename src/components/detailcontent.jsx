import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import config from "../../next.config";
import dataCenterStyle from '../styles/dataCenter.module.css';
import searchDataStyle from "../styles/searchdata.module.css";
import {Input} from "antd";
const { Search } = Input;

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
                detailUrl = config.baseUrl.Url +"api/items/"+arr[1]+"?populate=*";
            }
            const result = await axios(
                detailUrl
            );
            const dataDetail = result.data.data.attributes;
            const itemType = result.data.data.attributes.type.data.attributes;
            const  linkUrl1 = "/datacenter?firstType=" + itemType.code1;
            itemType.linkUrl1 = linkUrl1;
            const  linkUrl2 = "/datacenter?secondType=" + itemType.code2;
            itemType.linkUrl2 = linkUrl2;
            setDataItem(dataDetail);
            setDataType(itemType);
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
{/*                    <p> 关键字推荐:</p>
                    <p> 身份识别、金融信贷、风险监控、风控核验、客户营销、精准获客、惠金融信用评估、避险产品、金融产品、保险、风险预警</p>*/}
                </div>
            </div>
            <div className={dataCenterStyle.itemDetailBase}>
                <h1 className={dataCenterStyle.h1Style}>产品说明</h1>
                <div className={dataCenterStyle.itemDetail}>
                    <div className={dataCenterStyle.leftBase}>
                        <h4  className={dataCenterStyle.itemName}> {dataItem.ItemName}</h4>
                        <h4 className={dataCenterStyle.contract}> 合同编号：{dataItem.ContractNum}</h4>
                    </div>
                    <div className={dataCenterStyle.rightInfo}>
                        <img alt=""  src={dataItem.DDSSrc} className={dataCenterStyle.dbSSrc} />
                        <h3>{dataItem.ItemName} </h3>
                        <p>
                           <a href={dataType.linkUrl1}>{dataType.type1}</a>
                           <a href={dataType.linkUrl2}>{dataType.type2}</a>
                        </p>
                        <p>{dataItem.ApplicationScenario}</p>
                        <h3>{dataItem.ContractNum}</h3>
                        <h3>{dataItem.DataSources}</h3>
                    </div>
                </div>
                <div className={dataCenterStyle.productInfo}>
                    <div><h2>基本信息</h2></div>
                    <p><span>产品名称:</span> {dataItem.ItemName}</p>
                    <p><span>数据来源: </span>{dataItem.DataSources}</p>
                    <p><span> 一级数据类型:</span> {dataType.type1}</p>
                    <p><span>二级数据类型: </span>{dataType.type2}</p>
                    <p><span>协议编码: </span>{dataItem.AgreementNum}</p>
                    <p><span>合同编号:</span> {dataItem.ContractNum}</p>
                    <p><span> 产品描述: </span>{dataItem.Description}</p>
                    <p><span>关键词:</span> {dataItem.KeyWords}</p>
                </div>
                <div className={dataCenterStyle.dataDemo}>
                    <div><h2>使用案例</h2></div>
                    <p> 1、网络应收贷、网络预付贷、电子保函等业务今昔大数据风险检验</p>
                    <p> 2、对工产品放款环节进行校验。</p>
                </div>
                <div className={dataCenterStyle.descItem}>
                    <div><h2>物理信息</h2></div>
                    <p><span>接入方式:</span>{dataItem.AccessMode}</p>
                    <p><span>下游系统:</span>{dataItem.FollowSys}</p>
                    <p><span>下游业务:</span>{dataItem.FollowBuss}</p>
                </div>
            </div>
        </>
    )
    };
export default DetailContent;