# getExcelFromPDFs

## Overview

Manage your SenseML configuration

### Available Operations

* [getCsvExtraction](#getcsvextraction) - Get CSV extraction
* [getExcelExtraction](#getexcelextraction) - Get Excel extraction

## getCsvExtraction

You can use this endpoint to get CSV files from PDF documents. In more detail, this endpoint converts your JSON document extraction to a comma-separated values. To compile multiple PDF documents into one CSV file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_csv/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { GetCsvExtractionRequest, GetCsvExtractionResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetCsvExtractionRequest = {
  ids: "246a6f60-0e5b-11eb-b720-295a6fba723e",
};

sdk.getExcelFromPDFs.getCsvExtraction(req).then((res: GetCsvExtractionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelExtraction

You can use this endpoint to get Excel files from PDF documents. In more detail, this endpoint converts your JSON document extraction to an Excel spreadsheet. To compile multiple PDF documents into one Excel file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_excel/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { GetExcelExtractionRequest, GetExcelExtractionResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Sensible({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetExcelExtractionRequest = {
  ids: "246a6f60-0e5b-11eb-b720-295a6fba723e",
};

sdk.getExcelFromPDFs.getExcelExtraction(req).then((res: GetExcelExtractionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
