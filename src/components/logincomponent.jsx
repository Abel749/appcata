import { useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios';

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
	  //const response = await axios.post('http://127.0.0.1:1337/api/auth/local',{ ...userData });
	  //console.log(`response1`,response1);
      const response = await axios.post('api/login', { ...userData });
      //const response1 = await axios('http://127.0.0.1:1337/api/restaurants');
	  console.log(`response`,response);
	  //console.log(`response1`,response1);
	  
      router.push('/profile');  
      
    } catch (err) {
      console.log(err);
    }
	
	
	
	
	
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="identifier" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginComponent;