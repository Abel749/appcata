import React, {useEffect, useState} from 'react';
import {Carousel, Col, Row} from "antd";
import researchStyle from "../styles/research.module.css";
import config from "../../next.config";
import axios from "axios";
import Link from "next/link";
const data = [];

const Researcher = () => {
    const [researchers, setResearchers] = useState(data);
    const getResearchers =  () => {
        let baseUrl = config.baseUrl.Url + 'api/researchers?pagination[page]=1&pagination[pageSize]=100&sort[id]=ASC';
        const result =  axios(
            baseUrl
        ).then((res)=>{
            if( null != res.data){
                const data = res.data.data.map((item) => {
                    item.attributes.id = item.id;
                    item.attributes.researcherUrl = "/researcherdetail?researcherId="+item.id
                    return item.attributes;
                })
                setResearchers(data);
            }
        });

    };

    useEffect(() => {
        getResearchers();
    }, []);// eslint-disable-line
    return (
        <>
            <div className={researchStyle.baseCard}>
                <h1>研究员</h1>
                <Carousel autoplay={true}   autoplaySpeed={3000} slidesToShow={3} slidesToScroll={3} >
                    {
                        researchers.map((item,index) => {
                                return (
                                <div id = {item.id} key={index}>
                                    <div className={researchStyle.carouse}>
                                        <div className={researchStyle.top}>
                                            <img src={item.Photo} className={researchStyle.topImp}/>
                                        </div>
                                        <div className={researchStyle.bottom}>
                                            <h3>{item.Info}:{item.Name}</h3>
                                            <h4>学历:{item.Educational}</h4>
                                            <h4>研究方向:{item.ResearchDirection}</h4>
                                            <Link href={item.researcherUrl}>
                                                <button>详情</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                </Carousel>
            </div>
{/*            <div className={researchStyle.baseCard}>
                <Row >
                    <Col span='24'>
                        <h1>我的</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={researchStyle.reContext}> </div>
                </Row>
            </div>*/}
        </>

)};

export default Researcher;