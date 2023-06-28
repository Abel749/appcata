import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import LoginComponent from '../components/LoginComponent';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;




const contentStyle = {
  height: "592px",
  color: '#fff',
  padding:0,
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#555555',
};

const Login = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push('/register');
  }

  return (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Content style={contentStyle}><LoginComponent /></Content>
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