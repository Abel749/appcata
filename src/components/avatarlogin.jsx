import React from 'react';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';

const AvatarLogin = () => {
  const router = useRouter();
  
  const login = () =>{
	router.push('/login');
  }
  
  return(
  <Space direction="vertical">
    <Space wrap>
      <Tooltip title="登录">
        <Button type="primary" shape="circle" onClick={login} icon={<UserOutlined />} />
      </Tooltip>
    </Space>  
  </Space>
);
}
export default AvatarLogin;
