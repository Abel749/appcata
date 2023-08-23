import React, {useEffect} from 'react';
import {Col, Row} from 'antd';
import * as echarts from 'echarts';
import dataStandStyle from "../../styles/datastand.module.css";

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
                    color: '#036ED6',
                    data: ['办公室', '董事会办公室', '风险管理部', '公司金融部', '机构金融部', '计划财务部','交易银行部', '金融科技部','多部门','理债业务部','零售金融部','内控合规部','人力资源部','授信管理部','私人银行部','同业金融部','投资银行部','运营管理部','资金运营中心','投资负债管理类部','投资管理部'],
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
                    data: [11, 23, 34, 45, 56, 67, 78,89,91,5,88,77,65,54,47,38,28,18,9,22,66],
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
