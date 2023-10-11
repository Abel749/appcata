import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import config from "../../../next.config";
import dataCenterStyle from '../../styles/DataCenter.module.css';
import searchDataStyle from "../../styles/Searchdata.module.css";
import dataStandStyle from "../../styles/Datastand.module.css";
import {Input, List} from "antd";
const { Search } = Input;

const data =[];
const type =[];
const DetailStandContent = (props) =>
    {
        const [dataItem, setDataItem] = useState(data);
        const [dataType, setDataType] = useState(type);

        useEffect(() => {
            getItemDetail().then((res)=>{
                document.getElementById("downLoadCodeTable").style.display="none";
                if(null != res && "代码类"  == res.category){
                    document.getElementById("downLoadCodeTable").style.display="block";
                }
            });

        }, []);

        const getItemDetail = async () => {
            let detailUrl = window.location.href.toString();
            if(detailUrl.indexOf('itemId') >0){
                let arr = detailUrl.split('=');
                detailUrl = config.baseUrl.Url +"api/stands/"+arr[1]+"?populate=*";
            }
            const result = await axios(
                detailUrl
            );
            const dataDetail = result.data.data.attributes;
            const itemType = result.data.data.attributes.theme.data.attributes;
            setDataItem(dataDetail);
            setDataType(itemType);
            return dataDetail;
        };

        const onSearch = async (value) => {
            console.log(value);
            let baseUrl = config.baseUrl.Url2 + 'searchpage?searchCode='+ value;
            window.location.href= baseUrl;
        };
        const  downLoadCodeTable = async () => {
            let downUrl = config.baseUrl.Url + 'uploads/2_8a55a9ce0d.xlsx';
            window.open(downUrl);
        }


return (
        <>
            <div className={searchDataStyle.baseDiv}>
                <div id = "banner" className={dataCenterStyle.banner}></div>
                <div className={dataCenterStyle.bannerBox}>
                    <h3 className={dataCenterStyle.titleT3}>恒必应</h3>
                    <Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton  />
                </div>
            </div>
            <div className={dataCenterStyle.itemDetailBase}>
                <h1 className={dataStandStyle.titleHH1}>标准数据</h1>
                <div className={dataStandStyle.descItem}>
                    <div className={dataStandStyle.descItemDiv2}>
                        <p style={{fontSize:"18px"}}><span>标准中文名称:{dataItem.name} </span></p>
                        <p>{dataItem.englishName}</p>
                        <button style={{backgroundColor:"#036ED6",color:"white"}}>{dataType.name}</button> &nbsp;&nbsp;<button>{dataType.subjectName1}</button>
                        <p>{dataItem.def}</p>
                        <p>归属部门:{dataItem.dept}</p>
                    </div>
                </div>
                <div className={dataStandStyle.descItem}>
                    <div className={dataStandStyle.descItemDiv1}>
                        <h2>基本属性</h2>
                    </div>
                    <div className={dataStandStyle.descItemDiv2}>
                        <p><span>数据标准编号:</span> {dataItem.code}</p>
                        <p><span>标准主题:</span> {dataType.name}</p>
                        <p><span>标准大类: </span>{dataType.subjectName1}</p>
                        <p><span>标准子类: </span>{dataType.subjectName2}</p>
                        <p><span>标准中文名称: </span>{dataItem.name}</p>
                        <p><span>标准英文名称: </span>{dataItem.englishName}</p>
                        <p><span>标准别名: </span>{dataItem.alias}</p>
                        <p><span>归属部门: </span>{dataItem.dept}</p>
                        <p><span>对应EAST数据项: </span>{dataItem.eastItem}</p>
                        <p><span>是否EAST数据标准: </span>{dataItem.eastStand}</p>
                    </div>
                </div>
                <div className={dataStandStyle.descItem}>
                    <div className={dataStandStyle.descItemDiv1}>
                        <h2>业务属性</h2>
                    </div>
                    <div className={dataStandStyle.descItemDiv2}>
                        <p><span>业务定义:</span>{dataItem.def}</p>
                        <p><span>业务规则:</span>{dataItem.rule}</p>
                        <p><span>相关标准:</span>{dataItem.rel}</p>
                        <p><span>与相关标准的关系:</span>{dataItem.relation}</p>
                        <p><span>标准依据:</span>{dataItem.basis}</p>
                    </div>

                </div>
                <div className={dataStandStyle.descItem}>
                    <div className={dataStandStyle.descItemDiv1}>
                        <h2>技术属性</h2>
                    </div>
                    <div className={dataStandStyle.descItemDiv2}>
                        <p>
                            <span>标准类别:</span>{dataItem.category}
                            <button id="downLoadCodeTable" onClick={downLoadCodeTable} style={{color:"white",backgroundColor:"#036ED6"}} >下载码值表</button>
                        </p>
                        <p><span>数据格式:</span>{dataItem.format}</p>
                        <p><span>代码编码规则:</span>{dataItem.codeRule}</p>
                        <p><span>取值范围:</span>{dataItem.radous}</p>
                    </div>
                </div>
            </div>
        </>
    )
    };
export default DetailStandContent;
