<div align="center">
    <img src="https://github.com/speakeasy-sdks/sensible-node-sdk/assets/6267663/f2db11b7-29e8-4475-adcd-be2dbdd48f8f" width="350">
   <p>The Document Orchestration Platform for Developers. Onboard documents in minutes with a single sample. Extract accurate data in seconds.</p>
   <a href="https://docs.sensible.so/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/sensible-node-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/sensible-node-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/sensible-node-sdk/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/sensible-node-sdk?sort=semver&style=for-the-badge" /></a>
</div>


[![Run on Repl.it](https://repl.it/badge/github/speakeasy-sdks/sensible-node-sdk)](https://replit.com/join/jtnwgbwhep-sagarbatchu1)

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/sensible
```

### Yarn

```bash
yarn add @speakeasy-sdks/sensible
```
<!-- End SDK Installation [installation] -->

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

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [results](docs/sdks/results/README.md)

* [retrieve](docs/sdks/results/README.md#retrieve) - Retrieve extraction

### [document](docs/sdks/document/README.md)

* [extractDataJson](docs/sdks/document/README.md#extractdatajson) - Extract data from a document
* [extractDataRaw](docs/sdks/document/README.md#extractdataraw) - Extract data from a document
* [generateUploadUrl](docs/sdks/document/README.md#generateuploadurl) - Extract doc at a Sensible URL
* [provideDownloadUrl](docs/sdks/document/README.md#providedownloadurl) - Extract doc at your URL

### [portfolio](docs/sdks/portfolio/README.md)

* [generateSensiblePortfolioUrl](docs/sdks/portfolio/README.md#generatesensibleportfoliourl) - Extract portfolio at a Sensible URL
* [generateYourPortfolioUrl](docs/sdks/portfolio/README.md#generateyourportfoliourl) - Extract portfolio at your URL

### [pdf](docs/sdks/pdf/README.md)

* [getCsvExtraction](docs/sdks/pdf/README.md#getcsvextraction) - Get CSV extraction
* [getExcelExtraction](docs/sdks/pdf/README.md#getexcelextraction) - Get Excel extraction
<!-- End Available Resources and Operations [operations] -->





<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    let res;
    try {
        res = await sdk.results.retrieve(id);
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.sensible.so/v0` | None |

#### Example

```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        serverIdx: 0,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        serverURL: "https://api.sensible.so/v0",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @speakeasy-sdks/sensible } from "Sensible";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Sensible({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Sensible } from "@speakeasy-sdks/sensible";
import { RetrieveRequest } from "@speakeasy-sdks/sensible/dist/sdk/models/operations";

async function run() {
    const sdk = new Sensible({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "246a6f60-0e5b-11eb-b720-295a6fba723e";

    const res = await sdk.results.retrieve(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
