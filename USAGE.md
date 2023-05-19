<!-- Start SDK Example Usage -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataFromADocumentJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { Environment, ExtractionStatus, ValidationSeverity } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.extractDataFromADocumentJson({
  documentType: "corrupti",
  encodedPdf: {
    document: "provident",
  },
  environment: Environment.Development,
}).then((res: ExtractDataFromADocumentJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->