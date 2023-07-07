import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { UserOutlined} from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import axios from "axios";

const AvatarLogin = (props) => {

  const [msg, setMsg] = useState();

  const [state, setState] = useState({
    userName: "",//用户名
    email: "",//邮箱

  })
  function changeUserCode(event) {
    setState({
      userName:event.target.value,
      email:event.target.value
    });
  }

  useEffect(() => {
    //换一个欢迎短语
    const user = props.propName;
    if( null != user){
      setMsg('欢迎'+user.username + '~');
      setState({
        userName:user.username,
        email:user.email
      });
      document.getElementById('login').style.display = "none";
    }else {
      setMsg('登录后可发表评论~');
      document.getElementById('logout').style.display = "none";
    }
  }, []);// eslint-disable-line

  const router = useRouter();

  const login = () =>{
	router.push('/login');
  }

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/login').then();
    } catch (e) {
      console.log(e);
    }
  }
  return(
  <Space direction="vertical">
    <Space wrap>
      <span>{msg}</span>
      <input style={{display:"none"}} id ="username" value={state.userName}
             onChange={changeUserCode} />
      <input style={{display:"none"}} id ="email" value={state.email}
             onChange={changeUserCode} />
      <div id="login">
        <Tooltip title="登录">
          <Button type="primary" shape="circle"  onClick={login} icon={<UserOutlined />} />
        </Tooltip>
      </div>
      <div id="logout">
        <Tooltip title="登出" >
          <Button type="primary" shape="circle"   onClick={logout} icon={<UserOutlined />} />
        </Tooltip>
      </div>

    </Space>  
  </Space>
);
}

export default AvatarLogin;
