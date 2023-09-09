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
    security?: shared.Security | (() => Promise<shared.Security>);
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
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.0";
    sdkVersion = "0.50.1";
    genVersion = "2.107.3";
    retryConfig?: utils.RetryConfig;
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
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.document = new Document(this.sdkConfiguration);
        this.pdf = new Pdf(this.sdkConfiguration);
        this.portfolio = new Portfolio(this.sdkConfiguration);
        this.results = new Results(this.sdkConfiguration);
    }
}
