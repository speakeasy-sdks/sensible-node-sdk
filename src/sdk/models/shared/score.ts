/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The score for the extraction, used to help choose the best extraction.
 */
export class Score extends SpeakeasyBase {
    /**
     * Number of non-null fields Sensible extracted from the document using this config
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fields_present" })
    fieldsPresent?: number;

    /**
     * Errors are 1 penality point and warnings are 0.5 points. See the validation_summary for a breakdown.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "penalties" })
    penalties?: number;

    /**
     * The score total is fields_present minus penalty points. In the absence of fingerprints, Sensible returns the extraction in the document type with the highest score.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: number;
}
