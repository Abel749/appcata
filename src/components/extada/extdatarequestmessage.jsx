import {Col, List, Row} from "antd";
import config from "../../../next.config";
import axios from "axios";
import React, {useEffect, useState} from "react";
import exTaDaStyle from "../../styles/extada.module.css";

const ExtDataRequestMessage = () => {

    const [tempStr, setTempStr] = useState();
    const [dataItem, setDataItem] = useState();
    useEffect(() => {
        getLastFiveCommon().then();
    }, []);// eslint-disable-line

    //获取最后5条评论信息
    const getLastFiveCommon = async() => {
        let baseUrl = config.baseUrl.Url + 'api/comments?pagination[page]=1&pagination[pageSize]=5&sort[id]=desc';
        const result = await axios(
            baseUrl
        );
        const commons = result.data.data.map((item) => {
            item.attributes.publishedAt = getDate(item.attributes.publishedAt);
            return item.attributes;
        })
        setDataItem(commons);
    }
    const getDate = (timestamp) =>{
        let date = new Date(timestamp);
        let YY = date.getFullYear() + '-';
        let DD = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + "-";
        let dd = date.getDate() + ' ';
        /* let hh = date.getHours() + ':';
        let mm = date.getMinutes() + ':';
        let ss = date.getSeconds();
        return YY + DD + dd + hh + mm + ss;*/
        return YY + DD + dd;
    }


    const commitMsg = async() =>{
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let comments = document.getElementById("comments").value;
        if(username.length <=0 ){
            alert("请登录后再评论");
            return;
        }
        if(comments.length <=0 || tempStr == comments){
            alert("请修改评论信息，切勿重复评论");
            return;
        }
        const userData = {
            "data": {
                UserName: username,
                Email: email,
                description: comments,
                publishedAt: new Date().getTime(),
            }
        }
        const baseUrl = config.baseUrl.Url + 'api/comments';
        const response = await axios.post( baseUrl , userData);
        if( 200 == response.status){
            setTempStr(comments);
            getLastFiveCommon().then();
            document.getElementById('comments').value ='';
        }

    }
    return(
        <div className={exTaDaStyle.baseCard} >
            <h1 className={exTaDaStyle.titleH1}>需求留言板</h1>
                <div className={exTaDaStyle.msgLeft}>
                    <img src='/extData/externalData_20.png' className={exTaDaStyle.msgImg} alt=""/>
                </div>
                <div className={exTaDaStyle.msgRight}>
                    <List dataSource={dataItem}
                          renderItem={(item) => (
                              <List.Item >
                                  <Row className={exTaDaStyle.msgRow}>
                                      <Col className={exTaDaStyle.msgCol1}>
                                          {item.UserName}
                                      </Col>
                                      <Col className={exTaDaStyle.msgCol2}>
                                          {item.description}
                                      </Col>
                                      <Col className={exTaDaStyle.msgCol3}>
                                          {item.publishedAt}
                                      </Col>
                                  </Row>
                              </List.Item>
                          )}
                    />
                    <Row className={exTaDaStyle.msgRow}>
                        <textarea id="comments" placeholder="请输入留言" className={exTaDaStyle.msgTextarea}/>
                        <text id="tempStr" style={{display:"none"}} value= {tempStr}/>
                        <button type="primary"  onClick={commitMsg} className={exTaDaStyle.msgButton}>提交</button>
                    </Row>

                </div>
        </div>
    );
}

export default ExtDataRequestMessage;
