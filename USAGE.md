<!-- Start SDK Example Usage -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

(async () => {
    const sdk = new Sensible({
        bearerAuth: "",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->