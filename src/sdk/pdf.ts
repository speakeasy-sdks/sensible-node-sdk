/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Manage your SenseML configuration
 */
export enum GetCsvExtractionAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export enum GetExcelExtractionAcceptEnum {
    applicationJson = "application/json",
    textPlain = "text/plain",
}

export class Pdf {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get CSV extraction
     *
     * @remarks
     * You can use this endpoint to get CSV files from PDF documents. In more detail, this endpoint converts your JSON document extraction to a comma-separated values. To compile multiple PDF documents into one CSV file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_csv/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.
     */
    async getCsvExtraction(
        ids: string,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetCsvExtractionAcceptEnum
    ): Promise<operations.GetCsvExtractionResponse> {
        const req = new operations.GetCsvExtractionRequest({
            ids: ids,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/generate_csv/{ids}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
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
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCsvExtractionResponse = new operations.GetCsvExtractionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getCsvExtraction200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetCsvExtraction200ApplicationJSON
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
            case httpRes?.status == 415:
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
     * Get Excel extraction
     *
     * @remarks
     * You can use this endpoint to get Excel files from PDF documents. In more detail, this endpoint converts your JSON document extraction to an Excel spreadsheet. To compile multiple PDF documents into one Excel file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_excel/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.
     */
    async getExcelExtraction(
        ids: string,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetExcelExtractionAcceptEnum
    ): Promise<operations.GetExcelExtractionResponse> {
        const req = new operations.GetExcelExtractionRequest({
            ids: ids,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/generate_excel/{ids}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
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
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetExcelExtractionResponse =
            new operations.GetExcelExtractionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getExcelExtraction200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetExcelExtraction200ApplicationJSON
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
            case httpRes?.status == 415:
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
