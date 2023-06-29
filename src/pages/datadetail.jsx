import DataDetailLayout from '../components/datadetaillayout';
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';
const DataDetail = () => {

    return (
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
            <div>
                <DataDetailLayout />
            </div>
        </StyleProvider>
    )
}

export default DataDetail;