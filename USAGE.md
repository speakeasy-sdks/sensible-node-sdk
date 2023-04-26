<!-- Start SDK Example Usage -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataFromADocumentJsonRequest, ExtractDataFromADocumentJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum, ValidationSeverityEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ExtractDataFromADocumentJsonRequest = {
  documentType: "corrupti",
  encodedPdf: {
    document: "provident",
  },
  environment: EnvironmentEnum.Development,
};

sdk.document.extractDataFromADocumentJson(req).then((res: ExtractDataFromADocumentJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->