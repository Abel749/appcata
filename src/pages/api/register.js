import axios from 'axios';
import { setCookie } from 'nookies'
import config from "../../../next.config";

export default async (req, res) => {
  const { username, password, email } = req.body;

  try {
    let url = config.baseUrl.Url + 'api/auth/local/register';
    const response = await axios.post(url, {
      username,
      email,
      password,
    })

    setCookie({ res }, 'jwt', response.data.jwt, {
      httpOnly: true,
/*      secure: process.env.NODE_ENV !== 'development',*/
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.data);
  }
}