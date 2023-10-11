import {Row } from 'antd';
import React, {useEffect} from 'react';
import indexStyle from '../../styles/Index.module.css';


const DataShare = () => {

    const changePic1 = () =>{
        document.getElementById("changeDataShare").src ='/index/group41.png';
        document.getElementById("dataShare1").style.borderBottom="2px solid#358BDE";
        document.getElementById("dataShare2").style.borderBottom="none";
        document.getElementById("dataShare3").style.borderBottom="none";

        document.getElementById("dataShareH1").style.color="#358BDE";
        document.getElementById("dataShareH2").style.color="black";
        document.getElementById("dataShareH3").style.color="black";

    }
    const changePic2 = () =>{
        document.getElementById("changeDataShare").src ='/index/group43.png';
        document.getElementById("dataShare1").style.borderBottom="none";
        document.getElementById("dataShare2").style.borderBottom="2px solid#358BDE";
        document.getElementById("dataShare3").style.borderBottom="none";

        document.getElementById("dataShareH1").style.color="black";
        document.getElementById("dataShareH2").style.color="#358BDE";
        document.getElementById("dataShareH3").style.color="black";
    }
    const changePic3 = () =>{
        document.getElementById("changeDataShare").src ='/index/group42.png';
        document.getElementById("dataShare1").style.borderBottom="none";
        document.getElementById("dataShare2").style.borderBottom="none";
        document.getElementById("dataShare3").style.borderBottom="2px solid#358BDE";

        document.getElementById("dataShareH1").style.color="black";
        document.getElementById("dataShareH2").style.color="black";
        document.getElementById("dataShareH3").style.color="#358BDE";
    }



    useEffect(() => {
        changePic1();
    }, []);// eslint-disable-line


   return (
        <div className={indexStyle.baseCard}>
            <h1>数据资产共享与服务</h1>
            <h2>数据门户以用户看数、用数场景为核心，基于数据资产内容，面向用户提供找数据、看数据、用数据的统一服务入口</h2>
            <Row>
                <div className={indexStyle.baseBox1} onClick={changePic1}>
                    <div id="dataShare1">
                        <img src="/index/findData.png"  className={indexStyle.dataImg} />
                        <h3 id="dataShareH1">找数</h3>
                    </div>
                </div>
                <div className={indexStyle.baseBox2} onClick={changePic2}>
                    <div id="dataShare2">
                        <img src="/index/watchData.png" className={indexStyle.dataImg} />
                        <h3 id="dataShareH2">看数</h3>
                    </div>
                </div>
                <div className={indexStyle.baseBox3} onClick={changePic3}>
                    <div id="dataShare3">
                        <img src="/index/useData.png" className={indexStyle.dataImg} />
                        <h3 id="dataShareH3">用数</h3>
                    </div>
                </div>
            </Row>
            <Row>
                <div className={indexStyle.dataShareBase}>
                        <div className={indexStyle.dataShare}>
                            <img  id="changeDataShare" src="/index/group41.png" className={indexStyle.changeDataShare} />
                        </div>
                </div>
            </Row>
        </div>
    )
};

export default DataShare;
