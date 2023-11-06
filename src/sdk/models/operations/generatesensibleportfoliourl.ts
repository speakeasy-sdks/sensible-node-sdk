/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GenerateSensiblePortfolioUrlRequestBody extends SpeakeasyBase {
    /**
     * Specifies the document types contained in the PDF portfolio.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "types" })
    types: string[];

    /**
     * Specifies to return extraction results to the defined webhook as soon as they're complete, so you don't have to poll for results status. Sensible also calls this webhook on error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "webhook" })
    @Type(() => shared.Webhook)
    webhook?: shared.Webhook;
}

export class GenerateSensiblePortfolioUrlRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: GenerateSensiblePortfolioUrlRequestBody;

    /**
     * If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environment" })
    environment?: shared.Environment;
}

export class GenerateSensiblePortfolioUrlResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

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
     * Returns the upload_url at which to PUT the document for extraction
     */
    @SpeakeasyMetadata()
    uploadPortfolioResponse?: shared.UploadPortfolioResponse;
}
