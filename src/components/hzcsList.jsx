import React from 'react';
import {Carousel} from "antd";
import indexStyle from '../styles/index.module.css';

const HzCsList = () => (
    <div className={indexStyle.baseCard}>
        <h1>合作厂商</h1>
        <Carousel autoplay={true}  autoplaySpeed={3000} >
            <div>
                <img src="/index/hzcs1.png"  alt="logo" />
            </div>
            <div>
                <img src="/index/hzcs2.png"  alt="logo" />
            </div>
        </Carousel>
    </div>

);

export default HzCsList;