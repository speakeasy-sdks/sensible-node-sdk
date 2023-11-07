# RetrieveResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `badRequest`                                            | *string*                                                | :heavy_minus_sign:                                      | Bad Request                                             |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `sensibleEncounteredAnUnknownError`                     | *string*                                                | :heavy_minus_sign:                                      | Internal Server Error                                   |
| `unauthorized`                                          | *string*                                                | :heavy_minus_sign:                                      | Not authorized                                          |
| `unsupportedMediaType`                                  | *string*                                                | :heavy_minus_sign:                                      | Unsupported Media Type                                  |
| `oneOf`                                                 | *any*                                                   | :heavy_minus_sign:                                      | Returns the extraction.                                 |