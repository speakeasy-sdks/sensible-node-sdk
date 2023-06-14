/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Manage your portfolio of documents
 */
export class Portfolio {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Extract portfolio at a Sensible URL
     *
     * @remarks
     * Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF at the specified `document_url` into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction results or poll status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).
     */
    async generateSensiblePortfolioUrl(
        requestBody?: operations.GenerateSensiblePortfolioUrlRequestBody,
        environment?: shared.Environment,
        config?: AxiosRequestConfig
    ): Promise<operations.GenerateSensiblePortfolioUrlResponse> {
        const req = new operations.GenerateSensiblePortfolioUrlRequest({
            requestBody: requestBody,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/generate_upload_url";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
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

        const res: operations.GenerateSensiblePortfolioUrlResponse =
            new operations.GenerateSensiblePortfolioUrlResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.uploadPortfolioResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UploadPortfolioResponse
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                }
                break;
        }

        return res;
    }

    /**
     * Extract portfolio at your URL
     *
     * @remarks
     * Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio.  Take the following steps - 1. Use this endpoint to generate a Sensible URL. 2. PUT the PDF you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"` Note - the pre-signed upload_url does not support Base64 encoded PDFs. You PUT the PDF bytes directly to the endpoint and must omit the content-type header. 3. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).
     */
    async generateYourPortfolioUrl(
        requestBody?: operations.GenerateYourPortfolioUrlRequestBody,
        environment?: shared.Environment,
        config?: AxiosRequestConfig
    ): Promise<operations.GenerateYourPortfolioUrlResponse> {
        const req = new operations.GenerateYourPortfolioUrlRequest({
            requestBody: requestBody,
            environment: environment,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/extract_from_url";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
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

        const res: operations.GenerateYourPortfolioUrlResponse =
            new operations.GenerateYourPortfolioUrlResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.extractFromUrlPortfolioResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExtractFromUrlPortfolioResponse
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = decodedRes;
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = decodedRes;
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = decodedRes;
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = decodedRes;
                }
                break;
        }

        return res;
    }
}
