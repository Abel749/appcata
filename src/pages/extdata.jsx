import ExtDataLayout from '../components/extdatalayout';
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const ExtData = () => {
  
  return (
       <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
        <div>
          <ExtDataLayout />
        </div>
       </StyleProvider>
  )
}

export default ExtData;