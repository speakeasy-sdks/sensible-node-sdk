<div align="center">
    <img src="https://github.com/speakeasy-sdks/sensible-node-sdk/assets/6267663/f2db11b7-29e8-4475-adcd-be2dbdd48f8f" width="350">
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
import { ExtractDataJsonRequest, ExtractDataJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EncodedPdf, Environment } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});
const documentType: string = "quibusdam";
const encodedPdf: EncodedPdf = {
  document: "unde",
};
const environment: Environment = Environment.Development;

sdk.document.extractDataJson(documentType, encodedPdf, environment).then((res: ExtractDataJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Document](docs/sdks/document/README.md)

* [extractDataJson](docs/sdks/document/README.md#extractdatajson) - Extract data from a document
* [extractDataRaw](docs/sdks/document/README.md#extractdataraw) - Extract data from a document
* [generateUploadUrl](docs/sdks/document/README.md#generateuploadurl) - Extract doc at a Sensible URL
* [provideDownloadUrl](docs/sdks/document/README.md#providedownloadurl) - Extract doc at your URL

### [Pdf](docs/sdks/pdf/README.md)

* [getCsvExtraction](docs/sdks/pdf/README.md#getcsvextraction) - Get CSV extraction
* [getExcelExtraction](docs/sdks/pdf/README.md#getexcelextraction) - Get Excel extraction

### [Portfolio](docs/sdks/portfolio/README.md)

* [generateSensiblePortfolioUrl](docs/sdks/portfolio/README.md#generatesensibleportfoliourl) - Extract portfolio at a Sensible URL
* [generateYourPortfolioUrl](docs/sdks/portfolio/README.md#generateyourportfoliourl) - Extract portfolio at your URL

### [Results](docs/sdks/results/README.md)

* [retrieve](docs/sdks/results/README.md#retrieve) - Retrieve extraction
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->



<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
