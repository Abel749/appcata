import React, {useEffect} from 'react';
import {Col, Row} from 'antd';
import * as echarts from 'echarts';
import exTaDaStyle from "../../styles/extada.module.css";

let myChart1 =null;
let myChart2 =null;

const ExtDataCoverage = (props) => {


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
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel:{
                        interval:0,
                        rotate:30,
                    },
                    data: ['个人信贷', '授权管理', '资金运营', '内控合规', '普惠金融', '交易银行', '信用审计','审计','风险管理','公司金融','理债业务','同业金融'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    name: '数据使用个数',
                    type: 'bar',
                    barWidth: '60%',
                    color:'#036ED6',
                    data: [120, 200, 150, 80, 70, 110, 130,55,66,77,88,99],
                }
            ]
        };
        myChart1.setOption(option1);

        //
        myChart2 = echarts.init(document.getElementById('myChart2'));
        let option2 = {
                tooltip: {
                    trigger: 'item'
                },
/*                legend: {
                    top: '5%',
                    left: 'center'
                },*/
                series: [
                    {
                        name: '数据覆盖率',
                        type: 'pie',
                        radius: ['70%', '80%'],
                        avoidLabelOverlap: false,
                        color:'#036ED6',
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 89, name: '总行部门' },
                            { value: 11, name: '分行部门' }
                        ]
                    }
                ]
        };
        myChart2.setOption(option2);

    }, []);// eslint-disable-line

    return (
        <div >
            <div className={exTaDaStyle.baseCard}>
                <h1 className={exTaDaStyle.titleH1}>数据覆盖</h1>
                <h3 className={exTaDaStyle.titleH2}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据</h3>
                <Row>
                    <Col>总行部门</Col>
                    <Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Col>
                    <Col>分行部门</Col>
                </Row>
                <div className={exTaDaStyle.externalData03}>
                    <div id="myChart1"  ref = {myChart1} className={exTaDaStyle.dataLeft}></div>
                    <div id="myChart2"  ref = {myChart2} className={exTaDaStyle.dataRight}></div>
                </div>

            </div>
        </div>
    )
};

export default ExtDataCoverage;
