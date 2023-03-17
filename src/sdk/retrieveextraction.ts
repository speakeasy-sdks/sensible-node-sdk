import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class RetrieveExtraction {
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
   * retrievingResults - Retrieve extraction
   *
   * Use this endpoint in conjunction with asynchronous extraction requests to retrieve your results. You can also use this endpoint to retrieve the results for documents extractions from the synchronous /extract endpoint. To poll extraction status, check the `status` field in this endpoint's response. When the extraction completes, the returned status is `COMPLETE` and the response includes results in the `parsed_document` field.  For fields in the extraction for which Sensible couldn't find a value, Sensible returns null.
   **/
  retrievingResults(
    req: operations.RetrievingResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrievingResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrievingResultsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/documents/{id}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.RetrievingResultsResponse =
        new operations.RetrievingResultsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.retrievingResults200ApplicationJSONOneOf = httpRes?.data;
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
