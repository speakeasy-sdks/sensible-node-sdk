# pdf

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
import { GetCsvExtractionResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});

sdk.pdf.getCsvExtraction("246a6f60-0e5b-11eb-b720-295a6fba723e").then((res: GetCsvExtractionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelExtraction

You can use this endpoint to get Excel files from PDF documents. In more detail, this endpoint converts your JSON document extraction to an Excel spreadsheet. To compile multiple PDF documents into one Excel file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_excel/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.

### Example Usage

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { GetExcelExtractionResponse } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

const sdk = new Sensible({
  security: {
    bearerAuth: "",
  },
});

sdk.pdf.getExcelExtraction("246a6f60-0e5b-11eb-b720-295a6fba723e").then((res: GetExcelExtractionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
