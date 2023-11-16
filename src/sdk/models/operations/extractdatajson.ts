/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ExtractDataJsonRequest extends SpeakeasyBase {
    /**
     * Type of document to extract from. Create your custom type in the Sensible app (for example, `rate_confirmation`, `certificate_of_insurance`, or `home_inspection_report`).
     *
     * @remarks
     * To quickly test this endpoint using the `Try It` button in this interactive explorer, use the `senseml_basics` tutorial document type with this [example document](https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/1_extract_your_first_data.pdf).
     * As a convenience, Sensible automatically detects the best-fit extraction from among the extraction queries ("configs") in the document type.
     * For example, if you create an `auto_insurance_quotes` type, you can add `carrier 1`, `carrier 2`, and `carrier 3` configs
     * to the type in the Sensible app so that you can extract data from all these carriers using the same `document_type`, without specifying the carrier in the API request.
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_type" })
    documentType: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    encodedPdf: shared.EncodedPdf;

    /**
     * If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environment" })
    environment?: shared.Environment;
}

export class ExtractDataJsonResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    fourHundredTextPlainBadRequest?: string;

    /**
     * Not authorized
     */
    @SpeakeasyMetadata()
    fourHundredAndOneTextPlainUnauthorized?: string;

    /**
     * Unsupported Media Type
     */
    @SpeakeasyMetadata()
    fourHundredAndFifteenTextPlainUnsupportedMediaType?: string;

    /**
     * Too Many Requests
     */
    @SpeakeasyMetadata()
    fourHundredAndTwentyNineTextPlainUnsupportedMediaType?: string;

    /**
     * Internal Server Error
     */
    @SpeakeasyMetadata()
    fiveHundredTextPlainSensibleEncounteredAnUnknownError?: string;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The structured data extracted from the document.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    extractionSingleResponse?: shared.ExtractionSingleResponse;

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
}
