import ErrorPageLayout from "../components/errorpagelayout";
import {StyleProvider,legacyLogicalPropertiesTransformer} from '@ant-design/cssinjs';

const ErrorPage = () => {
  
  return (
      <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
            <div>
              <ErrorPageLayout />
            </div>
      </StyleProvider>
  )
}

export default ErrorPage;