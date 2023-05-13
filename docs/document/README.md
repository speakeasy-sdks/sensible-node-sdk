# document

## Overview

Extract data from a document

### Available Operations

* [extractDataFromADocumentJson](#extractdatafromadocumentjson) - Extract data from a document
* [extractDataFromADocumentRaw](#extractdatafromadocumentraw) - Extract data from a document
* [generateAnUploadUrl](#generateanuploadurl) - Extract doc at a Sensible URL
* [provideADownloadUrl](#provideadownloadurl) - Extract doc at your URL

## extractDataFromADocumentJson

Extract data from a local document synchronously.

To explore this endpoint, use this interactive API reference, or use one of the following options:

- For a quick "hello world" response to this endpoint, see the [quickstart](doc:quickstart)
- For a step-by-step tutorial about calling this endpoint, see [Try synchronous extraction](doc:api-tutorial-sync).
- Run this endpoint in the Sensible Postman collection.
  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16839934-45339059-3fec-4c31-a891-9a12a3e1c22b?action=collection%2Ffork&collection-url=entityId%3D16839934-45339059-3fec-4c31-a891-9a12a3e1c22b%26entityType%3Dcollection%26workspaceId%3Ddbde09dc-b7dd-487d-a68f-20d32b008f90)

There are two options for posting the document bytes.
  1. (often preferred) specify the non-encoded document bytes as the entire request body,and specify the content-type, for example,"application/pdf" or "image/jpeg".
     See the following for supported file formats.
  2. Base64 encode the document bytes, specify them in a body "document" field, and specify application/json for the content type.

Using the Sensible app, you can extract from PDFs. Using the Sensible API, you can extract document data from the following file formats:

  - PDF
  - JPEG
  - PNG
  - TIFF

When extracting from image file formats, Sensible ignore OCR or OCR preprocessor settings you configure in the document type or SenseML configuration.

For TIFF documents, SenseML that attempts to return a rendered page returns an error, including:
  - pixel-based methods, such as Box, Checkbox, Signature, and image coordinates found with the Document Range methodf
  - Key/Value method
  - Fixed Table and Table methods with the Stop parameter specified. Use the Text Table method as an alternative.


### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataFromADocumentJsonResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum, ValidationSeverityEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.extractDataFromADocumentJson({
  documentType: "quibusdam",
  encodedPdf: {
    document: "unde",
  },
  environment: EnvironmentEnum.Development,
}).then((res: ExtractDataFromADocumentJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## extractDataFromADocumentRaw

Extract data from a local document synchronously.

To explore this endpoint, use this interactive API reference, or use one of the following options:

- For a quick "hello world" response to this endpoint, see the [quickstart](doc:quickstart)
- For a step-by-step tutorial about calling this endpoint, see [Try synchronous extraction](doc:api-tutorial-sync).
- Run this endpoint in the Sensible Postman collection.
  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16839934-45339059-3fec-4c31-a891-9a12a3e1c22b?action=collection%2Ffork&collection-url=entityId%3D16839934-45339059-3fec-4c31-a891-9a12a3e1c22b%26entityType%3Dcollection%26workspaceId%3Ddbde09dc-b7dd-487d-a68f-20d32b008f90)

There are two options for posting the document bytes.
  1. (often preferred) specify the non-encoded document bytes as the entire request body,and specify the content-type, for example,"application/pdf" or "image/jpeg".
     See the following for supported file formats.
  2. Base64 encode the document bytes, specify them in a body "document" field, and specify application/json for the content type.

Using the Sensible app, you can extract from PDFs. Using the Sensible API, you can extract document data from the following file formats:

  - PDF
  - JPEG
  - PNG
  - TIFF

When extracting from image file formats, Sensible ignore OCR or OCR preprocessor settings you configure in the document type or SenseML configuration.

For TIFF documents, SenseML that attempts to return a rendered page returns an error, including:
  - pixel-based methods, such as Box, Checkbox, Signature, and image coordinates found with the Document Range methodf
  - Key/Value method
  - Fixed Table and Table methods with the Stop parameter specified. Use the Text Table method as an alternative.


### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ExtractDataFromADocumentRawResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { EnvironmentEnum, ExtractionStatusEnum, ValidationSeverityEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.extractDataFromADocumentRaw({
  requestBody: "corrupti".encode(),
  documentType: "illum",
  environment: EnvironmentEnum.Production,
}).then((res: ExtractDataFromADocumentRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateAnUploadUrl

Extract data asynchronously from a document with the following steps. You must use this or other asynchronous endpoints for documents that are over 4.5MB in size or require over 90 seconds to process.
  1. Use this endpoint to generate a Sensible URL.
  2. PUT the document you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received
from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"`. Note: the pre-signed upload_url does not support Base64 encoded documents. You PUT the document bytes directly to the endpoint, and you must match the "Content-Type" header to that specified in the POST that creates the URL. If you omit the parameter, you must omit the header, and if you specify the parameter, you must include the exact header in the PUT.
  3.  To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the
GET documents/{id} endpoint.
For a step-by-step tutorial on calling this endpoint, see [Try asynchronous extraction from a Sensible URL](https://docs.sensible.so/docs/api-tutorial-async-2).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { GenerateAnUploadUrlResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { ContentTypeEnum, EnvironmentEnum, ExtractionStatusEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.generateAnUploadUrl({
  generateUrlRequest: {
    contentType: ContentTypeEnum.ImagePng,
    webhook: {
      payload: "info extra to the default extraction payload",
      url: "https://example.com/example_webhook_url",
    },
  },
  documentType: "deserunt",
  environment: EnvironmentEnum.Production,
}).then((res: GenerateAnUploadUrlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## provideADownloadUrl

Extract data asynchronously from a document at the specified `document_url`.<br/> You must use this or other asynchronous endpoints for documents that are over 4.5MB in size or require over 30 seconds to process. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For a step-by-step tutorial on calling this endpoint, see [Try asynchronous extraction from your URL](doc:api-tutorial-async-1).

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { ProvideADownloadUrlResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { ContentTypeEnum, EnvironmentEnum, ExtractionStatusEnum } from "@speakeasy-sdks/sensible/dist/sdk/models/shared";

const sdk = new Sensible({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.provideADownloadUrl({
  extractFromUrlRequest: {
    contentType: ContentTypeEnum.ImageJpeg,
    documentUrl: "https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/auto_insurance_anyco.pdf",
    webhook: {
      payload: "info extra to the default extraction payload",
      url: "https://example.com/example_webhook_url",
    },
  },
  documentType: "magnam",
  environment: EnvironmentEnum.Development,
}).then((res: ProvideADownloadUrlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
