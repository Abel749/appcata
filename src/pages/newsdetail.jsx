import NewsDetailLayout from "../components/newsDetaillayout";
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const NewsDetail = () => {
  
  return (
      <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
            <div>
              <NewsDetailLayout />
            </div>
      </StyleProvider>
  )
}

export default NewsDetail;