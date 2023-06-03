import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import LoginComponent from '../components/LoginComponent';
import TopContent from '../components/topcontent';
import Content1 from '../components/content1';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '80px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const Login = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push('/register');
  }

  return (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}><TopContent /></Header>
      <Content style={contentStyle}><LoginComponent /><button onClick={goToRegister}>Register</button></Content>
	  <Footer style={footerStyle}><FootContent /></Footer>
    </Layout>
  </Space>  
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