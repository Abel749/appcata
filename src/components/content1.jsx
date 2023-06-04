import React from 'react';
import axios from 'axios';
import { Card,List,Radio,Form,Row,Table,Avatar} from 'antd';
import { useState,useEffect } from 'react';
import styles from '../styles/Form.module.css';
const { Meta } = Card;


const  secondlevelMap_verifi = [{
  "key" : "invoice",
  "show": "发票类"
},
  {
    "key" : "idno",
    "show": "证件类"
  },
  {
    "key" : "phone",
    "show": "手机号码"
  },
  {
    "key" : "address",
    "show": "地址位置"
  },
  {
    "key" : "company",
    "show": "单位信息"
  },
  {
    "key" : "cardinfo",
    "show": "银行卡要素"
  },
  {
    "key" : "face",
    "show": "人脸"
  },
  {
    "key" : "aircraft",
    "show": "航旅"
  },
  {
    "key" : "education",
    "show": "学历类"
  }
];
const  secondlevelMap_score = [{
  "key" : "personaldebt",
  "show": "个人偿债"
},
  {
    "key" : "creditrepo",
    "show": "信用征信"
  }
];
const  secondlevelMap_label = [{
  "key" : "personalport",
  "show": "个人画像"
},
  {
    "key" : "businessport",
    "show": "企业画像"
  }
];


const  secondlevelMap_seek = [{
  "key" : "marketinfo",
  "show": "市场信息"
}
];

const  secondlevelMap_price = [{
  "key" : "vehicleinfo",
  "show": "车辆信息"
},
  {
    "key" : "propertyvalue",
    "show": "房产价值评估"
  },
  {
    "key" : "valueofcollat",
    "show": "抵押物价值评估"
  },
  {
    "key" : "warehousereceipt",
    "show": "仓单、动产质押相关信息"
  }
];

const  secondlevelMap_invest = [{
  "key" : "informatdata",
  "show": "资讯类数据"
}
];

const  secondlevelMap_regulat = [{
  "key" : "judicialdata",
  "show": "司法数据"
},
  {
    "key" : "creditreport",
    "show": "信用征信"
  },
  {
    "key" : "regulatory",
    "show": "监管处罚"
  },
  {
    "key" : "regulatdata",
    "show": "法规数据"
  },
  {
    "key" : "financialdata",
    "show": "财汇数据"
  }
];

const  secondlevelMap_govern = [{
  "key" : "accumnfund",
  "show": "公积金"
}
];

const  secondlevelMap_blacklist = [{
    "key" : "antiblacklist",
    "show": "反欺诈黑名单"
},
    {
        "key" : "creditblacklist",
        "show": "征信黑名单"
    },
    {
        "key" : "blacklistdata",
        "show": "黑名单数据"
    }
];


// const data = [
//   {
//     title: '金蝶',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"发票核验数据-金蝶征信",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '中盾安信',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"公民核验-中盾",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '通联数据',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"公民核验",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '人行征信',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"人行征信",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '公安实名验证',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"公安实名验证",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '手机号实名核验数据',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"手机号实名核验数据",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '位置核验数据-阿里云',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"位置核验数据-阿里云",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '地址核验数据-腾云',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"地址核验数据-腾云",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '朴道-京东-地址稳定性',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"朴道-京东-地址稳定性",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '单位信息核验-鹏元征信',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"单位信息核验-鹏元征信",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '单位信息核验-金保信',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"单位信息核验-金保信",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '朴道-银行卡三要素核验',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"朴道-银行卡三要素核验",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '朴道-银行卡四要素核验',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"朴道-银行卡四要素核验",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '人脸核验数据',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"人脸核验数据",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '航旅数据-中诚信',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"航旅数据-中诚信",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '航旅数据-鹏元',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"航旅数据-鹏元",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   },
//   {
//     title: '航运信息核验',
//     src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
//     name:"航运信息核验",
//     description:"核验类数据指根据客户提供的原始信息进行一致性和准确性校验的数据，主要包括学籍学历核验、发票核验、驾驶证核验等数据"
//   }
// ];
const data =[];
const   Content1 = (props) => {
console.log(props);

  //const secondlevelMap = secondlevelMap_verifi;
  const [secondlevelMap, setSecondlevelMap] = useState(secondlevelMap_verifi);
  // const [firstlevel, setFirstlevel] = useState('verifi');
  // const [secondlevel, setSecondlevel] = useState('invoice');
  // const [sortorder, setSortorder] = useState('hot');
  // const [keywords, setKeywords] = useState('identi');
  const [firstlevel, setFirstlevel] = useState();
  const [secondlevel, setSecondlevel] = useState();
  const [sortorder, setSortorder] = useState();
  const [keywords, setKeywords] = useState();
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState('center');
  const [dataobj, setDataobj] = useState(data);

useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
          'http://localhost:1337/api/cards',
      );

      const arrMap = result.data.data.map((item,index) => {
        return   item.attributes;
      })

      setDataobj(arrMap);
    };

    fetchData();
  }, []);

  const handleKeyChange = (e) => {
    console.log(e.target.value);
   // setKeywords(e.target.value);
  };

  //二级数据类型
  const handleSecondlevel = (e) => {
    console.log(e.target.value);
    //setSecondlevel(e.target.value);
  };

  //一级数据类型
  const handleFirstlevel = (e) => {
    console.log(e.target.value);
    setFirstlevel(e.target.value);
   // ChangeSecondLevel(e);

  };



  function ChangeSecondLevel (e) {




  }


  useEffect( () =>{
    if (firstlevel == "score"){//评分类数据
      //setSecondlevel("personaldebt")
      setSecondlevelMap(secondlevelMap_score);
    }else if (firstlevel == "label"){//标签类数据
      //setSecondlevel("personalport")
      setSecondlevelMap(secondlevelMap_label);

    }else if (firstlevel == "seek"){//咨询服务类数据
      //setSecondlevel("marketinfo")
      setSecondlevelMap(secondlevelMap_seek);

    }else if (firstlevel == "price"){//价格评估类数据
      //setSecondlevel("vehicleinfo")
      setSecondlevelMap(secondlevelMap_price);

    }else if (firstlevel == "invest"){//投资分析数据
      //setSecondlevel("informatdata")
      setSecondlevelMap(secondlevelMap_invest);

    }else if (firstlevel == "regulat"){//监管合规数据
      //setSecondlevel("judicialdata")
      setSecondlevelMap(secondlevelMap_regulat);

    }else if (firstlevel == "govern"){//政务数据
      //setSecondlevel("accumnfund")
      setSecondlevelMap(secondlevelMap_govern);

    }else if (firstlevel == "blacklist"){//黑名单类数据
      //setSecondlevel("antiblacklist")
      setSecondlevelMap(secondlevelMap_blacklist);

    }else if (firstlevel == "verifi"){//核验类数据
      //setSecondlevel("invoice")
      setSecondlevelMap(secondlevelMap_verifi);

    }

  },[firstlevel]);


  //排序规则
  const handleSortChange = (e) => {
    console.log(e.target.value);
    //setSortorder(e.target.value);
  };
 
  
  
  return (
  <>
  <Form  className={styles.form} >
      <Row className={styles.row}   >
    <label className={styles.label}> 一级数据类型:  </label>
    <Radio.Group value={firstlevel} onChange={handleFirstlevel}>
      <Radio.Button value="verifi">核验类数据</Radio.Button>
      <Radio.Button value="score">评分类数据</Radio.Button>
      <Radio.Button value="label">标签类数据</Radio.Button>
      <Radio.Button value="seek">咨询服务类</Radio.Button>
      <Radio.Button value="price">价格评估类</Radio.Button>
      <Radio.Button value="invest">投资分析</Radio.Button>
      <Radio.Button value="regulat">监管合规</Radio.Button>
      <Radio.Button value="govern">政务数据</Radio.Button>
      <Radio.Button value="blacklist">黑名单类</Radio.Button>
    </Radio.Group>
      </Row>
    <Row className={styles.row}   >
      <label className={styles.label}> 二级数据类型:  </label>
      <Radio.Group value={secondlevel} onChange={handleSecondlevel}>
        {secondlevelMap.map((item)=> <Radio.Button  value={item.key}>{item.show}</Radio.Button>)}
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
      dataSource={dataobj}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title} style={{width:290}}>
            <Meta
                avatar={<Avatar src={item.src} />}
                title={item.name}
                description={item.description}
            />


          </Card>
        </List.Item>
      )}
    />

  </>
);
  
};


export default Content1;
