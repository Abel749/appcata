import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = (value) => console.log(value);
const searchStyle={
    width:'450px',

}

const h0Style={
    fontSize:'22px',
    fontWeight:'600',
    color:'#fff'
}

const searchDivStyle={
    marginTop:'140px',
    marginLeft:'750px',
}

const DataCenterBackground = () => (
    <div style={searchDivStyle}>
        <h6 style={h0Style}>恒必应</h6>
        <Search placeholder="按品牌名称或关键词搜索" onSearch={onSearch} enterButton style={searchStyle} />
    </div>

);

export default DataCenterBackground;
