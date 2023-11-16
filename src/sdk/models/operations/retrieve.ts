/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class RetrieveRequest extends SpeakeasyBase {
    /**
     * Unique ID for the extraction, used to retrieve the extraction.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class RetrieveResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    badRequest?: string;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Internal Server Error
     */
    @SpeakeasyMetadata()
    sensibleEncounteredAnUnknownError?: string;

    /**
     * Not authorized
     */
    @SpeakeasyMetadata()
    unauthorized?: string;

    /**
     * Unsupported Media Type
     */
    @SpeakeasyMetadata()
    unsupportedMediaType?: string;

    /**
     * Returns the extraction.
     */
    @SpeakeasyMetadata()
    oneOf?: any;
}
