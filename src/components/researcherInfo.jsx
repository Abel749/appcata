import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import config from "../../next.config";
import researchStyle from '../styles/research.module.css';
import newsStyle from "../styles/news.module.css";

const data =[];
const ResearcherInfo = (props) =>
    {
        const [rsearcher, setResearcher] = useState(data);
        useEffect(() => {
            getItemDetail();

        }, []);

        const getItemDetail = async () => {
            let detailUrl = window.location.href.toString();
            if(detailUrl.indexOf('researcherId') >0){
                let arr = detailUrl.split('=');
                detailUrl = config.baseUrl.Url +"api/researchers/"+arr[1];
            }
            const result = await axios(
                detailUrl
            );
            console.log(result.data.data.attributes);
            setResearcher(result.data.data.attributes);
        };


return (
        <>
            <div className={newsStyle.imageDivStyle}></div>

            <div className={researchStyle.itemDetailBase}>
                <h1 className={researchStyle.h1Style}>{rsearcher.Info}</h1>
                <hr/>
                <div className={researchStyle.itemDetail}>
                    <div className={researchStyle.left}>
                        <img src={rsearcher.Photo} className={researchStyle.left} />
                    </div>
                    <div className={researchStyle.right}>
                        <div><h2>{rsearcher.Info}信息</h2></div>
                        <h4>姓名:{rsearcher.Name}</h4>
                        <h4>学历:{rsearcher.Educational}</h4>
                        <h4>毕业院校:{rsearcher.GraduateSchool}</h4>
                        <div><h2>从业经验</h2></div>
                        <p>{rsearcher.WorkingExperience}</p>
                    </div>
                </div>
                <div className={researchStyle.info}>

                    <div>
                        <h2>研究方向</h2>
                    </div>
                    <p>{rsearcher.ResearchDirection}</p>

                    <div>
                        <h2>研究报告</h2>
                    </div>
                    <h3>代表性研究报告:</h3>
                    <p>{rsearcher.ResearchReport}</p>

                    <div>
                        <h2>研究项目</h2>
                    </div>
                    <p>{rsearcher.ResearchProject}</p>
                </div>
                <hr/>
            </div>
        </>
    )
    };
export default ResearcherInfo;