/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Extract data from a document
 */
export enum ExtractDataJsonAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export enum ExtractDataRawAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export enum GenerateUploadUrlAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export enum ProvideDownloadUrlAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export class Document {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Extract data from a document
     *
     * @remarks
     * Extract data from a local document synchronously.
     *
     * To explore this endpoint, use this interactive API reference, or use one of the following options:
     *
     * - For a quick "hello world" response to this endpoint, see the [quickstart](doc:quickstart)
     * - For a step-by-step tutorial about calling this endpoint, see [Try synchronous extraction](doc:api-tutorial-sync).
     * - Run this endpoint in the Sensible Postman collection.
     *   [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16839934-45339059-3fec-4c31-a891-9a12a3e1c22b?action=collection%2Ffork&collection-url=entityId%3D16839934-45339059-3fec-4c31-a891-9a12a3e1c22b%26entityType%3Dcollection%26workspaceId%3Ddbde09dc-b7dd-487d-a68f-20d32b008f90)
     *
     * There are two options for posting the document bytes.
     *   1. (often preferred) specify the non-encoded document bytes as the entire request body,and specify the content-type, for example,"application/pdf" or "image/jpeg".
     *      See the following for supported file formats.
     *   2. Base64 encode the document bytes, specify them in a body "document" field, and specify application/json for the content type.
     *
     * Using the Sensible app, you can extract from PDFs. Using the Sensible API, you can extract document data from the following file formats:
     *
     *   - PDF
     *   - JPEG
     *   - PNG
     *   - TIFF
     *
     * When extracting from image file formats, Sensible ignore OCR or OCR preprocessor settings you configure in the document type or SenseML configuration.
     *
     * For TIFF documents, SenseML that attempts to return a rendered page returns an error, including:
     *   - pixel-based methods, such as Box, Checkbox, Signature, and image coordinates found with the Document Range methodf
     *   - Key/Value method
     *   - Fixed Table and Table methods with the Stop parameter specified. Use the Text Table method as an alternative.
     *
     */
    async extractDataJson(
        documentType: string,
        encodedPdf: shared.EncodedPdf,
        environment?: shared.Environment,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: ExtractDataJsonAcceptEnum
    ): Promise<operations.ExtractDataJsonResponse> {
        const req = new operations.ExtractDataJsonRequest({
            documentType: documentType,
            encodedPdf: encodedPdf,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/extract/{document_type}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "encodedPdf", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/plain;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ExtractDataJsonResponse = new operations.ExtractDataJsonResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.extractionSingleResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExtractionSingleResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Extract data from a document
     *
     * @remarks
     * Extract data from a local document synchronously.
     *
     * To explore this endpoint, use this interactive API reference, or use one of the following options:
     *
     * - For a quick "hello world" response to this endpoint, see the [quickstart](doc:quickstart)
     * - For a step-by-step tutorial about calling this endpoint, see [Try synchronous extraction](doc:api-tutorial-sync).
     * - Run this endpoint in the Sensible Postman collection.
     *   [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16839934-45339059-3fec-4c31-a891-9a12a3e1c22b?action=collection%2Ffork&collection-url=entityId%3D16839934-45339059-3fec-4c31-a891-9a12a3e1c22b%26entityType%3Dcollection%26workspaceId%3Ddbde09dc-b7dd-487d-a68f-20d32b008f90)
     *
     * There are two options for posting the document bytes.
     *   1. (often preferred) specify the non-encoded document bytes as the entire request body,and specify the content-type, for example,"application/pdf" or "image/jpeg".
     *      See the following for supported file formats.
     *   2. Base64 encode the document bytes, specify them in a body "document" field, and specify application/json for the content type.
     *
     * Using the Sensible app, you can extract from PDFs. Using the Sensible API, you can extract document data from the following file formats:
     *
     *   - PDF
     *   - JPEG
     *   - PNG
     *   - TIFF
     *
     * When extracting from image file formats, Sensible ignore OCR or OCR preprocessor settings you configure in the document type or SenseML configuration.
     *
     * For TIFF documents, SenseML that attempts to return a rendered page returns an error, including:
     *   - pixel-based methods, such as Box, Checkbox, Signature, and image coordinates found with the Document Range methodf
     *   - Key/Value method
     *   - Fixed Table and Table methods with the Stop parameter specified. Use the Text Table method as an alternative.
     *
     */
    async extractDataRaw(
        requestBody: Uint8Array,
        documentType: string,
        environment?: shared.Environment,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: ExtractDataRawAcceptEnum
    ): Promise<operations.ExtractDataRawResponse> {
        const req = new operations.ExtractDataRawRequest({
            requestBody: requestBody,
            documentType: documentType,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/extract/{document_type}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "raw");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/plain;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ExtractDataRawResponse = new operations.ExtractDataRawResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.extractionSingleResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExtractionSingleResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Extract doc at a Sensible URL
     *
     * @remarks
     * Extract data asynchronously from a document with the following steps. You must use this or other asynchronous endpoints for documents that are over 4.5MB in size or require over 90 seconds to process.
     *   1. Use this endpoint to generate a Sensible URL.
     *   2. PUT the document you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received
     * from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"`. Note: the pre-signed upload_url does not support Base64 encoded documents. You PUT the document bytes directly to the endpoint, and you must match the "Content-Type" header to that specified in the POST that creates the URL. If you omit the parameter, you must omit the header, and if you specify the parameter, you must include the exact header in the PUT.
     *   3.  To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the
     * GET documents/{id} endpoint.
     * For a step-by-step tutorial on calling this endpoint, see [Try asynchronous extraction from a Sensible URL](https://docs.sensible.so/docs/api-tutorial-async-2).
     */
    async generateUploadUrl(
        documentType: string,
        generateUrlRequest?: shared.GenerateUrlRequest,
        environment?: shared.Environment,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GenerateUploadUrlAcceptEnum
    ): Promise<operations.GenerateUploadUrlResponse> {
        const req = new operations.GenerateUploadUrlRequest({
            documentType: documentType,
            generateUrlRequest: generateUrlRequest,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/generate_upload_url/{document_type}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "generateUrlRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/plain;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GenerateUploadUrlResponse = new operations.GenerateUploadUrlResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.uploadResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UploadResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Extract doc at your URL
     *
     * @remarks
     * Extract data asynchronously from a document at the specified `document_url`.<br/> You must use this or other asynchronous endpoints for documents that are over 4.5MB in size or require over 30 seconds to process. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For a step-by-step tutorial on calling this endpoint, see [Try asynchronous extraction from your URL](doc:api-tutorial-async-1).
     */
    async provideDownloadUrl(
        documentType: string,
        extractFromUrlRequest?: shared.ExtractFromUrlRequest,
        environment?: shared.Environment,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: ProvideDownloadUrlAcceptEnum
    ): Promise<operations.ProvideDownloadUrlResponse> {
        const req = new operations.ProvideDownloadUrlRequest({
            documentType: documentType,
            extractFromUrlRequest: extractFromUrlRequest,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/extract_from_url/{document_type}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "extractFromUrlRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, text/plain;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ProvideDownloadUrlResponse =
            new operations.ProvideDownloadUrlResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.extractFromUrlResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExtractFromUrlResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
