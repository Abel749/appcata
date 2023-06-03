import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req, res) => {
	
  //const {identifier,password} = req.body;
  
  
  try {
	 
      const postRes = await axios('http://127.0.0.1:1337/api/restaurants');
	  
      res = postRes;
    console.log(`czg100`,postRes.data);
    res.status(200).end();
  } catch (e) {
	console.log(`czg11`);
    res.status(400).send(req,e.response.data.message[0].messages[0]);
  }
}