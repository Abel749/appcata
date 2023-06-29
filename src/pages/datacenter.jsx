import DataCenterLayout from '../components/datacenterlayout';
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const DataCenter = () => {
  
  return (
      <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
        <div>
          <DataCenterLayout />
        </div>
      </StyleProvider>
  )
}

export default DataCenter;