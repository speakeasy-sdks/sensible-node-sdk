# portfolio

## Overview

Manage your portfolio of documents

### Available Operations

* [generateSensiblePortfolioUrl](#generatesensibleportfoliourl) - Extract portfolio at a Sensible URL
* [generateYourPortfolioUrl](#generateyourportfoliourl) - Extract portfolio at your URL

## generateSensiblePortfolioUrl

Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF at the specified `document_url` into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction results or poll status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import {
  GenerateSensiblePortfolioUrlRequest,
  GenerateSensiblePortfolioUrlRequestBody,
  GenerateSensiblePortfolioUrlResponse,
} from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { Environment, Webhook } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});
const requestBody: GenerateSensiblePortfolioUrlRequestBody = {
  types: [
    "["tax_returns","bank_statements","credit_reports"]",
  ],
  webhook: {
    payload: "info extra to the default extraction payload",
    url: "https://example.com/example_webhook_url",
  },
};
const environment: Environment = Environment.Development;

sdk.portfolio.generateSensiblePortfolioUrl(requestBody, environment).then((res: GenerateSensiblePortfolioUrlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                                                                                                                                                                                                                            | [operations.GenerateSensiblePortfolioUrlRequestBody](../../models/operations/generatesensibleportfoliourlrequestbody.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                      |
| `environment`                                                                                                                                                                                                                                                                                                            | [shared.Environment](../../models/shared/environment.md)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists. |
| `config`                                                                                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                                                                                            |


### Response

**Promise<[operations.GenerateSensiblePortfolioUrlResponse](../../models/operations/generatesensibleportfoliourlresponse.md)>**


## generateYourPortfolioUrl

Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio.  Take the following steps - 1. Use this endpoint to generate a Sensible URL. 2. PUT the PDF you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"` Note - the pre-signed upload_url does not support Base64 encoded PDFs. You PUT the PDF bytes directly to the endpoint and must omit the content-type header. 3. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import {
  GenerateYourPortfolioUrlRequest,
  GenerateYourPortfolioUrlRequestBody,
  GenerateYourPortfolioUrlResponse,
} from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { Environment, Webhook } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});
const requestBody: GenerateYourPortfolioUrlRequestBody = {
  documentUrl: "https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/auto_insurance_anyco.pdf",
  types: [
    "["tax_returns","bank_statements","credit_reports"]",
    "["tax_returns","bank_statements","credit_reports"]",
  ],
  webhook: {
    payload: "info extra to the default extraction payload",
    url: "https://example.com/example_webhook_url",
  },
};
const environment: Environment = Environment.Production;

sdk.portfolio.generateYourPortfolioUrl(requestBody, environment).then((res: GenerateYourPortfolioUrlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                                                                                                                                                                                                                            | [operations.GenerateYourPortfolioUrlRequestBody](../../models/operations/generateyourportfoliourlrequestbody.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                      |
| `environment`                                                                                                                                                                                                                                                                                                            | [shared.Environment](../../models/shared/environment.md)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists. |
| `config`                                                                                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                                                                                            |


### Response

**Promise<[operations.GenerateYourPortfolioUrlResponse](../../models/operations/generateyourportfoliourlresponse.md)>**

