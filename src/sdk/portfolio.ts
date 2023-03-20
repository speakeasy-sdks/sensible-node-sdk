import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Portfolio {
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
   * generateAnUploadUrlForAPdfPortfolio - Extract portfolio at a Sensible URL
   *
   * Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF at the specified `document_url` into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio. Take the following steps. 1. Run this endpoint. 2. To retrieve the extraction results or poll status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).
   **/
  generateAnUploadUrlForAPdfPortfolio(
    req: operations.GenerateAnUploadUrlForAPdfPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateAnUploadUrlForAPdfPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateAnUploadUrlForAPdfPortfolioRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/generate_upload_url";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GenerateAnUploadUrlForAPdfPortfolioResponse =
        new operations.GenerateAnUploadUrlForAPdfPortfolioResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.uploadPortfolioResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UploadPortfolioResponse
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
            res.sensibleEncounteredAnUnknownError = JSON.stringify(
              httpRes?.data
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * provideADownloadUrlForAPdfPortfolio - Extract portfolio at your URL
   *
   * Use this endpoint with multiple documents that are packaged into one PDF file (a PDF "portfolio"). Segments a PDF into the specified document types (for example, 1099, w2, and bank_statement) and then runs extractions asynchronously for each document Sensible finds in the PDF portfolio.  Take the following steps - 1. Use this endpoint to generate a Sensible URL. 2. PUT the PDF you want to extract data from at the URL, where `SENSIBLE_UPLOAD_URL` is the URL you received from this endpoint's response. For example, `curl -T ./sample.pdf "SENSIBLE_UPLOAD_URL"` Note - the pre-signed upload_url does not support Base64 encoded PDFs. You PUT the PDF bytes directly to the endpoint and must omit the content-type header. 3. To retrieve the extraction or poll its status, use the extraction `id` returned in the response to call the GET documents/{id} endpoint. For more about extracting from PDF portfolios, see [Extracting from document portfolios](doc:portfolio).
   **/
  provideADownloadUrlForAPdfPortfolio(
    req: operations.ProvideADownloadUrlForAPdfPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProvideADownloadUrlForAPdfPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProvideADownloadUrlForAPdfPortfolioRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/extract_from_url";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ProvideADownloadUrlForAPdfPortfolioResponse =
        new operations.ProvideADownloadUrlForAPdfPortfolioResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.extractFromUrlPortfolioResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ExtractFromUrlPortfolioResponse
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
            res.sensibleEncounteredAnUnknownError = JSON.stringify(
              httpRes?.data
            );
          }
          break;
      }

      return res;
    });
  }
}
