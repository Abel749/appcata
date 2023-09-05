import React from 'react';
import commonStyle from "../../styles/common.module.css";

const FootContent = () => {

  return (
  <> 
    <div className={commonStyle.footerStyle}>
        <div className={commonStyle.footerLeft}>
         <img src="/index/footer.png" />
        </div>
        <div className={commonStyle.footerCenter}>
          <h3>关注</h3>
          <div>
            <img src="/index/cuSer.png" />
          </div>
          <div>
            <img src="/index/pubAcc.png" />
          </div>
        </div>
        <div className={commonStyle.footerRight}>
          <h3>联系</h3>
          <p>地址 : <span>北京市招商国际金融C座</span></p>
          <p>邮编 : <span>100102</span></p>
          <p>电话 : <span>010-88888888</span></p>
        </div>
        <div className={commonStyle.copyright}>
          <h4><span>@Copyright+[2023]+[sjzyb@hfbank.com.cn]</span></h4>
        </div>
      </div>
  </>
  )
}


export default FootContent;
