<!-- Start SDK Example Usage -->


```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataJsonRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EncodedPdf, Environment } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

(async () => {
    const sdk = new Sensible({
        bearerAuth: "",
    });
    const documentType: string = "string";
    const encodedPdf: EncodedPdf = {
        document: "string",
    };
    const environment: Environment = Environment.Production;

    const res = await sdk.document.extractDataJson(documentType, encodedPdf, environment);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->