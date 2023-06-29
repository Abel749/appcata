import NewsListLayout from '../components/newsListlayout';
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const NewsList = () => {
  
  return (
      <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
        <div>
          <NewsListLayout />
        </div>
      </StyleProvider>
  )
}

export default NewsList;