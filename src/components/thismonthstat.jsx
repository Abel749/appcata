import { Card,Row } from 'antd';
import React from 'react';

const ThisMonthStat = () => (
  <Card title="本月统计" bordered={true} style={{ width: 800 }}>     
    <p>资产总数：124，345，已使用资源：54，322，剩余（个）：68，123，库存（个）68.123</p>
  </Card>
);

export default ThisMonthStat;
