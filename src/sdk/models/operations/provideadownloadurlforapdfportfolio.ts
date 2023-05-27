/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ProvideADownloadUrlForAPdfPortfolioRequestBody extends SpeakeasyBase {
    /**
     * URL that responds to a GET request with the bytes of the document to be extracted. This URL must be either publicly accessible, or presigned with a security token as part of the URL path. To check if the URL meets these criteria, open the URL with a web browser. The browser must either render the document as a full-page view with no other data, or download the document, without prompting for authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_url" })
    documentUrl: string;

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

export class ProvideADownloadUrlForAPdfPortfolioRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: ProvideADownloadUrlForAPdfPortfolioRequestBody;

    /**
     * If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environment" })
    environment?: shared.Environment;
}

export class ProvideADownloadUrlForAPdfPortfolioResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    badRequest?: string;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Returns the ID to use to retrieve the extraction.
     */
    @SpeakeasyMetadata()
    extractFromUrlPortfolioResponse?: shared.ExtractFromUrlPortfolioResponse;

    /**
     * Internal Server Error
     */
    @SpeakeasyMetadata()
    sensibleEncounteredAnUnknownError?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

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
}
