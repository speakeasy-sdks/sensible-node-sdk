<div align="center">
    <img src="https://user-images.githubusercontent.com/68016351/226408758-256382d5-c892-4f41-abc6-6bd4ded5b9ae.jpeg" width="500">
   <p>The Document Orchestration Platform for Developers. Onboard documents in minutes with a single sample. Extract accurate data in seconds.</p>
   <a href="https://docs.sensible.so/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/sensible-node-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/sensible-node-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/sensible-node-sdk/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/sensible-node-sdk?sort=semver&style=for-the-badge" /></a>
</div>

[![Run on Repl.it](https://repl.it/badge/github/speakeasy-sdks/sensible-node-sdk)](https://replit.com/join/jtnwgbwhep-sagarbatchu1)

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/sensible
```

### Yarn

```bash
yarn add @speakeasy-sdks/sensible
```
<!-- End SDK Installation -->

## Authentication: 

Sensible uses API keys to authenticate requests. Find your API key on your [Account page](https://app.sensible.so/signin/?returnUrl=%2Faccount%2F) in the Sensible app. If you're having trouble with your current key, please reach out to support@sensible.so. Keep your API keys secure and do not share them publicly accessible areas such as GitHub, client-side code, etc.

Authentication to the API is performed via Bearer Authentication. Provide your API key as the bearer auth value, for example:

```bash
curl --request POST \
       --url "https://api.sensible.so/v0/extract/<TYPE>" \
       --header "Authorization: Bearer <YOUR_API_KEY>" \
       --header "Content-Type: application/pdf" \
       --data-binary "@your_doc.pdf" \
```

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataFromADocumentJsonRequest, ExtractDataFromADocumentJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum, ValidationSeverityEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ExtractDataFromADocumentJsonRequest = {
  documentType: "corrupti",
  encodedPdf: {
    document: "provident",
  },
  environment: EnvironmentEnum.Development,
};

sdk.document.extractDataFromADocumentJson(req).then((res: ExtractDataFromADocumentJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [document](docs/document/README.md)

* [extractDataFromADocumentJson](docs/document/README.md#extractdatafromadocumentjson) - Extract data from a document
* [extractDataFromADocumentRaw](docs/document/README.md#extractdatafromadocumentraw) - Extract data from a document
* [generateAnUploadUrl](docs/document/README.md#generateanuploadurl) - Extract doc at a Sensible URL
* [provideADownloadUrl](docs/document/README.md#provideadownloadurl) - Extract doc at your URL

### [getExcelFromPDFs](docs/getexcelfrompdfs/README.md)

* [getCsvExtraction](docs/getexcelfrompdfs/README.md#getcsvextraction) - Get CSV extraction
* [getExcelExtraction](docs/getexcelfrompdfs/README.md#getexcelextraction) - Get Excel extraction

### [portfolio](docs/portfolio/README.md)

* [generateAnUploadUrlForAPdfPortfolio](docs/portfolio/README.md#generateanuploadurlforapdfportfolio) - Extract portfolio at a Sensible URL
* [provideADownloadUrlForAPdfPortfolio](docs/portfolio/README.md#provideadownloadurlforapdfportfolio) - Extract portfolio at your URL

### [retrieveExtraction](docs/retrieveextraction/README.md)

* [retrievingResults](docs/retrieveextraction/README.md#retrievingresults) - Retrieve extraction
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
