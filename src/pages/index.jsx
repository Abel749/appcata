import IndexLayout from '../components/indexlayout';
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const Home = () => {
  
  return (
      <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
        <div>
          <IndexLayout />
        </div>
    </StyleProvider>
  )
}

export default Home;