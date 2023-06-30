import React from "react";
import { useState, useEffect } from 'react';
import newsCardStyles from '../styles/newsCard.module.css';
import {List, Row } from "antd";
import Link from "next/link";
import config from "../../next.config";
import axios from "axios";

const data = [];
const urlImg = '/u215.png';
const newsData = [{ newTitle :'', synopsis:'', picUrl:''}];

const MainLogo = () =>
{
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');

    const [newsData, setNewsData] = useState(data);
    const [imgUrl, setImgUrl] = useState(urlImg);

    useEffect(() => {
        getNewsDetail().then();

    }, []);

    const getNewsDetail = async () => {

        let detailUrl = config.baseUrl.Url + 'api/newcontent?pagination[page]=1&pagination[pageSize]=3';
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

    <div className={newsCardStyles.dev0}>
        <h1 className={newsCardStyles.hh1}> 新闻咨询</h1>
        <div>
            <div className={newsCardStyles.left}>
                <img src={imgUrl} className={newsCardStyles.img} alt=""/>
            </div>
          <div className={newsCardStyles.right}>
              <List
                    dataSource={newsData}
                    renderItem={(item) => (
                        <List.Item className={newsCardStyles.list} >
                            <Link href={item.linkUrl}>
                                <Row >
                                    <Row className={newsCardStyles.row1} >
                                        <h3> {item.newTitle}</h3>
                                    </Row>
                                    <Row className={newsCardStyles.row2} >
                                        <span> {item.synopsis}</span>
                                    </Row>
                                    <Row className={newsCardStyles.row3} >
                                        <span>{item.publishedAt}</span>
                                    </Row>
                                </Row>
                            </Link>
                        </List.Item>
                    )}
              />
              <Link href="/newslist">
                  <div className={newsCardStyles.button} >查看更多</div>
              </Link>
            </div>
        </div>
    </div>
    )
};

export default MainLogo;