import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import config from "../../next.config";
import loginStyle from '../styles/login.module.css';


const LoginComponent = () => {

    const router = useRouter();

    const [userData, setUserData] = useState({
      identifier: '',
      password: '',
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(`haha`,{ ...userData });
      try {
        const baseUrl = config.baseUrl.Url + 'api/auth/local';
        const response = await axios.post( baseUrl ,{ ...userData });
        console.log(`response`,response);
        router.push('/profile');
      } catch (err) {
          alert("登录失败，用户名或密码错误");
        console.log(err);
      }
    }
    const goToRegister = () => {
      router.push('/register');
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({...userData, [name]: value })
    }

  return (
      <div className={loginStyle.contentStyle} >
        <div  className={loginStyle.baseBox}>
            <div>
                <h3>用户名:</h3>
                <input type="text" name="identifier" placeholder="邮箱" onChange={e => handleChange(e)} />
            </div>
            <div>
                <h3>密码:</h3>
                <input type="password" name="password"   placeholder="请输入密码" onChange={e => handleChange(e)} />
            </div>
            <div className={loginStyle.BoTon}>
                <button onClick={handleSubmit} >登&nbsp;录</button>
                <button onClick={goToRegister} >注&nbsp;册</button>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent;