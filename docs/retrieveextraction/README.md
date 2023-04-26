# retrieveExtraction

## Overview

Retrieve an extraction

### Available Operations

* [retrievingResults](#retrievingresults) - Retrieve extraction

## retrievingResults

Use this endpoint in conjunction with asynchronous extraction requests to retrieve your results. You can also use this endpoint to retrieve the results for documents extractions from the synchronous /extract endpoint. To poll extraction status, check the `status` field in this endpoint's response. When the extraction completes, the returned status is `COMPLETE` and the response includes results in the `parsed_document` field.  For fields in the extraction for which Sensible couldn't find a value, Sensible returns null.

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrievingResultsRequest, RetrievingResultsResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RetrievingResultsRequest = {
  id: "246a6f60-0e5b-11eb-b720-295a6fba723e",
};

sdk.retrieveExtraction.retrievingResults(req).then((res: RetrievingResultsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
