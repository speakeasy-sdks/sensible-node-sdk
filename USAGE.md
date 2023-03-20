<!-- Start SDK Example Usage -->
```typescript
import {
  ExtractDataFromADocumentJsonRequest,
  ExtractDataFromADocumentJsonResponse
} from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import {
  EnvironmentEnum,
} from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Sensible } from "@speakeasy-sdks/sensible";
const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ExtractDataFromADocumentJsonRequest = {
  documentType: "unde",
  encodedPdf: {
    document: "deserunt",
  },
  environment: EnvironmentEnum.Development,
};

sdk.document.extractDataFromADocumentJson(req).then((res: ExtractDataFromADocumentJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->