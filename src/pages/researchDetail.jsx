import ResearchDetailLayout from "../components/hfzw/researchDetailLayout";
import nookies from "nookies";
import axios from "axios";
import config from "../../next.config";
const ResearchDetail = (props) => {
  return (
      <ResearchDetailLayout propName={props.user} />
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
    return {
        props: {user}
    }
}

export default ResearchDetail;
