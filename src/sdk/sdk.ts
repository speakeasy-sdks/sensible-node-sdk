/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Document } from "./document";
import * as shared from "./models/shared";
import { Pdf } from "./pdf";
import { Portfolio } from "./portfolio";
import { Results } from "./results";
import axios from "axios";
import { AxiosInstance } from "axios";

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
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.0";
    sdkVersion = "0.49.1";
    genVersion = "2.93.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Extraction: Extract structured data from documents with the Sensible API.
 */
export class Sensible {
    /**
     * Extract data from a document
     */
    public document: Document;
    /**
     * Manage your SenseML configuration
     */
    public pdf: Pdf;
    /**
     * Manage your portfolio of documents
     */
    public portfolio: Portfolio;
    /**
     * Retrieve an extraction
     */
    public results: Results;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.document = new Document(this.sdkConfiguration);
        this.pdf = new Pdf(this.sdkConfiguration);
        this.portfolio = new Portfolio(this.sdkConfiguration);
        this.results = new Results(this.sdkConfiguration);
    }
}
