/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Document } from "./document";
import { GetExcelFromPDFs } from "./getexcelfrompdfs";
import * as shared from "./models/shared";
import { Portfolio } from "./portfolio";
import { RetrieveExtraction } from "./retrieveextraction";
import axios, { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Production server (uses live data)
   */
  "https://api.sensible.so/v0",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * Extract structured data from documents with the Sensible API.
 */
export class Sensible {
  /**
   * Extract data from a document
   */
  public document: Document;
  /**
   * Manage your SenseML configuration
   */
  public getExcelFromPDFs: GetExcelFromPDFs;
  /**
   * Manage your portfolio of documents
   */
  public portfolio: Portfolio;
  /**
   * Retrieve an extraction
   */
  public retrieveExtraction: RetrieveExtraction;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.7.0";
  private _genVersion = "2.15.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.document = new Document(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.getExcelFromPDFs = new GetExcelFromPDFs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.portfolio = new Portfolio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.retrieveExtraction = new RetrieveExtraction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
