import React from 'react';
import { Card,List } from 'antd';
import AppCard from '../components/appcard';

const Content1 = () => {
  
  const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  
  ];
  

  
 
  
  
  return (
  <>
  
  

  <List
    grid={{
      gutter: 10,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title} style={{width:290}}>Card content</Card>
      </List.Item>
    )}
  />

  </>
);
  
};


export default Content1;
