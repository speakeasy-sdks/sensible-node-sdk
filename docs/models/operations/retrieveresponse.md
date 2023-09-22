# RetrieveResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `badRequest`                                            | *string*                                                | :heavy_minus_sign:                                      | Bad Request                                             |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `sensibleEncounteredAnUnknownError`                     | *string*                                                | :heavy_minus_sign:                                      | Internal Server Error                                   |
| `unauthorized`                                          | *string*                                                | :heavy_minus_sign:                                      | Not authorized                                          |
| `unsupportedMediaType`                                  | *string*                                                | :heavy_minus_sign:                                      | Unsupported Media Type                                  |
| `retrieve200ApplicationJSONOneOf`                       | *any*                                                   | :heavy_minus_sign:                                      | Returns the extraction.                                 |