import {List} from 'antd';
import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';
import Link from "next/link";
import config from "../../next.config";
import exTaDaStyle from "../styles/extada.module.css";

const data =[];

const ExtDataSecondC = () => {
const [dataItem, setDataItem] = useState(data);

useEffect(() => {
    getType2().then();

}, []);

//二级数据类型初始化
const getType2 = async () => {
    let detailUrl = config.baseUrl.Url + 'api/types?pagination[page]=1&pagination[pageSize]=100';
    const result = await axios(
        detailUrl
    );
    const dataTypes = result.data.data.map((item,index) => {
        return   item.attributes;
    })
    let dataType2 =[];
    // 去除重复二级数据类型
    let dataTypeCode2 =[];
    for (let item of dataTypes) {
        let typeCode2 = item.code2;
        if(dataTypeCode2.indexOf(typeCode2) == -1 ) {
            dataTypeCode2.push(typeCode2);
            const dataTypeTemp = {
                code: item.code,
                code1: item.code1,
                code2: item.code2,
                name: item.type2,
                url: "/datacenter?secondType=" + item.code2,
            }
            //添加二级数据类型
            dataType2.push(dataTypeTemp);
        }
    }
    setDataItem(dataType2);
};

return (
    <>
        <div className={exTaDaStyle.secondData}>
            <div className={exTaDaStyle.leftClass}>
                <h1 className={exTaDaStyle.backgroundH1}>二级数据分类</h1>
                <div className={exTaDaStyle.secondBackground}></div>
            </div>
            <div className={exTaDaStyle.rightClass}>
                <List grid={{ column: 4 }}
                      dataSource={dataItem}
                      renderItem={(item) => (
                          <List.Item className={exTaDaStyle.button2} >
                              <Link href={item.url} style={{color:'#fff'}}>{item.name}</Link>
                          </List.Item>
                      )}
                />
            </div>
        </div>
    </>
)
}

export default ExtDataSecondC;
