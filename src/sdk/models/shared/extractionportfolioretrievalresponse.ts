/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentInPortfolio } from "./documentinportfolio";
import { ExtractionStatus } from "./extractionstatus";
import { Expose, Transform, Type } from "class-transformer";

export class ExtractionPortfolioRetrievalResponse extends SpeakeasyBase {
    /**
     * Date and time Sensible set the extraction's status to COMPLETED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "completed" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    completed?: Date;

    /**
     * Date and time Sensible created the extraction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created?: Date;

    @SpeakeasyMetadata({ elemType: DocumentInPortfolio })
    @Expose({ name: "documents" })
    @Type(() => DocumentInPortfolio)
    documents?: DocumentInPortfolio[];

    /**
     * URL of the document
     */
    @SpeakeasyMetadata()
    @Expose({ name: "download_url" })
    downloadUrl?: string;

    /**
     * Unique ID for the extraction, used to retrieve the extraction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Total number of pages in the portfolio.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "page_count" })
    pageCount?: number;

    /**
     * Extraction status (WAITING, COMPLETE, FAILED)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ExtractionStatus;
}