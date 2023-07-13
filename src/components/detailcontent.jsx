import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import config from "../../next.config";
import dataCenterStyle from '../styles/dataCenter.module.css';

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
            setDataItem(dataDetail);
            setDataType(itemType);
        };


return (
        <>
            <div className={dataCenterStyle.itemDetailBase}>
                <h1 className={dataCenterStyle.h1Style}>产品说明</h1>
                <div className={dataCenterStyle.itemDetail}>
                    <div className={dataCenterStyle.leftBase}>
                        <div className={dataCenterStyle.leftPic}></div>
                        <div className={dataCenterStyle.itemName}>
                            <h4> {dataItem.ItemName}</h4>
                        </div>
                        <div className={dataCenterStyle.contract}>
                            <h4> 合同编号：{dataItem.ContractNum}</h4>
                        </div>
                    </div>
                    <div className={dataCenterStyle.rightInfo}>
                        <img alt=""  src={dataItem.DDSSrc} className={dataCenterStyle.dbSSrc} />
                        <h3>{dataItem.ItemName} </h3>
                        <h3>
                            <button className={dataCenterStyle.type1Style}>{dataType.type1}</button>
                        </h3>
                        <h4>{dataItem.ApplicationScenario}</h4>
                        <h3>{dataItem.ContractNum}</h3>
                        <h3>{dataItem.DataSources}</h3>
                    </div>
                </div>
                <div className={dataCenterStyle.productInfo}>
                    <div><h2>基本信息</h2></div>
                    <h3>产品名称: {dataItem.ItemName}</h3>
                    <h3>数据来源: {dataItem.DataSources}</h3>
                    <h3> 一级数据类型: {dataType.type1}</h3>
                    <h3>二级数据类型: {dataType.type2}</h3>
                    <h3>协议编码: {dataItem.AgreementNum}</h3>
                    <h3>合同编号: {dataItem.ContractNum}</h3>
                    <h3> 产品描述: {dataItem.Description}</h3>
                    <h3>关键词: {dataItem.KeyWords}</h3>
                </div>
                <div className={dataCenterStyle.dataDemo}>
                    <div><h2>使用案例</h2></div>
                    <h3> 1、网络应收贷、网络预付贷、电子保函等业务今昔大数据风险检验<br/>
                        2、对工产品放款环节进行校验。
                    </h3>
                </div>
                <div className={dataCenterStyle.descItem}>
                    <div><h2>物理信息</h2></div>
                    <h3>接入方式:{dataItem.AccessMode}</h3>
                    <h3>下游系统:{dataItem.FollowSys}</h3>
                    <h3>下游业务:{dataItem.FollowBuss}</h3>
                </div>
            </div>
        </>
    )
    };
export default DetailContent;