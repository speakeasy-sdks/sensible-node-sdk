# @speakeasy-sdks/sensible

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

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ExtractDataFromADocumentJsonRequest,
  ExtractDataFromADocumentJsonResponse
} from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import {
  EnvironmentEnum,
} from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Sensible } from "@speakeasy-sdks/sensible";
const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ExtractDataFromADocumentJsonRequest = {
  documentType: "unde",
  encodedPdf: {
    document: "deserunt",
  },
  environment: EnvironmentEnum.Development,
};

sdk.document.extractDataFromADocumentJson(req).then((res: ExtractDataFromADocumentJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### document

* `extractDataFromADocumentJson` - Extract data from a document
* `extractDataFromADocumentRaw` - Extract data from a document
* `generateAnUploadUrl` - Extract doc at a Sensible URL
* `provideADownloadUrl` - Extract doc at your URL

### getExcelFromPDFs

* `getCsvExtraction` - Get CSV extraction
* `getExcelExtraction` - Get Excel extraction

### portfolio

* `generateAnUploadUrlForAPdfPortfolio` - Extract portfolio at a Sensible URL
* `provideADownloadUrlForAPdfPortfolio` - Extract portfolio at your URL

### retrieveExtraction

* `retrievingResults` - Retrieve extraction
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
