import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios';
import loginStyle from '../styles/login.module.css';

const LoginComponent = () => {

    const router = useRouter();

    const [userData, setUserData] = useState({
      identifier: '',
      password: '',
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('api/login', {...userData});
          if(200 == response.status){
              router.push('/');
          }
      } catch (err) {
          alert("登录失败，用户名或密码错误");
          console.log(err);
      }
    };
    const goToRegister = () => {
      router.push('/register');
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({...userData, [name]: value })
    };

    return (
      <div className={loginStyle.contentStyle} >
        <img src='/index/loginHome.png' className={loginStyle.contentStyle} alt=""/>
        <div className={loginStyle.loginBox}>
            <h3><span>&nbsp;</span></h3>
            <h3>用户名:</h3>
            <input type="text" name="identifier" placeholder="邮箱" onChange={e => handleChange(e)} className={loginStyle.baseBoxInput} />
            <h3>密码:</h3>
            <input type="password" name="password"   placeholder="请输入密码" onChange={e => handleChange(e)} className={loginStyle.baseBoxInput} />
            <div className={loginStyle.BuTon}>
                <button onClick={handleSubmit} >登&nbsp;录</button>
                <button onClick={goToRegister} >注&nbsp;册</button>
            </div>
            <h3><span>&nbsp;</span></h3>
        </div>
    </div>
    )
}

export default LoginComponent;