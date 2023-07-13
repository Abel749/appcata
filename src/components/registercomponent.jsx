import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import config from "../../next.config";
import loginStyle from "../styles/login.module.css";

const RegisterComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userData.username.length <3){
      alert("用户名至少需要3个字符");
      return;
    }
    try {
        const baseUrl = config.baseUrl.Url + 'api/auth/local/register';
        const response = await axios.post( baseUrl , userData);
        if( 200 == response.status){
            alert("注册成功");
            router.push('/login');
        }
    } catch (err) {
        alert("注册失败,校验不通过,请检查注册信息");
    }
  }
    const goToLogin = () => {
        router.push('/login');
    }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }

  return (
      <div className={loginStyle.contentStyle} >
          <img src='/index/loginHome.png' className={loginStyle.contentStyle} alt=""/>
          <div className={loginStyle.baseBox}>
              <div>
                  <h3>用户名:</h3>
                  <input type="text" name="username" placeholder="请输入用户名" onChange={e => handleChange(e)} className={loginStyle.baseBoxInput} />
              </div>
              <div>
                  <h3>邮箱:</h3>
                  <input type="text" name="email" placeholder="请输入邮箱" onChange={e => handleChange(e)} className={loginStyle.baseBoxInput} />
              </div>
              <div>
                  <h3>密码:</h3>
                  <input type="password" name="password"   placeholder="请输入密码" onChange={e => handleChange(e)} className={loginStyle.baseBoxInput} />
              </div>
              <div className={loginStyle.BuTon}>
                  <button onClick={handleSubmit}>注&nbsp;册</button>
                  <button onClick={goToLogin}>登&nbsp;录</button>
              </div>
        </div>
      </div>
  )
}

export default RegisterComponent;