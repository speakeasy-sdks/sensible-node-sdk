/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionContentPortfolio } from "./extractioncontentportfolio";
import { Expose, Type } from "class-transformer";

export class DocumentInPortfolio extends SpeakeasyBase {
    /**
     * Name of the "configuration",  a collection of SenseML queries for extracting document data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "configuration" })
    configuration?: string;

    /**
     * Unique user-friendly name for a document type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documentType" })
    documentType?: string;

    /**
     * Page in the portfolio on which this document for this extraction ends.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endPage" })
    endPage?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "output" })
    @Type(() => ExtractionContentPortfolio)
    output?: ExtractionContentPortfolio;

    /**
     * Page in the portfolio on which the document for this extraction starts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startPage" })
    startPage?: number;
}
