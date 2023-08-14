import React,{ useState, useEffect } from 'react';
import axios from "axios";
import {List,  Row} from 'antd';
import Link from "next/link";
import config from "../../next.config";
import newsStyle from "../styles/news.module.css";
import researchStyle from "../styles/research.module.css";

const data = [];

const ActiveContent = (props) => {

    const [reports, setReports] = useState(data);
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');

    useEffect(() => {
        changeType4();
    }, []);

    const getReports = async (type) => {

        let baseUrl = config.baseUrl.Url + 'api/reports?filters[type][$eq]=' + type + '&pagination[page]=1&pagination[pageSize]=3&sort[id]=desc';
        const result = await axios(
            baseUrl
        ).then((res) => {
            if (null != res.data) {
                const data = res.data.data.map((item) => {
                    let dateArr = item.attributes.publishedAt.split('T');
                    item.attributes.publishedAt = dateArr[0];
                    item.attributes.id = item.id;
                    item.attributes.linkUrl = '/researchDetail?researchDetailId=' + item.id;
                    return item.attributes;
                })
                setReports(data);
            }
        });
    }
    const changeType4 = () =>{
        getReports('4').then(()=>{
            document.getElementById("reportClassH1").style.color="#358BDE";
            document.getElementById("reportClassH2").style.color="black";
        });
    }
    const changeType5 = () =>{
        getReports('5').then(()=>{
            document.getElementById("reportClassH1").style.color="black";
            document.getElementById("reportClassH2").style.color="#358BDE";
        });
    }


    return (
        <>
            <div className={newsStyle.imageDivStyle}></div>
            <h1 className={newsStyle.title}>活动</h1>
            <div className={newsStyle.contentStyle}>
                <button id="reportClassH1" onClick={changeType4} className={researchStyle.resButton}>博后沙龙动态</button>
                <button id="reportClassH2" onClick={changeType5} className={researchStyle.resButton}>调研动态</button>
            </div>
            <div className={newsStyle.contentStyle}>
                <div  className={newsStyle.div}>
                      <List pagination={{ position, align,defaultPageSize:5 } }
                            grid={{ gutter: 10, column: 1, }}
                            dataSource={reports}
                            renderItem={(item) => (
                              <List.Item >
                                  <Link href={item.linkUrl}>
                                      <div className={newsStyle.list}>
                                          <div className={newsStyle.left}>
                                              <img src={item.picUrl} className={newsStyle.img} alt="" />
                                          </div>
                                          <div className={newsStyle.right}>
                                              <Row >
                                                  <p className={newsStyle.row1}>
                                                      {item.title}
                                                  </p>
                                                  <p className={newsStyle.row2}>
                                                      {item.synopsis}
                                                  </p>
                                                  <p className={newsStyle.row3}>
                                                      {item.publishedAt}
                                                  </p>
                                              </Row>
                                          </div>
                                      </div>
                                  </Link>
                              </List.Item>
                          )}
                    />
                </div>
            </div>
        </>
    )

}
export default ActiveContent;