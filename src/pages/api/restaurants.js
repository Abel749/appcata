import axios from 'axios';
import config from "../../../next.config";

export default async (req, res) => {
  try {
      let url = config.baseUrl.Url + 'api/restaurants';
      const postRes = await axios(url);
	  
      res = postRes;
    res.status(200).end();
  } catch (e) {
    res.status(400).send(req,e.response.data.message[0].messages[0]);
  }
}