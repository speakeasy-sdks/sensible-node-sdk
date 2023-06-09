/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Manage your SenseML configuration
 */
export class Pdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Get CSV extraction
     *
     * @remarks
     * You can use this endpoint to get CSV files from PDF documents. In more detail, this endpoint converts your JSON document extraction to a comma-separated values. To compile multiple PDF documents into one CSV file, specify the IDs of their recent extractions in the request separated by commas, for example, `/generate_csv/867514cc-fce7-40eb-8e9d-e6ec48cdac34,5093c65f-05bd-46a3-8df7-da3ed00f6d35`. For the best compiled spreadsheet results, configure your SenseML so that the PDFs output identically named fields. For more information about the conversion process, see [SenseML to spreadsheet reference](doc:excel-reference). This endpoint also works with JPEG, TIFF, and PNG documents. Call this endpoint after an extraction completes. For more information about checking extraction status, see the `GET /documents/{id}` endpoint.
     */
    async getCsvExtraction(
        ids: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCsvExtractionResponse> {
        const req = new operations.GetCsvExtractionRequest({
            ids: ids,
        });
        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/generate_csv/{ids}", req);

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
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
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getCsvExtraction200ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCsvExtraction200ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 415:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = JSON.stringify(httpRes?.data);
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
        config?: AxiosRequestConfig
    ): Promise<operations.GetExcelExtractionResponse> {
        const req = new operations.GetExcelExtractionRequest({
            ids: ids,
        });
        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/generate_excel/{ids}", req);

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
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
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getExcelExtraction200ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetExcelExtraction200ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 415:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = JSON.stringify(httpRes?.data);
                }
                break;
        }

        return res;
    }
}
