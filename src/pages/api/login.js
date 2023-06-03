import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req, res) => {
	
  const { identifier,password } = req.body;
  
  
  try {
	console.log(`aa`,identifier,password);
//	const postRes = await axios('http://127.0.0.1:1337/api/restaurants');
	
    const postRes = await axios.post('http://127.0.0.1:1337/api/auth/local', {
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