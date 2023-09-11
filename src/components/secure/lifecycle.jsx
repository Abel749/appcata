import React, {useEffect, useState} from 'react';
import researchStyle from '../../styles/research.module.css';
import {Col, List,Table, Row,Tag ,Space } from "antd";
import config from "../../../next.config";
import axios from "axios";
import Link from "next/link";
import indexStyle from "../../styles/index.module.css";

const columns = [
    {
        title: '脱敏规则编号',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '技术脱敏规则',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '规则类型',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '主要敏感数据类型',
        dataIndex: 'filed1',
        key: 'filed1',
    },
    {
        title: '主要敏感数据示例',
        dataIndex: 'filed2',
        key: 'filed2',
    },
    {
        title: '访问策略',
        dataIndex: 'filed3',
        key: 'filed3',
    },

];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        filed1: 'New York No. 1 Lake Park',
        filed2: 'New York No. 1 Lake Park',
        filed3: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        filed1: 'New York No. 1 Lake Park',
        filed2: 'New York No. 1 Lake Park',
        filed3: 'New York No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        filed1: 'New York No. 1 Lake Park',
        filed2: 'New York No. 1 Lake Park',
        filed3: 'New York No. 1 Lake Park',
    },
];

const LifeCycle= () => {

    const changePic1 = () =>{
        document.getElementById("dataShare1").style.borderBottom="2px solid#358BDE";
        document.getElementById("dataShare2").style.borderBottom="none";

        document.getElementById("dataShareH1").style.color="#358BDE";
        document.getElementById("dataShareH2").style.color="black";

    }
    const changePic2 = () =>{
        document.getElementById("dataShare1").style.borderBottom="none";
        document.getElementById("dataShare2").style.borderBottom="2px solid#358BDE";

        document.getElementById("dataShareH1").style.color="black";
        document.getElementById("dataShareH2").style.color="#358BDE";
    }

    useEffect(() => {
        changePic1();
    }, []);// eslint-disable-line


    return (
        <div className={indexStyle.baseCard}>
            <h1>数据生命周期安全管理</h1>
            <h2>数据脱敏与加密规则</h2>
            <Row>
                <Col className={indexStyle.baseBox1} onClick={changePic1}  id="dataShare1">
                        <h3 id="dataShareH1">通用规则</h3>
                </Col>
                <Col className={indexStyle.baseBox2} onClick={changePic2} id="dataShare2">
                        <h3 id="dataShareH2">专业规则</h3>
                </Col>
            </Row>
            <Row>
                <div className={indexStyle.dataShareBase}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </Row>
        </div>
    )

};
export default LifeCycle;