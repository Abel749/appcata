import React, {useEffect} from 'react';
import {Col, Row} from 'antd';
import * as echarts from 'echarts';
import dataStandStyle from "../../styles/Datastand.module.css";

let myChart1 =null;

const DataStandCoverage = (props) => {


    useEffect(() => {
        myChart1 = echarts.init(document.getElementById('myChart1'));
        let option1 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                color: '#036ED6',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel:{
                        interval:0,
                        rotate:30,
                    },
                    color: '#036ED6',
                    data: ['风险管理部','个人信贷部','公司金融部','机构金融部','计划财务部','交易银行部','理债业务部','零售金融部','内控合规部','普惠金融部','人力资源部','授信管理部','数据资源部','私人银行部','同业金融部','投资银行部','信用审批部','运营管理部','资产负债管理部','资产管理部','资金运营中心','发展战略部',
                    ],
                        axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '数据使用个数',
                    type: 'bar',
                    barWidth: '60%',
                    color: '#036ED6',
                    data: [36,234,61,9,37,102,23,179,3,39,32,100,65,1,7,16,8,118,47,65,12,11],
                }
            ]
        };
        myChart1.setOption(option1);

    }, []);// eslint-disable-line

    return (
        <div >
            <div className={dataStandStyle.baseCard}>
                <h1 className={dataStandStyle.titleH1}>部门标准数据归属</h1>
                <Row>
                    <Col>总行部门</Col>
                </Row>
                <div className={dataStandStyle.externalData03}>
                    <h3>数据归属</h3>
                    <div id="myChart1"  ref = {myChart1} className={dataStandStyle.dataLeft}></div>
                </div>

            </div>
        </div>
    )
};

export default DataStandCoverage;
