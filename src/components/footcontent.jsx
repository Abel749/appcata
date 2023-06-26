import React from 'react';
import { Col, Row } from 'antd';
import AppCard from '../components/appcard';
import Image from "next/image";

const FootContent = () => {

  return (
  <> 
    <div >
      <Image src="/foot.png" alt=""  width={1100} height={170}  priority/>
    </div>
  </>
  )
}


export default FootContent;
