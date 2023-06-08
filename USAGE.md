<!-- Start SDK Example Usage -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { Environment, ExtractionStatus, ValidationSeverity } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});

sdk.document.extractDataJson("corrupti", {
  document: "provident",
}, Environment.Development).then((res: ExtractDataJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->