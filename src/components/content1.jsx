import React from 'react';
import axios from 'axios';
import { List,Radio,Form,Row} from 'antd';
import { useState,useEffect } from 'react';
import styles from '../styles/Form.module.css';
import Image from "next/image";
import Link from "next/link";

const  firstlevelMap_temp = [{ code: '', name: ''}];
const  secondlevelMap_temp = [{ code: '', name: ''}];
const  data =[];
const   Content1 = (props) => {
  const [firstlevelMap, setFirstlevelMap] = useState(firstlevelMap_temp);
  const [secondlevelMap, setSecondlevelMap] = useState(secondlevelMap_temp);
  const [firstlevel, setFirstlevel] = useState();
  const [secondlevel, setSecondlevel] = useState();
  const [sortorder, setSortorder] = useState();
  const [keywords, setKeywords] = useState();
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState('center');
  const [dataItem, setDataItem] = useState(data);

  //一级数据类型初始化
  const getType1 = async () => {
    const result = await axios(
        'http://localhost:1337/api/types',
    );
    const dataTypes = result.data.data.map((item,index) => {
      return   item.attributes;
    })
    let dataType1 =[];
    let dataType2 =[];
    // 去除重复一级数据类型
    let dataTypeCode1 =[];
    for (let item of dataTypes) {
      let typeCode1 = item.code1;
      if(dataTypeCode1.indexOf(typeCode1) == -1 ){
        dataTypeCode1.push(typeCode1);
        const dataTypeTemp = {
          code: item.code,
          code1 : item.code1,
          code2 : item.code2,
          name : item.type1,
        }
        //添加一级数据类型
        dataType1.push(dataTypeTemp);

        //添加二级数据类型
        let firstTypeCode = dataTypes[0].code1;
        if(typeCode1 == firstTypeCode){
          const dataTypeTemp = {
            code: item.code,
            code1 : item.code1,
            code2 : item.code2,
            name : item.type2,
          }
          dataType2.push(dataTypeTemp);
        }
      }

    }
    setFirstlevelMap(dataType1);
    setSecondlevelMap(dataType2);
  };

  //根据一级类型获取二级类型
  const getType2 = async (firstlevel) => {
    if( '' != firstlevel && undefined != firstlevel){
      let url = 'http://localhost:1337/api/types?[filters][code1][$eq]=' + firstlevel;
      const result = await axios(
          url,
      );
      const dataTypes = result.data.data.map((item,index) => {
        return  item.attributes;
      })
      let dataTypeName2 =[];
      for (let item of dataTypes) {
        const dataTypeTemp = {
          code: item.code,
          code1 : item.code1,
          code2 : item.code2,
          name : item.type2,
        }
        dataTypeName2.push(dataTypeTemp);
        setSecondlevelMap(dataTypeName2);
      }
    }
  };

  //数据产品明细
  const fetchData = async (level,typeCode) => {
    let url = 'http://localhost:1337/api/items';
    if( 0 == level){
      url = url + '?populate*' ;
    }
    if(1 == level){
      url = url + '?populate[type][filters][code1][$eq]=' + typeCode;
    }
    if(2 == level){
      url = url + '?populate[type][filters][code2][$eq]=' + typeCode;
    }
    const result = await axios(
        url
    );
    const dataItems = result.data.data.map((item,index) => {
      item.attributes.id = item.id;
      return   item.attributes;
    });
    const dataList = [];
    for (let item of dataItems) {
      let  types = item.type.data;
      if( null != types){
        item.code1 = types.attributes.code1;
        item.type1 = types.attributes.type1;
        item.code2 = types.attributes.code1;
        item.type2 = types.attributes.type2;
        item.url = '/datadetail?itemId='+ item.id
        dataList.push(item);
      }
    }
    if(1 == level){
      setFirstlevel(typeCode);
    }
    if(2 == level && dataList.length >0 ){
      getType2(dataList[0].code1);
    }
    setDataItem(dataList);
  };

  useEffect(() => {

    getType1();

    let url = window.location.href.toString();
    if(url.indexOf('firstType') >0){
      let arr = url.split('=');
      let typeCode = arr[1]
      setFirstlevel(typeCode);
    } else if(url.indexOf('secondType') >0){
      let arr = url.split('=');
      let typeCode = arr[1];
      setSecondlevel( typeCode);
    }else{
      fetchData(0,null);
    }

  }, []);

  const handleKeyChange = (e) => {
    console.log(e.target.value);
  };

  //二级数据类型
  const handleSecondlevel = (e) => {
    setSecondlevel(e.target.value);
    fetchData(2,e.target.value);
  };

  //一级数据类型
  const handleFirstlevel = (e) => {
    setFirstlevel(e.target.value);
    fetchData(1,e.target.value);
  };

  useEffect( () =>{
    if( undefined != firstlevel ){
      getType2(firstlevel);
      fetchData(1,firstlevel);
    }
  },[firstlevel]);

  useEffect( () =>{
    if( undefined != secondlevel ){
      fetchData(2,secondlevel);
    }
  },[secondlevel]);

  //排序规则
  const handleSortChange = (e) => {
    console.log(e.target.value);
  };

  return (
  <>
  <Form  className={styles.form} >
      <Row className={styles.row}   >
    <label className={styles.label}> 一级数据类型:  </label>
    <Radio.Group  value={firstlevel}  onChange={handleFirstlevel}>
      {firstlevelMap.map((item)=>
          <Radio.Button key = {item.code1} value={item.code1}>{item.name}</Radio.Button>
      )}
    </Radio.Group>
      </Row>
    <Row className={styles.row}   >
      <label className={styles.label}> 二级数据类型:  </label>
      <Radio.Group value={secondlevel} onChange={handleSecondlevel}>
        {secondlevelMap.map((item)=>
            <Radio.Button  key = {item.code2} value={item.code2}>{item.name}</Radio.Button>
        )}
      </Radio.Group>
    </Row>

    <Row className={styles.row}   >
      <label className={styles.label}> 排序规则:  </label>
      <Radio.Group value={sortorder} onChange={handleSortChange}>
        <Radio.Button value="hot">最热</Radio.Button>
        <Radio.Button value="recom">推荐</Radio.Button>
        <Radio.Button value="new">最新</Radio.Button>
      </Radio.Group>
    </Row>
    <Row className={styles.row}   >
      <label className={styles.label}> 关键词:  </label>
      <Radio.Group value={keywords} onChange={handleKeyChange}>
        <Radio.Button value="identi">身份识别</Radio.Button>
        <Radio.Button value="finance">金融信贷</Radio.Button>
        <Radio.Button value="riskcon">风控核验</Radio.Button>
        <Radio.Button value="customer">客户营销</Radio.Button>
        <Radio.Button value="custmarket">精准获客</Radio.Button>
        <Radio.Button value="inclufin">普惠金融</Radio.Button>
        <Radio.Button value="credit">信用评估</Radio.Button>
        <Radio.Button value="risk">风险监控</Radio.Button>
        <Radio.Button value="hedgepro">避险产品</Radio.Button>
        <Radio.Button value="finanpro">金融产品</Radio.Button>
        <Radio.Button value="insure">保险</Radio.Button>
        <Radio.Button value="riskwarn">风险预警</Radio.Button>
      </Radio.Group>
    </Row>
    </Form>

    <List
        pagination={{ position, align }}
      grid={{
        gutter: 10,
        column: 5,
      }}
      dataSource={dataItem}
      renderItem={(item) => (
        <List.Item >
          <Link href = {item.url} >
            <div className={styles.pss} >
              <div className={styles.top}>
                <Image src="/u1418.png"  alt="" width={260} height={40} priority />
              </div>
              <div className={styles.left}>
                <Image src="/u595.png" alt="" width={80} height={240} priority />
              </div>
              <div className={styles.right}>
                <h3>{item.ItemName}</h3>
                <br/>
                <span><button>{item.type1}</button><button>{item.type2}</button></span>
                <br/>
                <text>{item.ApplicationScenario}</text>
                <br/>
                <br/>
                <p>{item.DataSources}</p>
              </div>
            </div>
          </Link>
        </List.Item>
      )}
    />

  </>
);
  
};


export default Content1;
