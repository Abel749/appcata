import React, {useEffect, useState} from 'react';
import researchStyle from '../../styles/research.module.css';
import {Col, List, Row} from "antd";
import config from "../../../next.config";
import axios from "axios";
import Link from "next/link";

const data = [];
const obj1 = {};
const obj2 = {};

const Notice= () => {

    const [reports, setReports] = useState(data);
    const [active1, setActive1] = useState(obj1);
    const [active2, setActive2] = useState(obj2);

    const getReports = async (type) => {

        let baseUrl = config.baseUrl.Url + 'api/reports?filters[type][$eq]='+type+'&pagination[page]=1&pagination[pageSize]=3&sort[id]=desc';
        const result = await axios(
            baseUrl
        ).then((res)=>{
            if( null != res.data){
                const data = res.data.data.map((item) => {
                    item.attributes.id = item.id;
                    return item.attributes;
                })
                if(null != data && data.length >0 ){
                    document.getElementById("changeReportPic").src = data[0].picUrl;
                }
                setReports(data);
            }
        });
    };

    const getActive =  (type) => {
        let baseUrl = config.baseUrl.Url + 'api/reports?filters[type][$eq]='+type+'&pagination[page]=1&pagination[pageSize]=1&sort[id]=desc';
        const result =  axios(
            baseUrl
        ).then((res)=>{
            if( null != res.data){
                const data = res.data.data.map((item) => {
                    let date = item.attributes.publishedAt;
                    let dateArr = date.split('T');
                    item.attributes.publishedAt = dateArr[0];
                    item.attributes.id = item.id;
                    return item.attributes;
                })
                if( 4 == type && data.length >0){
                    setActive1(data[0]);
                }
                if( 5 == type && data.length >0){
                    setActive2(data[0]);
                }
            }
        });

    };

    const changeType1 = () =>{
        getReports('1').then(()=>{
            document.getElementById("reportClassH1").style.color="#358BDE";
            document.getElementById("reportClassH2").style.color="black";
        });
    }
    const changeType2 = () =>{
        getReports('2').then(()=>{
            document.getElementById("reportClassH1").style.color="black";
            document.getElementById("reportClassH2").style.color="#358BDE";
        });
    }

    useEffect(() => {
        changeType1();
        getActive(4);
        getActive(5);
    }, []);// eslint-disable-line

    return (
        <div>

            <div className={researchStyle.baseCard}>
                <Row >
                    <Col span='24'>
                        <h1>安全管理公告</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={researchStyle.baseBox1} onClick={changeType1}>
                        <h3 id="reportClassH1">公告通知</h3>
                    </div>
                    <div className={researchStyle.baseBox2} onClick={changeType2}>
                        <h3 id="reportClassH2">资源下载</h3>
                    </div>
                </Row>
                <Row>
                    <div className={researchStyle.msgLeft}>
                        <img src='/extData/externalData_20.png' id = "changeReportPic" className={researchStyle.reportPic} alt=""/>
                    </div>
                    <div className={researchStyle.msgRight}>
                        <List dataSource={reports}
                            grid={{ column: 1 }}
                            renderItem={(item) => (
                                    <List.Item >
                                        <Link href="/researchList">
                                            <Row className={researchStyle.rightRow1} >
                                                <p>{item.title}</p>
                                            </Row>
                                            <Row className={researchStyle.rightRow2} >
                                             <p>{item.synopsis}</p>
                                            </Row>
                                        </Link>
                                    </List.Item>
                                )}
                            />
                    </div>
                </Row>
            </div>
            <Link href="/activeList">
                <div className={researchStyle.button} >查看更多</div>
            </Link>
        </div>
    )
};
export default Notice;