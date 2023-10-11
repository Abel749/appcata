import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { List} from 'antd';
import indexStyle from '../../styles/Index.module.css';
import config from "../../../next.config";

const linkToBlood =  (id) => {
    if("container3"== id){
        window.open(config.baseUrl.Url3);
    }
}
const data = [];

const Content2 = (props) => {

    const [dataItem, setDataItem] = useState(data);
    useEffect(() => {
        const dataItem = [    {
            id:'container1',
            name:'外部数据',
            bgUrl:'/index/u112_state0.png',
            linkUrl:'/extdata',
        },
            {
                id:'container2',
                name:'恒丰智网',
                bgUrl:'/index/u119_state0.png',
                linkUrl:'/hfzw',
            },
            {
                id:'container3',
                name:'数据治理',
                bgUrl:'/index/u126_state0.png',
                linkUrl:'#',
            },
            {
                id:'container4',
                name:'数据安全',
                bgUrl:'/index/u133_state0.png',
                linkUrl:'/errorpage',
            },
            {
                id:'container5',
                name:'数据标准',
                bgUrl:'/index/u137_state0.png',
                linkUrl:'/datastand',
            },];
        setDataItem(dataItem);

    }, []);// eslint-disable-line
    return (
        <div className={indexStyle.content2}>
            <h1>产品中心</h1>
            <h2>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据</h2>
            <List
                  grid={{ column: 5}}
                  dataSource={dataItem}
                  renderItem={(item) => (
                      <List.Item>
                          <div className={indexStyle.container}>
                              <div className={indexStyle.container}>
                                  <img src={item.bgUrl} alt="image"/>
                              </div>
                              <h3>{item.name}</h3>
                              <div className={indexStyle.outDivShow}>
                                  <Link href={item.linkUrl} onClick={linkToBlood.bind(this, item.id)} >
                                      <div>
                                          <h4>{item.name}</h4>
                                          <button className={indexStyle.outButton}>了解更多</button>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </List.Item>
                  )}
            />
        </div>
    )
};

export default Content2;
