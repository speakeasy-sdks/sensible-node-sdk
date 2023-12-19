# Results
(*results*)

## Overview

Retrieve an extraction

### Available Operations

* [retrieve](#retrieve) - Retrieve extraction

## retrieve

Use this endpoint in conjunction with asynchronous extraction requests to retrieve your results. You can also use this endpoint to retrieve the results for documents extractions from the synchronous /extract endpoint. To poll extraction status, check the `status` field in this endpoint's response. When the extraction completes, the returned status is `COMPLETE` and the response includes results in the `parsed_document` field.  For fields in the extraction for which Sensible couldn't find a value, Sensible returns null.

### Example Usage

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

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | Unique ID for the extraction, used to retrieve the extraction. | 246a6f60-0e5b-11eb-b720-295a6fba723e                           |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.RetrieveResponse](../../sdk/models/operations/retrieveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
