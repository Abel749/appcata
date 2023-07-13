import React from 'react';
import { Input } from 'antd';
import dataCenterStyle from '../styles/dataCenter.module.css';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const DataCenterBackground = () => (
    <div className={dataCenterStyle.baseDiv}>
        <div className={dataCenterStyle.banner}></div>
        <div className={dataCenterStyle.bannerBox}>
            <h3 className={dataCenterStyle.titleT3}> 恒必应</h3>
            <Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton className={dataCenterStyle.searchBun} />
        </div>
    </div>
);

export default DataCenterBackground;
