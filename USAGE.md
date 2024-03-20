<!-- Start SDK Example Usage [usage] -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->