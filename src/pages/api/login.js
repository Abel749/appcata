import axios from 'axios';
import { setCookie } from 'nookies'
import config from "../../../next.config";

export default async (req, res) => {
	
  const { identifier,password } = req.body;
  
  
  try {
    const baseUrl = config.baseUrl.Url;
    const url = baseUrl + 'api/auth/local';
    const postRes = await axios.post(url, {
		identifier,
		password,
    }) 

    
	
    setCookie({ res }, 'jwt', postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    //console.log(`czg10`,postRes);
    res.status(200).end();
  } catch (e) {
	console.log(`czg11`,req.body);
    res.status(400).send(e.data);
  }
}