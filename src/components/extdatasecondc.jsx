import {Row, Col, List, Image} from 'antd';
import React from 'react';
import axios from "axios";

import { useState,useEffect } from 'react';
import styles from "../styles/extada.module.css";
import Link from "next/link";
const data =[];

const ExtDataSecondC = () => {
const [dataItem, setDataItem] = useState(data);

useEffect(() => {
    getType2();

}, []);

//二级数据类型初始化
const getType2 = async () => {
    const result = await axios(
        'http://localhost:1337/api/types',
    );
    const dataTypes = result.data.data.map((item,index) => {
        return   item.attributes;
    })
    let dataType1 =[];
    // 去除重复一级数据类型
    let dataTypeName2 =[];
    for (let item of dataTypes) {
        let code = item.code;
        let typeName2 = item.type2;
        if(dataTypeName2.indexOf(typeName2) == -1 ){
            dataTypeName2.push(typeName2);
            const dataTypeTemp = {
                code: code,
                name: typeName2,
                url: "/datacenter?secondType="+code,
            }
            //添加一级数据类型
            dataType1.push(dataTypeTemp);
        }

    }
    setDataItem(dataType1);

};

return (
    <>
        <div>
        <Row>
            <Col span={8}>
                <Image src="firstc.png" alt=""/>
            </Col>

            <Col span={16}>
                <List
                    grid={{
                        column: 3,
                    }}
                    dataSource={dataItem}
                    renderItem={(item) => (
                        <List.Item className={styles.button2} >
                            <Link href={item.url}>{item.name}</Link>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        </div>
    </>
)
}

export default ExtDataSecondC;
