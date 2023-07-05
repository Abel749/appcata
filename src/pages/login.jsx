import axios from 'axios';
import nookies from 'nookies';
import LoginComponent from '../components/LoginComponent';

import { Layout } from 'antd';
import config from "../../next.config";
const { Content } = Layout;

const Login = () => {
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
      let url = config.baseUrl.Url + 'api/users/me';
      const { data } = await axios.get( url, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
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
        destination: '/'
      }
    }
  }

  return {
    props: {user}
  }
}

export default Login;