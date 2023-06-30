import {List,  Row,Col} from 'antd';
import newsContentStyles from "../styles/newsContent.module.css";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import config from "../../next.config";
import axios from "axios";
import newsCardStyles from "../styles/newsCard.module.css";

const imageDivStyle ={
    borderTop:'1px',
    borderTopStyle:'solid',
    background:'url(/news/news-back.png) no-repeat ',
    height: '200px',
    width: '1700px',
};

const position={bottom:'bottom'};
const align={center:'center'};

const data = [];


const NewsContent = () => {
    {
        const [NewsData, setNewsData] = useState(data);

        useEffect(() => {
            getNewsDetail().then();

        }, []);


        const getNewsDetail = async () => {
            let detailUrl =config.baseUrl.Url + 'api/newcontent?pagination[page]=1&pagination[pageSize]=100';
            let result = await axios(
                detailUrl
            );
            let data = result.data.data.map((item) => {
                let dateArr = item.attributes.publishedAt.split('T');
                item.attributes.publishedAt = dateArr[0];
                item.attributes.id = item.id;
                item.attributes.linkUrl = '/newsdetail?newsContentId=' + item.id;
                return item.attributes;
            });
            setNewsData(data);
        };


        return (
            <>
                <div style={imageDivStyle}>
                    <h1 style={{marginTop:'120px',marginLeft:'200px', fontSize:'35px'}}> 新闻资讯</h1>
                </div>
                <div style={{marginTop:'20px'}}>

                    <List pagination={{ position, align,defaultPageSize:3 } }
                          grid={{ gutter: 10, column: 1, }}
                          dataSource={NewsData}
                          renderItem={(item) => (
                              <List.Item >
                                  <div className={newsContentStyles.list}>
                                      <Row>
                                          <Col>
                                              <div className={newsContentStyles.left}>
                                                  <img src={item.picUrl} className={newsCardStyles.img} alt=""/>
                                              </div>
                                          </Col>
                                          <Link href={item.linkUrl}>
                                              <Col>
                                                  <div className={newsContentStyles.right}>
                                                      <Row >
                                                          <Row className={newsContentStyles.row1}>
                                                              <h3> {item.newTitle}</h3>
                                                          </Row>
                                                          <Row className={newsContentStyles.row2}>
                                                              <span> {item.synopsis}</span>
                                                          </Row>
                                                          <Row className={newsContentStyles.row3}>
                                                              <span>{item.publishedAt}</span>
                                                          </Row>
                                                      </Row>
                                                  </div>
                                              </Col>
                                          </Link>
                                      </Row>
                                  </div>
                              </List.Item>
                          )}
                    />
                </div>

            </>
        )
    }
}
export default NewsContent;