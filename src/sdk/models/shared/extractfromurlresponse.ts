/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionStatus } from "./extractionstatus";
import { Expose, Transform } from "class-transformer";

/**
 * Returns the ID to use to retrieve the extraction
 */
export class ExtractFromUrlResponse extends SpeakeasyBase {
  /**
   * Date and time Sensible created the extraction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  /**
   * Name of the environment to which the configuration used by this extraction was published.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: string;

  /**
   * Extraction error messages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  /**
   * Unique ID for the extraction, used to retrieve the extraction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Extraction status (WAITING, COMPLETE, FAILED)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatus;

  /**
   * Unique user-friendly name for a document type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
