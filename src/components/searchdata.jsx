import React, {useEffect, useState} from "react";
import searchDataStyle from "../styles/searchdata.module.css";
import dataCenterStyle from "../styles/dataCenter.module.css";
import {Input, List} from "antd";
import config from "../../next.config";
import axios from "axios";
import Link from "next/link";
import {Row,Col } from 'antd';
const { Search } = Input;

const data = [];

const SearchData = (props) => {

    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    const [dataItem, setDataItem] = useState(data);

    const onSearch = async (value) => {
        console.log(value);
        if(undefined == value || value.toString().length <1){
            alert("请输入关键词");
            return;
        }
        getData(value).then();
    };
     useEffect(  () => {
         document.getElementById("banner").style.height ='500px';
         document.getElementById("searchData").style.marginTop ='180px';
         document.getElementById("searchData").style.height ='220px';
         linkToSearch().then();
    }, []);// eslint-disable-line

    const linkToSearch = async () => {
        let url = window.location.href.toString();
        if(url.indexOf('searchCode') > 0) {
            let arr = url.split('=');
            let searchCode = arr[1];
            getData(searchCode).then();
        }

    };

    const getDate = (timestamp) =>{
        let date = new Date(timestamp);
        let YY = date.getFullYear() + '-';
        let DD = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + "-";
        let dd = date.getDate() + ' ';
        /* let hh = date.getHours() + ':';
        let mm = date.getMinutes() + ':';
        let ss = date.getSeconds();
        return YY + DD + dd + hh + mm + ss;*/
        return YY + DD + dd;
    }

    const getData = async (value) => {
        let baseUrl = config.baseUrl.Url + 'api/fuzzy-search/search?query='+value;
        const result = await axios(
            baseUrl
        );
        const searchItems = result.data.items.map((item) => {
            const data = {
                field1: '/datadetail?itemId=' + item.id,
                field2: '数据产品',
                field3: item.ItemName,
                field4: item.ApplicationScenario,
                field5: item.DataSources,
            }
            return data;
        })

        const searchNews = result.data.newcontent.map((item) => {
            const dataItem = {
                field1: '/newsdetail?newsContentId=' + item.id,
                field2: '新闻资讯',
                field3: item.newTitle,
                field4: item.synopsis,
                field5: getDate(item.publishedAt),
            }
            return dataItem;
        })

        const dataCommon = searchItems.concat(searchNews);

        if(dataCommon.length>0){
            document.getElementById("banner").style.height ='300px';
            document.getElementById("searchData").style.marginTop ='0px';
            document.getElementById("searchData").style.height ='100%';
        }else{
            document.getElementById("banner").style.height ='400px';
            document.getElementById("searchData").style.marginTop ='80px';
            document.getElementById("searchData").style.height ='220px';
        }
        setDataItem(dataCommon);
    }

    return (
        <>
            <div className={searchDataStyle.baseDiv}>
                <div id = "banner" className={dataCenterStyle.banner}> </div>
                <div className={dataCenterStyle.bannerBox}>
                    <h3 className={dataCenterStyle.titleT3}>恒必应</h3>
                    <Search placeholder="按品牌名称或关键词搜索" id ="searchInput" onSearch={onSearch} enterButton  />
                    <p> 关键字推荐:</p>
                    <p> 身份识别、金融信贷、风险监控、风控核验、客户营销、精准获客、惠金融信用评估、避险产品、金融产品、保险、风险预警</p>
                </div>
            </div>
            <div id = "searchData" className={searchDataStyle.searchData}>
                <List pagination={{ position, align,defaultPageSize:16 } }
                      grid={{ gutter: 10, column: 1, }}
                      dataSource={dataItem}
                      className={searchDataStyle.list}
                      renderItem={(item) => (
                          <Row className={searchDataStyle.row}>
                              <Col span={2} className={searchDataStyle.col}>
                                  <h3>{item.field2}</h3>
                              </Col>
                              <Col span={4} className={searchDataStyle.col}>{item.field3}</Col>
                              <Col span={12} className={searchDataStyle.col}>{item.field4}</Col>
                              <Col span={4} className={searchDataStyle.col}>{item.field5}</Col>
                              <Col span={2} className={searchDataStyle.col}>
                                  <Link href = {item.field1} >查看详情</Link>
                              </Col>
                          </Row>
                      )}
                />
            </div>
        </>
    )
}
export default SearchData;