import React from "react";
import { useState, useEffect } from 'react';
import newsStyle from '../styles/news.module.css';
import {List, Row } from "antd";
import Link from "next/link";
import config from "../../next.config";
import axios from "axios";

const data = [];
const urlImg = '/u215.png';
const newsData = [{ newTitle :'', synopsis:'', picUrl:''}];

const MainLogo = () =>
{
    const [newsData, setNewsData] = useState(data);
    const [imgUrl, setImgUrl] = useState(urlImg);

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
        if(data.length >0){
            setImgUrl(data[0].picUrl);
        }
    };

    return (

    <div className={newsStyle.dev0}>
        <h1 className={newsStyle.hh1}> 新闻咨询</h1>
        <div>
            <div className={newsStyle.leftDiv}>
                <img src={imgUrl} className={newsStyle.newsImg} alt=""/>
            </div>
          <div className={newsStyle.rightDiv}>
              <List dataSource={newsData}
                    renderItem={(item) => (
                        <List.Item className={newsStyle.rightList} >
                            <Link href={item.linkUrl}>
                                <Row >
                                    <p className={newsStyle.rightRow1} >
                                        {item.newTitle}
                                    </p>
                                    <p className={newsStyle.rightRow2} >
                                        {item.synopsis}
                                    </p>
                                    <p className={newsStyle.rightRow3} >
                                       {item.publishedAt}
                                    </p>
                                </Row>
                            </Link>
                        </List.Item>
                    )}
              />
              <Link href="/newslist">
                  <div className={newsStyle.button} >查看更多</div>
              </Link>
            </div>
        </div>
    </div>
    )
};

export default MainLogo;