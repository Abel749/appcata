import React from "react";
import { useState, useEffect } from 'react';
import newsStyle from '../styles/news.module.css';
import {List, Row } from "antd";
import Link from "next/link";
import config from "../../next.config";
import axios from "axios";
import indexStyle from "../styles/index.module.css";

const data = [];
const newsData = [{ newTitle :'', synopsis:'', picUrl:''}];

const MainLogo = () =>
{
    const [newsData, setNewsData] = useState(data);

    useEffect(() => {
        getNewsDetail().then();

    }, []);

    const getNewsDetail = async () => {

        let detailUrl = config.baseUrl.Url + 'api/newcontent?pagination[page]=1&pagination[pageSize]=3&sort[id]=desc';
        const result = await axios(
            detailUrl
        );
        const data = result.data.data.map((item) => {
            let date = item.attributes.publishedAt;
            let dateArr = date.split('T');
            item.attributes.publishedAt = dateArr[0];
            item.attributes.id = item.id;
            item.attributes.linkUrl = '/newsdetail?newsContentId=' + item.id;
            return item.attributes;
        })
        setNewsData(data);
    };

    return (

        <div className={indexStyle.baseCard}>
            <h1> 新闻资讯</h1>
            <List dataSource={newsData}
                 grid={{ column: 3 }}
                renderItem={(item) => (
                    <List.Item className={newsStyle.baseNews} >
                        <Link href={item.linkUrl}>
                            <Row >
                                <div className={newsStyle.newsTop} >
                                    <img src={item.picUrl}className={newsStyle.newsImg} alt=""/>
                                </div>
                                <div className={newsStyle.newsBottom} >
                                    <p className={newsStyle.newsRow1} >
                                        {item.newTitle}
                                    </p>
                                    <p className={newsStyle.newsRow2} >
                                        {item.synopsis}
                                    </p>
                                    <p className={newsStyle.newsRow3} >
                                       {item.publishedAt}
                                    </p>
                                </div>
                            </Row>
                        </Link>
                    </List.Item>
                )}
            />
            <Link href="/newslist">
                <div className={newsStyle.button} >查看更多</div>
            </Link>
        </div>
    )
};

export default MainLogo;