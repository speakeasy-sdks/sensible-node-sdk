import * as utils from "../internal/utils";
import { Document } from "./document";
import { GetExcelFromPDFs } from "./getexcelfrompdfs";
import * as shared from "./models/shared";
import { Portfolio } from "./portfolio";
import { RetrieveExtraction } from "./retrieveextraction";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://api.sensible.so/v0"] as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: Extract structured data from documents with the Sensible API.
 */
export class Sensible {
  public document: Document;
  public getExcelFromPDFs: GetExcelFromPDFs;
  public portfolio: Portfolio;
  public retrieveExtraction: RetrieveExtraction;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.4.1";
  private _genVersion = "1.11.2";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

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
