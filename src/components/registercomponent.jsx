import { useState } from 'react';
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
    try {
        const baseUrl = config.baseUrl.Url + 'api/auth/local/register';
        const response = await axios.post( baseUrl , userData);
        console(`response`,response);
        router.replace('/profile');
    } catch (err) {
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
          <form onSubmit={handleSubmit} className={loginStyle.baseBox}>
              <button>Register</button>
              <button onClick={goToLogin} >Login</button>
              <br/>
              <label>
                  Username:
                  <input type="text" name="username" onChange={e => handleChange(e)} />
              </label>
              <br/>
              <label>
                  Email:
                  <input type="text" name="email" onChange={e => handleChange(e)} />
              </label>
              <br/>
              <label>
                  Password:
                  <input type="password" name="password" onChange={e => handleChange(e)} />
              </label>
              <br/>
        </form>
      </div>
  )
}

export default RegisterComponent;