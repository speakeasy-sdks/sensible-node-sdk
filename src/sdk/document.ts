/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Extract data from a document
 */
export class Document {
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
  async extractDataFromADocumentJson(
    req: operations.ExtractDataFromADocumentJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExtractDataFromADocumentJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExtractDataFromADocumentJsonRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/extract/{document_type}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "encodedPdf",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] =
      "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ExtractDataFromADocumentJsonResponse =
      new operations.ExtractDataFromADocumentJsonResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.extractionSingleResponse = utils.objectToClass(
            httpRes?.data,
            shared.ExtractionSingleResponse
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
      case [415, 429].includes(httpRes?.status):
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
  async extractDataFromADocumentRaw(
    req: operations.ExtractDataFromADocumentRawRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ExtractDataFromADocumentRawResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ExtractDataFromADocumentRawRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/extract/{document_type}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "raw"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] =
      "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ExtractDataFromADocumentRawResponse =
      new operations.ExtractDataFromADocumentRawResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.extractionSingleResponse = utils.objectToClass(
            httpRes?.data,
            shared.ExtractionSingleResponse
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
      case [415, 429].includes(httpRes?.status):
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
  async generateAnUploadUrl(
    req: operations.GenerateAnUploadUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateAnUploadUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateAnUploadUrlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/generate_upload_url/{document_type}",
      req
    );

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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] =
      "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GenerateAnUploadUrlResponse =
      new operations.GenerateAnUploadUrlResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.uploadResponse = utils.objectToClass(
            httpRes?.data,
            shared.UploadResponse
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
      case [415, 429].includes(httpRes?.status):
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
   * Extract doc at your URL
   *
   * @remarks
   * Extract data asynchronously from a document at the specified `document_url`.<br/> You must use this or other asynchronous endpoints for documents that are over 4.5MB in size or require over 30 seconds to process. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For a step-by-step tutorial on calling this endpoint, see [Try asynchronous extraction from your URL](doc:api-tutorial-async-1).
   */
  async provideADownloadUrl(
    req: operations.ProvideADownloadUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProvideADownloadUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProvideADownloadUrlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/extract_from_url/{document_type}",
      req
    );

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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] =
      "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ProvideADownloadUrlResponse =
      new operations.ProvideADownloadUrlResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.extractFromUrlResponse = utils.objectToClass(
            httpRes?.data,
            shared.ExtractFromUrlResponse
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
      case [415, 429].includes(httpRes?.status):
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
