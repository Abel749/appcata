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
        <form onSubmit={handleSubmit} className={loginStyle.baseBox}>
            <button>Login</button>
            <button onClick={goToRegister}>Register</button>
            <br/>
            <label>
                Email:
            <input type="text" name="identifier" onChange={e => handleChange(e)} />
            </label>
            <br/>
            <label>
                Password:
            <input type="password" name="password" onChange={e => handleChange(e)} />
            </label>
        </form>
    </div>
  )
}

export default LoginComponent;