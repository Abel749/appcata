import {List,  Row} from 'antd';
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import config from "../../next.config";
import axios from "axios";
import newsStyle from "../styles/news.module.css";

const data = [];

const NewsContent = (props) => {

        const [NewsData, setNewsData] = useState(data);
        const [position, setPosition] = useState('bottom');
        const [align, setAlign] = useState('center');

        useEffect(() => {
            getNewsDetail().then();
        }, []);

        const getNewsDetail = async () => {
            let detailUrl =config.baseUrl.Url + 'api/newcontent?pagination[page]=1&pagination[pageSize]=100&sort[id]=desc';
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
                <div className={newsStyle.contentStyle}>
                    <div className={newsStyle.imageDivStyle}>
                        <h1 className={newsStyle.title}>新闻资讯</h1>
                    </div>
                    <div  className={newsStyle.div}>
                          <List pagination={{ position, align,defaultPageSize:5 } }
                                grid={{ gutter: 10, column: 1, }}
                                dataSource={NewsData}
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
                                                          {item.newTitle}
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
export default NewsContent;