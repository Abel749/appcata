import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import config from "../../next.config";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit} style={{width:"500px",height :"300px",backgroundColor : "red",marginLeft:"36%"}}>
      <label>
        Username:
        <input type="text" name="username" onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" onChange={e => handleChange(e)} />
      </label>
      <br />
      <button>Register</button>
    </form>
  )
}

export default RegisterComponent;