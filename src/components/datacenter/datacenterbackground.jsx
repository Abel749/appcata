import React from 'react';
import { Input } from 'antd';
import dataCenterStyle from '../../styles/dataCenter.module.css';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const DataCenterBackground = () => (
    <>
        <div className={dataCenterStyle.baseDiv}>
            <div className={dataCenterStyle.banner}></div>
            <div className={dataCenterStyle.bannerBox}>
                <h3 className={dataCenterStyle.titleT3}>恒必应</h3>
                <Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton  />
{/*                <p> 关键字推荐:</p>
                <p> 身份识别、金融信贷、风险监控、风控核验、客户营销、精准获客、惠金融信用评估、避险产品、金融产品、保险、风险预警</p>*/}
            </div>
        </div>
    </>
);

export default DataCenterBackground;
