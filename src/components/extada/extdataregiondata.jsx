import React, {useEffect} from 'react';
import china from "../../pages/api/china.js"
import exTaDaStyle from "../../styles/extada.module.css";
import * as echarts from 'echarts';

let myChart3 =null;

const ExtDataReGinData = () => {


    useEffect(() => {

        let dataChart3 = [
            {
                name: "南海诸岛",
                value: 0
            },
            {
                name: "北京",
                value: 99
            },
            {
                name: "天津",
                value: 89
            },
            {
                name: "上海",
                value: 92
            },
            {
                name: "重庆",
                value: 59
            },
            {
                name: "河北",
                value: 77
            },
            {
                name: "河南",
                value: 78
            },
            {
                name: "云南",
                value: 22
            },
            {
                name: "辽宁",
                value: 67
            },
            {
                name: "黑龙江",
                value: 55
            },
            {
                name: "湖南",
                value: 81
            },
            {
                name: "安徽",
                value: 82
            },
            {
                name: "山东",
                value: 93
            },
            {
                name: "新疆",
                value: 12
            },
            {
                name: "江苏",
                value: 98
            },
            {
                name: "浙江",
                value: 99
            },
            {
                name: "江西",
                value: 36
            },
            {
                name: "湖北",
                value: 82
            },
            {
                name: "广西",
                value: 33
            },
            {
                name: "甘肃",
                value: 37
            },
            {
                name: "山西",
                value: 59
            },
            {
                name: "内蒙古",
                value: 55
            },
            {
                name: "陕西",
                value: 58
            },
            {
                name: "吉林",
                value: 67
            },
            {
                name: "福建",
                value: 81
            },
            {
                name: "贵州",
                value: 53
            },
            {
                name: "广东",
                value: 98
            },
            {
                name: "青海",
                value: 44
            },
            {
                name: "西藏",
                value: 45
            },
            {
                name: "四川",
                value: 75
            },
            {
                name: "宁夏",
                value: 4
            },
            {
                name: "海南",
                value: 22
            },
            {
                name: "台湾",
                value: 0
            },
            {
                name: "香港",
                value: 5
            },
            {
                name: "澳门",
                value: 22
            }
        ];

        let option3 = {
            tooltip: {
                triggerOn: "mousemove",
                padding:8,
                borderWidth:1,
                borderColor:'#409eff',
                backgroundColor:'#green',
                textStyle:{ color:'#white', fontSize:13 },
                formatter: function(e) {
                    let data = e.data;
                    let showName = data.name + "银行";
                    let showValue = data.value;
                    let infoContent = "数据质量良好";
                    if(data.value >=100){ infoContent = "数据质量中等"; };
                    if(data.value >=1000 ){ infoContent = "数据质量差"; };
                    let context = "<div> " +
                        " <p><b style='font-size:15px;color: #4F9AE2'>"+showName+"</b></p>" +
                        " <p style='font-size:15px;color: #4F9AE2'> "+ infoContent+": </span><span style='font-size:15px;color: #4F9AE2'>"+showValue+"</span></p>" +
                        " </div>";
                    return context;
            },
            },
            visualMap: {
                show:true,
                left: 540,
                bottom: 570,
                showLabel:true,
                pieces: [
                    {
                        lt:60,
                        label: "数据资产差",
                        color: "#CDE2F7",
                    },
                    {
                        gte: 60,
                        lt:80,
                        label: "数据资产中等",
                        color: "#5FBC29",
                    },
                    {
                        gte: 80,
                        label:'数据资产良好',
                        color: "#01B3CA",

                    }
                ]
            },
            geo: {
                map: "china",
                scaleLimit: {
                    min: 1,
                    max: 2
                },
                zoom: 1,
                top: 2,
                label: {
                    normal: {
                        show:true,
                        fontSize: "14",
                        color:'white'
                    }
                },
                itemStyle: {
                    normal: { borderColor: '#33ccff' },
                    emphasis: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [
                {
                    name: "区域覆盖率",
                    type: "map",
                    geoIndex: 0,
                    data:[]
                }
            ],
            dataList: dataChart3  ,
        };
        option3.series[0]['data'] = dataChart3;
        myChart3 = echarts.init(document.getElementById('myChart3'));
        myChart3.setOption(option3);

    }, []);// eslint-disable-line

    return (
        <div className={exTaDaStyle.baseCard}>
            <h1 className={exTaDaStyle.titleH1}>区域数据</h1>
            <h3 className={exTaDaStyle.titleH2}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据</h3>
            <div id="myChart3"  ref = {myChart3}  className={exTaDaStyle.extData05}>
            </div>
        </div>
    )
};

export default ExtDataReGinData;
