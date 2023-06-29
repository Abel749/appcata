import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import LoginComponent from '../components/LoginComponent';
import { Layout } from 'antd';
const {  Content } = Layout;
const Login = () => {
  const router = useRouter();
  const goToRegister = () => {
   router.push('/register');
  }

  return (
  <div>
      <Content><LoginComponent /></Content>
  </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;
  
  if (cookies?.jwt) {
    try {
		
	  console.log(`cookiesofindex`,cookies);
      const { data } = await axios.get('http://127.0.0.1:1337/api/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
	  
	  
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }

  return {
    props: {}
  }
}

export default Login;