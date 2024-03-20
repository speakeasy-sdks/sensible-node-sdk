# RetrieveResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `fourHundred`                                           | *string*                                                | :heavy_minus_sign:                                      | Bad Request                                             |
| `fourHundredAndOne`                                     | *string*                                                | :heavy_minus_sign:                                      | Not authorized                                          |
| `fourHundredAndFifteen`                                 | *string*                                                | :heavy_minus_sign:                                      | Unsupported Media Type                                  |
| `fiveHundred`                                           | *string*                                                | :heavy_minus_sign:                                      | Internal Server Error                                   |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_check_mark:                                      | Raw HTTP response; suitable for custom response parsing |
| `oneOf`                                                 | *any*                                                   | :heavy_minus_sign:                                      | Returns the extraction.                                 |