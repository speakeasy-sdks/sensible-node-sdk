# portfolio

## Overview

Manage your portfolio of documents

### Available Operations

* [generateAnUploadUrlForAPdfPortfolio](#generateanuploadurlforapdfportfolio) - Extract portfolio at a Sensible URL
* [provideADownloadUrlForAPdfPortfolio](#provideadownloadurlforapdfportfolio) - Extract portfolio at your URL

## generateAnUploadUrlForAPdfPortfolio

Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF at the specified `document_url` into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction results or poll status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { GenerateAnUploadUrlForAPdfPortfolioResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.portfolio.generateAnUploadUrlForAPdfPortfolio({
  requestBody: {
    types: [
      "tax_returns,bank_statements,credit_reports",
    ],
    webhook: {
      payload: "info extra to the default extraction payload",
      url: "https://example.com/example_webhook_url",
    },
  },
  environment: EnvironmentEnum.Development,
}).then((res: GenerateAnUploadUrlForAPdfPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## provideADownloadUrlForAPdfPortfolio

Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio.  Take the following steps - 1. Use this endpoint to generate a Sensible URL. 2. PUT the PDF you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"` Note - the pre-signed upload_url does not support Base64 encoded PDFs. You PUT the PDF bytes directly to the endpoint and must omit the content-type header. 3. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ProvideADownloadUrlForAPdfPortfolioResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.portfolio.provideADownloadUrlForAPdfPortfolio({
  requestBody: {
    documentUrl: "https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/auto_insurance_anyco.pdf",
    types: [
      "tax_returns,bank_statements,credit_reports",
      "tax_returns,bank_statements,credit_reports",
    ],
    webhook: {
      payload: "info extra to the default extraction payload",
      url: "https://example.com/example_webhook_url",
    },
  },
  environment: EnvironmentEnum.Production,
}).then((res: ProvideADownloadUrlForAPdfPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
